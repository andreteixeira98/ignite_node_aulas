import { Request, Response, NextFunction } from "express";
import CategoryRepository from "../repositories/CategoryRepository";



export default class CategoryMiddlleware{
        private categoryRepository:CategoryRepository;


         constructor(categoryRepository:CategoryRepository){
            this.categoryRepository = categoryRepository;
        }

       verifyCategory(req:Request,res:Response, next:NextFunction){

        const {name} = req.body;
        const categoryAllReadyExists = this.categoryRepository.findByname(name);
        if(categoryAllReadyExists){
            return res.status(400).json({error:'category Already Exists!'})
        }

        return next();
    }

   

   


}