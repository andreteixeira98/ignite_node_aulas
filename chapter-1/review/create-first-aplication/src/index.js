const express = require('express');
const {v4:uuidv4} = require('uuid');

const app = express();
app.use(express.json());
let usersList =[

]
app.get('/users',(req, res)=>{
    return res.json(usersList);
})
app.get('/user/:id',(req,res)=>{
    const {id}= req.params;


    const userAlreadyExists = usersList.find(user => user.id === id);
    if(!userAlreadyExists){
        return res.status(404).json({message:"user not found!"});
    }

    return res.json(userAlreadyExists);
})

app.delete('/user/:id',(req,res)=>{
    const {id} = req.params;

    let newUserList = usersList.filter(user => user.id !== id);

    if(newUserList.length === usersList.length)
        return res.status(404).json({message:"user not found"})

    usersList = newUserList;
    return res.json({message:"user removed success",newUserList})
})

app.post('/user',(req,res)=>{
    const {name} = req.body;

    if(!name){
        return res.status(400).json({message:'username is null!'})
    }

    const alreadyExists = usersList.some(user => user.name === name);

    if(alreadyExists){
        return res.status(400).json({
            message:'username alreadyexists!'
        })
    }

    const newUser={
        id:uuidv4(),
        name:name
    }

    usersList.push(newUser);
    return res.status(200).json(newUser);
})
const port = 4000;
app.listen(port, ()=> console.log(`server started on port ${port}`));