import {Request, Response}  from "express";
import { CreateCourse } from "./createCouseService";



const createCourseController = new CreateCourse();
export function createCourse(req:Request, res:Response){
    createCourseController.execute({course:"NodeJS",educator:"andre"});

    return res.json({msg:"ok"});
}


