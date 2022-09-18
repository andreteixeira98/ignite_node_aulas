import Categories from "../../models/Categories";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";


class ListCategoriesUseCase{

    private categoryRepository:ICategoryRepository;

    constructor(categoryRepository:ICategoryRepository){
        this.categoryRepository = categoryRepository;
    }

    execute():Categories[]{
        return this.categoryRepository.list();
    }
}

export { ListCategoriesUseCase };
