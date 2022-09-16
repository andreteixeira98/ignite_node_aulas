import Categories from "../models/Categories";
import { ICategoryRepository } from "./ICategoryRepository";

export interface IcreateCategoryDTO{
    name:string;
    description:string;
}
export default class CategoryRepository implements ICategoryRepository{
    private categories:Categories[];

    constructor(){
       this.categories = [];
    }

    create({name, description}:IcreateCategoryDTO):void{
        const category = new Categories();

        Object.assign(category,{
            name, description
        })

        this.categories.push(category);
    }

    list():Categories[]{
        return this.categories;
    }

    findByname(name:string){
        return this.categories.find(category=> category.name === name);
    }
}