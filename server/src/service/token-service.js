import jwt from 'jsonwebtoken'
import tokenModel from '../models/token-model.js'

class TokenService{
    generateAccesToken(payload){
        const accessToken= jwt.sign(payload, process.env.SECRET_ACCESS_KEY, {expiresIn: "30m"})
        const refreshToken= jwt.sign(payload, process.env.SECRET_REFRESH_KEY, {expiresIn: "30d"})

        return{
            accessToken,
            refreshToken
        }

    }
    async saveToken(){
        const tokenData = await tokenModel.findOne({userid})
        if(tokenData){
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token =await tokenModel.create({user:userid,refreshToken})
        return token
    }


}
export default new TokenService