import mongoose from 'mongoose';
const Schema = mongoose.Schema

const userSchema = new Schema({
    id:{type:String, required:true, unique:true},
    passWord:{type:String, required:true, trim:true},
    email:{type:String, required:true, unique:true},
    birth:{type:Date, default:Date.now}
},{timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;