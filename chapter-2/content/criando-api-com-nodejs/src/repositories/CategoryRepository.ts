import Category from "../models/Category";

interface IcreateCategoryDTO{
    name:string;
    description:string;
}
export default class CategoryRepository{
    private categories:Category[];

    constructor(){
        this.categories = [];
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