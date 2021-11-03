// const bcrypt = require('bcrypt');
// const hash = require('../app/fn.hash');
const userService = require('../services/user.service');

class UserController {
    async register(req, res, next) {
        try{
            if (typeof req.body !=='object') {
                res.status(400);
                return;
            };
            const {email, password} = req.body;
            if(typeof email !== "string" || typeof password !== "string") {
                res.status(400);
                return res.json({message:"Incorrect request data"});
            }
            const response = await userService.register(email, password);
            res.json(response);
        } catch(error){
            console.error(error);
            throw error;
        }
    };
    async login(req, res, next) {
        try{
            if (typeof req.body !=='object') {
                res.status(400);
                return;
            };
    
            const {email, password} = req.body;
            // const hashedPassword = hash(password);

            // const comparePwd = await bcrypt.compare(password, hashedPassword, function(err, result) {
            //             if(err){
            //                 console.error(err);
            //                 return;
            //             }
            //             return result;
            //         });
            // if(!comparePwd) {
            //     res.status(400);
            //     return res.json({message:"Incorrect request data"});
            // }
            const response = await userService.login(email, password);
            res.json(response);
        } catch(error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = UserController;