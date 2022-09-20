import { Specification } from "../models/Specification";
import { IcreateSpecificationDTO, ISpecificationRepository } from "./interfacies/ISpecificationRepository";



class SpecificationRepository implements ISpecificationRepository{
    private specifications:Specification[];

    constructor(){
        this.specifications = [];
    }

    create({ name, description }: IcreateSpecificationDTO): void {

        const specification = new Specification();

        Object.assign(specification,{
            name,
            description,
            createdAt:new Date
        });

        this.specifications.push(specification);
    }
    findByName(name: string): Specification {

        const specificationAlreadyExist = this.specifications.find(specification=> specification.name === name);

        return specificationAlreadyExist;
    }
    
}

export { SpecificationRepository};

