import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases';

const categoriesRoutes = Router();


// const categoryMiddlleware = new CategoryMiddlleware(categoryRepository);


// categoriesRoutes.use(categoryMiddlleware.verifyCategory);



categoriesRoutes.post('/',(req,res)=>{
    return createCategoryController.create(req,res);
});

// categoriesRoutes.get('/',(req:Request, res:Response)=>{
//     return res.json(categoryRepository.list());
// })

export { categoriesRoutes };
