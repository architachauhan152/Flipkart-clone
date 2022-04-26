const express=require("express");

const Register=require("../models/register.model");

const router=express.Router();

router.post("",async (req,res)=>{
try {
    const register=await Register.create(req.body);
    return res.status(200).send(register);
} catch (error) {
    return res.status(501).send({message:error.message})
}
})

router.get("",async (req,res)=>{
    try {
           let register = await Register.findOne({mbl : req.query.mbl})
        return res.status(200).send(register);
    } catch (error) {
        return res.status(501).send({message:error.message})
    }
    })


module.exports= router;