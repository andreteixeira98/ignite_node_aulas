import {v4 as uuidV4} from 'uuid';

export class Category{
    
    id?:string;
    name:string;
    description:string;
    createdAt:Date;


    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}