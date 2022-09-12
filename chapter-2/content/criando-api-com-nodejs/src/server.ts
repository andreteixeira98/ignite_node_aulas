import express from 'express'; 
import { createCourse } from './routes';


const app = express();
app.use(express.json());  
app.get("/course", createCourse);
app.post("/login",(req,res)=>{
    const {username, password} = req.body;
    console.log(username + " d  ");
    return res.status(200).json({msg:"ok"});

}) 

app.listen(3333,()=>{
    console.log("server is running on port 3333!");
});


