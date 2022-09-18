import CategoryRepository from "../../repositories/CategoryRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoryController } from "./ListCategoryController";


const categoryRepository = CategoryRepository.getInstance();

const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);


export {listCategoryController}