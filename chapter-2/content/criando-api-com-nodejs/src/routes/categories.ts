import { Request, Response, Router } from 'express';
import CategoryMiddlleware from '../middlewares/CategoryMiddleware';
import CategoryRepository from '../repositories/CategoryRepository';

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();
const categoryMiddlleware = new CategoryMiddlleware();

categoriesRoutes.use(categoryMiddlleware.verifyCategory);



categoriesRoutes.post('/',categoryMiddlleware.verifyCategory,(req:Request, res:Response)=>{
    const {name, description} = req.body;

    categoryRepository.create({name,description});

    return res.status(201).send();
})

categoriesRoutes.get('/',(req:Request, res:Response)=>{
    return res.json(categoryRepository.list());
})

export { categoriesRoutes };
