import { model, Schema } from "mongoose"

const userModel = new Schema({
    email:{type:String, unique:true,require:true},
    password:{type:String,require:true},
    isActivated:{type:Boolean, default:false},
    activationLink:{type:String},
})

export default model("Users",userModel)