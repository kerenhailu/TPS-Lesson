import { IStudents } from "../../Models/IStudent.interface";

let restArrayStudents:IStudents[]=[{Fname:"keren" ,Lname:"hailu",Age:23},{Fname:"tikva" ,Lname:"yosef",Age:26}];

const StudentReducer=(state:any,action:any)=>{
    switch (action.type) {
        case "show":
            return restArrayStudents;
        default:
            break;
    }
}
export default StudentReducer;