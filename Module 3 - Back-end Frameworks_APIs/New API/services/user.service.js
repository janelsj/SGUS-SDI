const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {secret} = require("../constants");
const {User} = require("../models");

const saltRounds = 10;

async function signup(email, password){
    try{
        const response = {
            status: null,
            message: null,
            data: null
        }
        const user = await User.findOne({where: {email: email}});
        if (user) {
            response.status = 400;
            response.message = `User account ${email} already exists.`;
            return response;
        }
        if (!user){
            bcrypt.hash(password, saltRounds, async function(error, hash){
                if(error){
                    console.error(error);
                    throw error;
                }
                await User.create({
                    email: email,
                    password: hash
                });
            });
            
            response.status= 200;
            response.message = `User account ${email} successfully registered.`;
            
            return response;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function login(email, password){
    try {
        const response = {
            status: null,
            message: null,
            data: null
        }
        const user = await User.findOne({where: {email: email}});
    
        //Check if user is found
        if(!user){
            response.status = 404;
            response.message = "User account not found";
            return response;
        }
        //Check if password match
        const match = await bcrypt.compare(password, user.password);
        if(!match) {
            response.status = 404;
            response.message = "Invalid login details";
            return response;
        };
        const plainUserObject = {
            id: user.id, 
            email: user.email
        };    
        const token = jwt.sign(plainUserObject, secret);
        return {
            token,
            message: "Login successful."
        }
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function getById(id){
    try{
        return await User.findByPk(id);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function getAll(){
    try{
        return await User.findAll();
    } catch(error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    signup,
    login,
    getById,
    getAll,
};
