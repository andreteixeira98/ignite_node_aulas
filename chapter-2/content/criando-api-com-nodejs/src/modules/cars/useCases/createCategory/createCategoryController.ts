import { Request, Response } from "express";
import { CreateCategoryUseCases } from "./createCategoryUseCases";

class CreateCategoryController{
    // private createCategoryUseCases: CreateCategoryUseCases;

    constructor(private createCategoryUseCases:CreateCategoryUseCases){
       
    }

    create(req:Request, res:Response){
        const {name, description} = req.body;

        this.createCategoryUseCases.execute({name, description});

        return res.status(201).send();
    }   
}

export{ CreateCategoryController}