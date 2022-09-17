import CategoryRepository from "../repositories/CategoryRepository";
import {CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCases } from "./createCategoryUseCases";



const categoryRepository = new CategoryRepository();

const createCategoryUseCases = new CreateCategoryUseCases(categoryRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCases);

export { createCategoryController};