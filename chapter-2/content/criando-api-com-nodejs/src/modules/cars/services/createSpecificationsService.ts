import { IcreateSpecificationsDTO, ISpecificationsRepository } from "../repositories/implementations/ISpecificationsRepository";


interface IRequest{
    name:string;
    description:string;
}
class CreateSpecificationsService{

    constructor(private specificationsRepository:ISpecificationsRepository){

    }

    execute({name, description}:IRequest){
        const specificationAlreadyExist = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExist){
            throw new Error("specification Already Exists!");

        }
        this.specificationsRepository.create({name, description});


    }
}

export { CreateSpecificationsService };
