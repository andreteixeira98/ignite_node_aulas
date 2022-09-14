import { NextFunction, Request, Response, Router } from 'express';
import CategoryRepository from '../repositories/CategoryRepository';

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();
// const categoryMiddlleware = new CategoryMiddlleware(categoryRepository);

categoriesRoutes.use(verifyCategory);


 function verifyCategory(req:Request,res:Response, next:NextFunction){

        const {name} = req.body;
        const categoryAllReadyExists = categoryRepository.findByname(name);
        if(categoryAllReadyExists){
            return res.status(400).json({error:'category Already Exists!'})
        }

        return next();
    }


categoriesRoutes.post('/',verifyCategory,(req:Request, res:Response)=>{
    const {name, description} = req.body;

    categoryRepository.create({name,description});

    return res.status(201).send();
})

categoriesRoutes.get('/',(req:Request, res:Response)=>{
    return res.json(categoryRepository.list());
})

export { categoriesRoutes };
