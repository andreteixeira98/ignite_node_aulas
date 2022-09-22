import CategoryRepository from "../../repositories/implementations/CategoryRepository";
import {CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCases } from "./createCategoryUseCases";



const categoryRepository = CategoryRepository.getInstance();

const createCategoryUseCases = new CreateCategoryUseCases(categoryRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCases);

export { createCategoryController};