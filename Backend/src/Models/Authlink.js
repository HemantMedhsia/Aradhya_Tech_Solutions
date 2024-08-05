import mongoose from "mongoose"

const AuthlinkSchema = new mongoose.Schema({
    link: {
        type:String,
        default: "/login"
    }
})

export const AuthModel = new mongoose.model('AuthModel', AuthlinkSchema)