import express from 'express';
import { createCourse } from './routes';


const app = express();
app.use(express.json());
app.get("/course", createCourse);   

app.listen(3333,()=>{
    console.log("server is running on port 3333!");
})


