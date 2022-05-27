const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(request, response)=>{
    return response.json({message:'hello world'})
});


//route params
app.get('/search/users',(req, res)=>{
    const user1 = {
        name:'andre'

    }
    const user2 = {
        name:'vk'

    }
    return res.json({user1, user2});
})


app.get('/search/user/:name',(req, res)=>{
    const name = req.query;
    console.log(name);
    
    const user1 = {
        name:'andre'

    }
    const user2 = {
        name:'vk'

    }
    let userSearch = 'not found';
    if(name==user1.name){
        userSearch = user1;
    }else if(name==user2.name){
        userSearch=user2.name;
    }
    return res.json({userSearch});
})


app.post("/register/use", (req, res)=>{
    return res.json({name:"andre"})
})
app.put('/update/use/:id',(req,res)=>{
    return res.json({name:'lucas'});
})

app.delete("/delete/use/:id",(req,res)=>{
    return res.json({message:'ok'})
})

app.listen(3001, ()=> console.log('start server on port 3001'));