import {Category} from "../../models/Category";
import { ICategoryRepository } from "../ICategoryRepository";

export interface IcreateCategoryDTO{
    name:string;
    description:string;
}
export default class CategoryRepository implements ICategoryRepository{
    

    private categories:Category[];

    private static INSTACE:CategoryRepository;

    private constructor(){
      this.categories = [];
    }

    static getInstance():CategoryRepository{

        if(!CategoryRepository.INSTACE){
            CategoryRepository.INSTACE = new CategoryRepository();
        }
        return CategoryRepository.INSTACE;
    }

    create({name, description}:IcreateCategoryDTO):void{
        const category = new Category();

        Object.assign(category,{
            name, description
        })

        this.categories.push(category);
    }

    list():Category[]{
        return this.categories;
    }

    findByname(name:string){
        return this.categories.find(category=> category.name === name);
    }
}