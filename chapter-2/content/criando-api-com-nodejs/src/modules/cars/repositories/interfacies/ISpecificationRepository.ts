import { Specification } from "../../models/Specification";


interface IcreateSpecificationDTO{
    name:string;
    description:string;
}

interface ISpecificationRepository{

    create({name, description}:IcreateSpecificationDTO):void;
    findByName(name:string):Specification;

}

export { ISpecificationRepository, IcreateSpecificationDTO}