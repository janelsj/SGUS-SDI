// 1. Setup and Simple HTTP Request
const API = require("./instance");

API.get("/owner").then(res => {
    console.log('status', res.status);
    console.log('data', res.data);
});



// 2. Implement Create, Update and Delete Owner.
(async ()=>{

    // Create
    let res = await API.post('/owner', {name:"Stanley"});
    let owner = res.data;
    console.log('new owner', owner);


    // Update
    console.log("update owner");
    res = await API.put(`/owner/${owner.id}`, {name:"Stanley Ong"});
    
    
    // Get by ID
    res = await API.get(`/owner/${owner.id}`);
    owner = res.data;
    console.log("get updated owner", owner);

    // Delete Owner
    console.log("Delete owner id", owner.id);
    res = await API.delete(`/owner/${owner.id}`);

    // Get by ID 
    res = await API.get(`/owner/${owner.id}`);
    console.log("Get ID of delete owner", res.status, res.data);
    
})();



// 3. Demonstrate create task for an owner and delete it by fetching a jwt token.
(async ()=>{

    // Create
    let res = await API.post('/owner', {name:"Stanley"});
    let owner = res.data;
    console.log('new owner', owner);


    // Create task(s) belonging to the new owner
    const tasks = [
        {
            title:"Task 1",
            description:"Task 1 description"
        },
        {
            title:"Task 2",
            description:"Task 2 description"
        },
        {
            title:"Task 3",
            description:"Task 3 description"
        }
    ]

    await Promise.all(tasks.map(async t => {
        await API.post(`/owner/${owner.id}/task`, t);
    }));

    // Fetch created tasks
    res = await API.get(`/owner/${owner.id}/task`);
    const createdTasks = res.data;
    console.log('created tasks', createdTasks);

    // Acquire authorization token
    res = await API.post("/token/deletepermission", owner);
    const token = res.data.token;
    console.log('token', token);

    // Perform delete with auth header
    res = await API.delete(`/owner/${owner.id}/task/${createdTasks[0].id}`, {
        headers:{
            'Authorization' : `Bearer ${token}`
        }
    })
    console.log("delete status", res.status);

    // Fetch tasks belonging to this owner
    res = await API.get(`/owner/${owner.id}/task`);
    console.log("fetch tasks after delete", res.data);
    
})();