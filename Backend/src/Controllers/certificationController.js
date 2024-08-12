import fs from "fs";
import csv from "csvtojson";
import { certificateModel } from "../Models/Certification.js";

export const certification = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const filePath = await req.file.path;
    console.log(filePath);
    const jsonArray = await csv().fromFile(filePath);
    // console.log(jsonArray);
    const validData = jsonArray.filter((item) => item.NAME && item.CERN);
    // console.log(validData);

    const finalData = validData.filter((item) => {
      // Check if all values in the object are either empty strings or undefined
      return Object.values(item).some(
        (value) => value !== "" && value !== undefined,
      );
    });

    console.log(finalData);
    if (finalData.length > 0) {
      try {
        await certificateModel.insertMany(finalData);
        res
          .status(201)
          .json({ message: "File uploaded and data inserted successfully" });
      } catch (insertError) {
        if (insertError.code === 11000) {
          // Duplicate key error code
          res.status(400).json({
            message: "Duplicate key error: Some records already exist.",
            error: insertError.message,
          });
        } else {
          res.status(500).json({
            message: "Error inserting data",
            error: insertError.message,
          });
        }
      }
    }

    fs.unlink(filePath, (err) => {
      if (err) console.error("Error deleting file:", err);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const addSingleCertification = async (req, res) => {
  try {
    const {
      NAME,
      CERN,
      SERIAL,
      FOR,
      TYPE,
      PROGRAM,
      DURATION,
      DateOfProgram,
      DateOfIssue,
    } = req.body;

    if (
      !NAME ||
      !CERN ||
      !SERIAL ||
      !FOR ||
      !TYPE ||
      !PROGRAM ||
      !DURATION ||
      !DateOfProgram ||
      !DateOfIssue
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new certification document
    const newCertification = new certificateModel({
      NAME,
      CERN,
      SERIAL,
      FOR,
      TYPE,
      PROGRAM,
      DURATION,
      DateOfProgram,
      DateOfIssue,
    });

    await newCertification.save();
    res
      .status(201)
      .json({
        message: "Certification added successfully",
        certification: newCertification,
      });
  } 
  catch (error) {
    // Handle any errors, including duplicate key errors
    if (error.code === 11000) {
      return res
        .status(400)
        .json({
          message: "Duplicate key error: CERN must be unique",
          error: error.message,
        });
    }
    res
      .status(500)
      .json({ message: "Error adding certification", error: error.message });
  }
};

export const getCertificationDetails = async (req, res) => {
  try {
    const CERN = req.params.cern;
    const NAME = req.params.name;

    if (!CERN || !NAME) {
      return res.status(400).json({ message: "CERN and NAME are required" });
    }

    const certification = await certificateModel.findOne({ CERN, NAME });

    if (!certification) {
      return res.status(404).json({ message: "Certification not found" });
    }

    res.status(200).json({ certification });

  }
  catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving certification",
        error: error.message,
      });
  }
};
