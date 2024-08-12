import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema({
    NAME: {
        type: String,
        required: true
    },
    CERN: {
        type: String,
        required: true,
        unique: true
    },
    SERIAL: {
        type: String,
        required: true
    },
    FOR: {
        type: String,
        required: true
    },
    TYPE: {
        type: String,
        required: true
    },
    PROGRAM: {
        type: String,
        required: true
    },
    DURATION: {
        type: String,
        required: true
    },
    VERIFY : {
        type: Boolean,
        default: true
    },
    DateOfProgram: {
        type: String,
        required: true
    },
    DateOfIssue: {
        type: String,
        required: true
    }
});

certificationSchema.pre('save', function (next) {
    this.NAME = this.NAME.toUpperCase();
    next();
});


export const certificateModel = new mongoose.model("certificateModel",certificationSchema);