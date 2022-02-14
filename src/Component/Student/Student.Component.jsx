import { useReducer, useState } from "react";
import StudentAction from "../Actions/Student-Action";
import StudentReducer from "../Reducers/Student-Reducer";

const Student = () => {
  const [student, disptch] = useReducer(StudentReducer,[]);
  console.log(student);
 
  return <div>
      <h1>state : {student.map((item)=>
         <div>
           Fname :  {item.Fname}
           Lname :  {item.Lname}
           Age : {item.Age}
         </div> 
      )}</h1>
      <button onClick={()=>disptch(StudentAction())}>click</button>
  </div>;
};
export default Student;
