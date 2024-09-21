const User = require('../models/authModel')
const Token = require('../models/tokenModel')
const crypto = require('crypto')
const sendEmail = require('../utils/setEmail')
// to register a new user

exports.postUser = async(req, res)=>{
    let user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    User.findOne({email:user.email}).then(async data =>{
        if(data == null){
            user = await user.save()
            if(!user){
                return res.status(400).json({error:'Somthing went wrong'})
            }
            // working for token
            let token = new Token({
                token:crypto.randomBytes(16).toString('hex'),
                userId:user._id
            })
            token = await token.save()
            if(!token){
                return res.status(400).json({error:'failed to create a token'})
            }

            //send email process 
            sendEmail({
                from:'no-reply@online-store.com',
                to:user.email,
                subject:'Email verification Link',
                text:`Hello, \n\n Please verify your email by using the below link\n\n
                http:\/\/${req.headers.host}\/api\/confirmation\/${token.token}
                `,
                html:`
                <h1> Verify your Email </h1>
                `
            })
            res.send(user)
        }else{
            return res.status(400).json({error:'email must be unique'})

        }
    })
}

// confirming the email

exports.postEmailConfirmation = (req, res)=>{
    //at first find the vaild or matching 
    Token.findOne({token:req.params.token})
    .then(token =>{
        if(!token){
            return res.status(400).json({error: 'invalid token or token may have expired'})

        }
        // if we find the valid token then find the valid user for that 
        User.findOne({_id:token.userId})
        .then(user =>{
            if(!user){
                return res.status(400).json({error:'we are unable to find the valid user for this token'})
            }
            // check if email is already varified or not
            if(user.isVerified){
                return res.status(400).json({error: 'email is already verified'})
            }

            //save the verified user
            user.isVerified = true
            user.save()
            .then(user =>{
                if(!user){
                    return res.status(400).json({error: 'failed to verify email, try again'})
                }
                res.json({msg:'congrats, your email has been verified, login to continue'})
            })
            .catch(err=>{
                return res.status(400).json({error: err})
            })
        })
        .catch(err=>{
            return res.status(400).json({error: err})
        })
    })
    .catch(err=>{
        return res.status(400).json({error: err})
    })
}