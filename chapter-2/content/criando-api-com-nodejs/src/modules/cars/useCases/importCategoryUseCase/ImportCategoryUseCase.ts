import fs from 'fs';
import {parse} from 'csv-parse';
import CategoryRepository from '../../repositories/CategoryRepository';


interface IimportCategory{
    name:string;
    description:string;
}
class ImportCategoryUseCase{



    constructor(private categoryRepository:CategoryRepository){

    }

    loadCategories(file:Express.Multer.File):Promise<IimportCategory[]>{
       
       return new Promise((resolve,reject)=>{
         const stream = fs.createReadStream(file.path);
        const categories:IimportCategory[] = [];

        const parseFile = parse({
            delimiter:','
        });


        stream.pipe(parseFile);

        parseFile.on('data', async (line)=>{
            const [name, description] = line;

            categories.push({
                name,
                description
            })
        })
        .on('end',()=>{
            resolve(categories);
        })
        .on('error',(err)=>{
            reject(err);
        })
       })
      
    }
    async execute(file:Express.Multer.File):Promise<void>{
        const categories = await this.loadCategories(file);
        
        categories.map(async(category)=>{
            const{ name, description} = category;

            const existCategory = this.categoryRepository.findByname(name);

            if(!existCategory){
                this.categoryRepository.create({
                    name,
                    description
                })
            }
        })

    
    }
}


export {ImportCategoryUseCase}