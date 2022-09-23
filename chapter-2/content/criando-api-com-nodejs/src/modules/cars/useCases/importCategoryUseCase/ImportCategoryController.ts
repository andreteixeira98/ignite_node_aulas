import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";


class ImportCategoryController{

    private importCategoryUseCase: ImportCategoryUseCase;

    constructor(importCategoryUseCase:ImportCategoryUseCase){
        this.importCategoryUseCase = importCategoryUseCase;
    }

    import(req:Request, res:Response){
        const {file} = req;
        this.importCategoryUseCase.execute(file);

        return res.send();

    }

}

export { ImportCategoryController}