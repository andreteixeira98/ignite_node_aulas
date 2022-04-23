const express = require('express');

const app = express();

app.get('/',(request, response)=>{
    return response.json({message:'hello world'})
});

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