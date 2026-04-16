import userModel from "../models/user-model.js"
import bcrypt from "bcrypt"
import uuid from "uuid"

class UserService{
    async registration(email,password){
        const condidat = await userModel.findOne({email})
        if(condidat){
            throw new Error(`Такой пользователь уже сущ ${condidat.password}` )
        }

        const hashPAssword = bcrypt.hashSync(password, 3)
        const activationLink = uuid.v4()
        const user = await userModel.create({email, password:hashPAssword,activationLink})




    }



}

export default new UserService()