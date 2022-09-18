import { Specifications } from "../../models/Specifications";


interface IcreateSpecificationsDTO{
    name:string;
    description:string;
}

interface ISpecificationsRepository{

    create({name, description}:IcreateSpecificationsDTO):void;
    findByName(name:string):Specifications;

}

export { ISpecificationsRepository, IcreateSpecificationsDTO}