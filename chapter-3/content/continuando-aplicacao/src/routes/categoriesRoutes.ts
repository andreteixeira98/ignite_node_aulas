import { Request, Response, Router } from 'express';

import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategoryUseCase';
import { listCategoryController } from '../modules/cars/useCases/listCategory';



const upload = multer({
    dest:'./temp'
})
const categoriesRoutes = Router();

categoriesRoutes.post('/',(req,res)=>{
    return createCategoryController.create(req,res);
});

categoriesRoutes.get('/',(req, res)=>{
    return listCategoryController.list(req,res);
})


categoriesRoutes.post('/import', upload.single('filename'),(req:Request, res:Response)=>{
    return importCategoryController.import(req,res);
})

export { categoriesRoutes };
