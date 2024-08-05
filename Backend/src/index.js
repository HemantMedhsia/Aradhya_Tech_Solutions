// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./Db/db.js";
import { app } from "./app.js";
import userRoutes from "./Routes/userRoutes.js"

const port = process.env.PORT || 4000;

dotenv.config({
    path: "./.env",
});



app.use("/api/user", userRoutes)



connectDB()
    .then(() => { 
        console.log("DB connected Sucessfully");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        app.on("error", (error) => {
            console.log("Error is here: ", error);
            throw error;
        });
    })
    .catch((err) => {
        console.log(err);
    });

   
    