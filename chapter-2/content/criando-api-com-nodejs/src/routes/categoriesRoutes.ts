import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';

const categoriesRoutes = Router();

categoriesRoutes.post('/',(req,res)=>{
    return createCategoryController.create(req,res);
});

categoriesRoutes.get('/',(req, res)=>{
    return listCategoryController.list(req,res);
})

export { categoriesRoutes };
