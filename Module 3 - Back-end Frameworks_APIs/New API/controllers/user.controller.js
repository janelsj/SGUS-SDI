const service = require("../services/user.service");

async function handleSignUpRequest(request, response){
    try{
        const result = await service.signup(request.body.email, request.body.password);
        return response.json(result);
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function handleGetAllUserRequest(request, response) {
    try{
        return response.json(await service.getAll());
    } catch (error){
        console.log(error);
        throw error;
    }
};

async function handleLoginRequest(request, response) {
    try{
        const resData = await service.login(request.body.email, request.body.password);
        response.json(resData);
    } catch (error){
        console.log(error);
        throw error;
    }
};

module.exports = {
    handleSignUpRequest,
    handleLoginRequest,
    handleGetAllUserRequest
}