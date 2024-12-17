import userSchema from "../models/user.model.js"
import bcrypt from "bcrypt"
export async function addUser(req,res){
    const {username,email,password,cpassword}=req.body
    console.log(username,email,password,cpassword);
    if(!(username&&email&&password&&cpassword))
        return res.status(404).send({msg:"fields are empty"})
    if(password!=cpassword)
        return res.status(404).send({msg:"password not match"})

    const data=await userSchema.findOne({email})
    
    if(data)
        return res.status(404).send({msg:"email already exist"})
    
    const hPassword=await bcrypt.hash(password,10)
    console.log(hPassword);

    await userSchema.create({username,email,password:hPassword}).then(()=>{
        res.status(200).send({msg:"successfully created"})
    }).catch((err)=>{
        res.status(500).send({msg:err})
    })
    
    
    


}   