import { model, Schema } from "mongoose"

const tokenModel = new Schema({
    user:{type:Schema.Types.ObjectId,ref:"User"},
    refreshToken:{type:String,require:true},
    isActivated:{type:Boolean, default:false},
    activationlink:{type:String},


})

export default model("User",tokenModel)