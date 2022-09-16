import { Request, Response, Router } from 'express';
import CategoryRepository from '../modules/cars/repositories/CategoryRepository';
import { CreateCategoryService } from '../modules/cars/services/createCategoryService';

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

// const categoryMiddlleware = new CategoryMiddlleware(categoryRepository);

const createCategoryService = new CreateCategoryService(categoryRepository);

// categoriesRoutes.use(categoryMiddlleware.verifyCategory);



categoriesRoutes.post('/',(req:Request, res:Response)=>{
    const {name, description} = req.body;

    createCategoryService.execute({name, description});

    return res.status(201).send();
})

categoriesRoutes.get('/',(req:Request, res:Response)=>{
    return res.json(categoryRepository.list());
})

export { categoriesRoutes };
