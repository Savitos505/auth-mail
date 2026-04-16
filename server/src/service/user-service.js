import userModel from "../models/user-model.js"
import bcrypt from "bcrypt"
import * as uuid from "uuid"
import MailService from "./mail-service.js"
import tokenService from "./token-service.js"
import UserDto from "../dtos/user-dto.js"

class UserService{
    async registration(email,password){
        const condidat = await userModel.findOne({email})
        const mailService = new  MailService()
        if(condidat){
            throw new Error(`Такой пользователь уже сущ ${condidat.password}` )
        }

        const hashPAssword = bcrypt.hashSync(password, 3)
        const activationLink = uuid.v4()
        const user = await userModel.create({email, password:hashPAssword,activationLink})

        await mailService.sendActivationMail(email, `${process.env.API_URL}/auth/activate/${activationLink}`)
        const userDto = new UserDto(user)

        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(user.id,tokens.refreshToken)
        return{...tokens,user:userDto}

    }
    async activate(activationLink){
        const user = await userModel.findOne({activationLink})
        if(!user){
            throw new Error("Некорректная сслыка");
            
        }
        user.isActivated=true;
        await user.save()

    }
    async login(email,password){
        
    }



}

export default new UserService()