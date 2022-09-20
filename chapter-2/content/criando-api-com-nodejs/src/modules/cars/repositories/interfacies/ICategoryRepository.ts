import {Category} from "../../models/Category";
import { IcreateCategoryDTO } from "../CategoryRepository";



export interface ICategoryRepository{

    create({name, description}:IcreateCategoryDTO):void;

    list():Category[];

    findByname(name:string):Category;

}