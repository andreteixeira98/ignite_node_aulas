import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController{
    constructor (private listCategoryUseCase:ListCategoryUseCase){}

    list(req:Request,res:Response){
        return res.status(200).json(this.listCategoryUseCase.execute());
    }
}

export {
    ListCategoryController
};
