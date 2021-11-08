const bcrypt = require('bcrypt');
const hash = require('../app/fn.hash.js');
const jwt = require('jsonwebtoken');
const { User } = require("../models/");

module.exports = {
    register: async (email, password) => {
        try {
            const response = {
                message: null,
                status: null,
                data: null,
            };
    
            //Fetch the user:
            const user = await User.findOne({where: {email: email}});
            
            //Region validation            
            if (user.find(user => user.email === email)) {
                response.status = 400;
                response.message = `User account already exists for ${email}`;
                return response;
            }
            
            if (!user.find(user => user.email === email)) {
                // Add user to database:
                await User.create({
                    email: email,
                    password: await hash(password),
                  });
                //Prepare and send response:
                const userNewList = await User.findAll();
                response.message = "User registration successful.";
                response.status = 200;
                response.data = userNewList;
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    },

    login: async (email, password) => {
        try {
            const response = {
                message: null,
                status: null,
                data: null,
            };
    
            //Fetch the user:
            const user = await User.findAll();
            
            //Region validation
            if (!user.find(user => user.email === email)) {
                response.status = 404;
                response.message = `User account does not exist. Please register for an account.`;
                return response;
            };

            if (user.find(user => user.email === email)) {
                const selectedUser = user.find(user => user.email === email);
                const hashedValue = selectedUser.password;
                console.log(selectedUser.password);

                bcrypt.compare(password, hashedValue, function (err, result) {
                    if (err) {
                        console.error(err);
                        throw error;
                    }

                    // const token = jwt.sign(selectedUser, 'some_key', {algorithm:"RS256", expiresIn:"1d"});
                    // console.log(token);

                    if (!result) {
                        response.status = 404;
                        response.message = "Invalid login details.";
                        console.log(response);
                        return response;
                    }
                    if (result) {
                        // jwt.verify(token, 'some_key', {algorithms:["RS256"]}, function(err, decoded){
                        //     if(err){
                        //         console.error(err);
                        //         return;
                        //     }
                        //     console.log(decoded);
                        // });
                        //Prepare and send response:
                        response.message = "Login successful.";
                        response.status = 200;
                        response.data = selectedUser;
                        console.log(response);
                        return response;
                    }
                    console.log(result);
                });
            }
        } catch (error) {
            console.log(error);
        }
    },
};