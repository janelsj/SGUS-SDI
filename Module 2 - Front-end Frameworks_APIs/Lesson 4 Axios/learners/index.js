// 1. Setup and Simple HTTP Request
const axios = require("axios");

const API = axios.create({
    baseURL: "https://mod2-api.herokuapp.com/",
});

//Read Owner: 'GET' keyword (.then... .catch method)
// API.get("/owner").then((result) => {
//     console.log(result.status);
//     console.log(result.data);
// }).catch((error) => {
//     console.log(error);
// });

// 2. Implement Create, Update and Delete Owner.

/*
(async() => {
//Read Owner: 'GET' keyword (async...await method)
    const allOwners = await API.get("/owner");
    console.log(allOwners.status);
    console.log(allOwners.data);

// CREATE Owner: 'POST' keyword
    const newOwner = await API.post("/owner", {name: 'random person'});
    console.log(newOwner.status);
    console.log(newOwner.data);

//UPDATE Owner: 'PUT' keyword
    const updateOwner = await API.put(`/owner/${newOwner.data.id}`, {name: 'random'});
    console.log(updateOwner.status);
    console.log(updateOwner.data);

// DELETE Owner: 'DELETE' keyword
    await API.delete(`owner/${updateOwner.data.id}`);
    console.log (allOwners.status);
    console.log(allOwners.data);
})();
*/

// 3. Demonstrate create task for an owner and delete it by fetching a jwt token.

(async() => {
    const owner = await API.post('/owner', {name: 'abcxyz'}).then((result)=>{
         console.log(result.data);
         return result.data;
    }).catch((e)=>console.log(e));

    const tasks = [
        {
            title: 'Title1',
            description: 'Task 1 description'
        },
        {
            title: 'Title2',
            description: 'Task 2 description'
        },
        {
            title: 'Title3',
            description: 'Task 3 description'
        }
    ]

    await Promise.all(tasks.map(async(taskItem) => {
        await API.post(`/owner/${owner.id}/task`, taskItem);
    }))

    let taskResults = await API.get(`/owner/${owner.id}/task`).then((result)=>{
        console.log('created tasks', result.data);
        return result.data;
    }).catch(e => console.log('initial task results', e));

    const token = await API.post("/token/deletepermission", owner
    // {
    //     id: 4,
    //     name: 'abcxyz'
    // }
    ).then((result)=>{
        console.log('token', result.data.token);
        return result.data.token;
    }).catch(e => console.log('token', e));

    await API.delete(`/owner/${owner.id}/task/${taskResults[0].id}`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    taskResults = await API.get(`/owner/${owner.id}/task`).then((result)=>{
        console.log('task results', result.data)
    }).catch(e => console.log('final task results', e));

})();