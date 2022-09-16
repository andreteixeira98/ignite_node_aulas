import { Request, Response, Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationsService } from "../modules/cars/services/createSpecificationsService";




const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();
const createSpecificationsService = new CreateSpecificationsService(specificationsRepository);


specificationsRoutes.post('/',(req:Request,res:Response)=>{
    const {name, description} = req.body;

    createSpecificationsService.execute({name, description});

    return res.status(201).send();

})

export { specificationsRoutes};