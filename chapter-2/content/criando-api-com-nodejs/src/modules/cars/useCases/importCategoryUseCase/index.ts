import CategoryRepository from "../../repositories/implementations/CategoryRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)

const importCategoryController = new ImportCategoryController(importCategoryUseCase);


export {importCategoryController}