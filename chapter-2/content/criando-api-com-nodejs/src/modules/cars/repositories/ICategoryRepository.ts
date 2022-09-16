import Categories from "../models/Categories";
import { IcreateCategoryDTO } from "./CategoryRepository";



export interface ICategoryRepository{

    create({name, description}:IcreateCategoryDTO):void;

    list():Categories[];

    findByname(name:string):Categories;

}