import Category from "../models/Category";

interface IcreateCategoryDTO{
    name:string;
    description:string;
}
export default class CategoryRepository{
    private static categories:Category[];

    constructor(){
       CategoryRepository.categories = [];
    }

    create({name, description}:IcreateCategoryDTO):void{
        const category = new Category();

        Object.assign(category,{
            name, description
        })

        CategoryRepository.categories.push(category);
    }

    list():Category[]{
        return CategoryRepository.categories;
    }

    findByname(name:string){
        return CategoryRepository.categories.find(category=> category.name === name);
    }
}