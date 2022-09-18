import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoryController{
    constructor (private listCategoryUseCase:ListCategoriesUseCase){}

    list(req:Request,res:Response){
        return res.status(200).json(this.listCategoryUseCase.execute());
    }
}

export {
    ListCategoryController
};
