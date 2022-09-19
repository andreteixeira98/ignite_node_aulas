import { Specifications } from "../models/Specifications";
import { IcreateSpecificationsDTO, ISpecificationsRepository } from "./implementations/ISpecificationsRepository";



class SpecificationsRepository implements ISpecificationsRepository{
    private specifications:Specifications[];

    constructor(){
        this.specifications = [];
    }

    create({ name, description }: IcreateSpecificationsDTO): void {

        const specification = new Specifications();

        Object.assign(specification,{
            name,
            description,
            createdAt:new Date
        });

        this.specifications.push(specification);
    }
    findByName(name: string): Specifications {

        const specificationAlreadyExist = this.specifications.find(specification=> specification.name === name);

        return specificationAlreadyExist;
    }
    
}

export { SpecificationsRepository};

