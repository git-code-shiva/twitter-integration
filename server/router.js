const express= require('express');
const userSchema = require('./userSchema');

const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
router.use(express.json());

const saltRound = 10;
const secret = process.env.SECRET;

router.post("/register", async(req,res)=>{
     const user = await userSchema.findOne({Email: req.body.Email});
     if(user){
        return res.status(500).send("Email already exist")
     };

     bcrypt.hash(req.body.Password, saltRound, async function(err, hash){
        try{
            if(err){
                return res.status(400).send("Error:",err.message);
            }

            await userSchema.create({
                Email: req.body.Email,
                Password: hash,
            });
            return res.status(200).send("Registration Sucess");
        }catch(err){
            return res.status(500).send(err.message);
        }
     });
})

router.post("/login", async(req,res)=>{
    try{
        const {Email,Password} = req.body;
        const userExist = await userSchema.findOne({Email});

        if(!userExist){
            return res.status(400).json({
                status:"failed",
                message:"user is not found please register first!"
            })
        }

        bcrypt.compare(req.body.Password,userExist.Password, function(err,result){
            if(err){
                return res.status(500).json({
                    status:"failed",
                    message:err.message
                })
            }
            if(result){
                const token = jwt.sign({
                    exp: Math.floor(Date.now()/1000) + (60*60),
                    data: userExist._id
                }, process.env.SECRET)

                res.status(201).json({
                    message:"login sucessfully",
                    token:token,
                    userData: userExist
                })
            }
            else{
                return res.status(400).json({
                    status:"failed",
                    message:"invalid password"
                })
            }
        })
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
})

module.exports = router;