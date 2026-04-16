import userService from "../service/user-service.js";

class UserController{
    async registration(req,res,next){
        try{
            const {email,password} = req.body
            const userData = await userService.registration(email,password)
            res.cookie("refreshtoken", userData.refreshToken,{maxAge:30*24*60*60*1000})
            return


        }catch(e){
            throw new Error(e.message);
            

        }
    }
    async login(req,res,next){
        try{


        }catch(e){
            throw new Error(e.message);
            

        }
    }
    async logout(req,res,next){
        try{


        }catch(e){
            throw new Error(e.message);
            

        }
    }
    async activate(req,res,next){
        try{
            const activationLink= req.params.link 
            await userService.activate(activationLink)
            return res.redict(process.env.API_CLIENT)


        }catch(e){
            throw new Error(e.message);
            

        }
    }
    async refresh(req,res,next){
        try{


        }catch(e){
            throw new Error(e.message);
            

        }
    }
    async getAll(req,res,next){
        try{


        }catch(e){
            throw new Error(e.message);
            

        }
    }
}

export default new UserController()