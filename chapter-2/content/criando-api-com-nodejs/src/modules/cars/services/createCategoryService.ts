import { ICategoryRepository } from "../repositories/ICategoryRepository";



interface IRequest{
    name:string;
    description:string;
}

export class CreateCategoryService{


    constructor(private categoriesRepository:ICategoryRepository){

    }
    execute({name, description}:IRequest){
        const categoryAllReadyExists = this.categoriesRepository.findByname(name);
        if(categoryAllReadyExists){
            throw new Error('Category Already Exists!');
        }

        this.categoriesRepository.create({name,description});
    }
}