import CategoryRepository from "../../repositories/CategoryRepository";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { ListCategoryController } from "./ListCategoryController";


const categoryRepository = CategoryRepository.getInstance();

const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);


export {listCategoryController}