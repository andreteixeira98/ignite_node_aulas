import { Request, Response } from "express";
import { createCourseService } from "./createCourseService";

const createCourseController = new createCourseService();
export function createCourse(req:Request, res:Response){
    const {educator, duration, course} = req.body;
    createCourseController.execute({
        educator,
        duration,
        course
    })

    return res.status(200).json({messeger:"ok"});
}