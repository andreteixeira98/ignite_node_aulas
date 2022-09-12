
interface ICreateCourse{
    educator:string;
    course:string;
    duration?:number;
}
export class createCourseService{

    execute({educator, course, duration=9}:ICreateCourse){
        console.log(`educator:${educator},course:${course},duration:${duration}`)
    }
}