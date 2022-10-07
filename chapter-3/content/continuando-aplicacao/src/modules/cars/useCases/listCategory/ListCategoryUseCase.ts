import{ Category} from "../../models/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";


class ListCategoryUseCase{

    private categoryRepository:ICategoryRepository;

    constructor(categoryRepository:ICategoryRepository){
        this.categoryRepository = categoryRepository;
    }

    execute():Category[]{
        return this.categoryRepository.list();
    }
}

export { ListCategoryUseCase };
