
interface IcreateCourse{
    educator:string;
    duration?:number;
    course:string;
}
export class CreateCourse{
    execute({educator,duration=10,course}:IcreateCourse){
        console.log(`educator:${educator}, duration:${duration}, course:${course}`);
    }
}
