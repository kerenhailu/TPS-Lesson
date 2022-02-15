import React, { useState } from "react";
import { hasTheSameNum } from "./Functions";
const Loto=()=>{
    const [numbers,setNumbers]=useState([]as number[])
    let inputs:React.ReactNode[]=[];
    const handelaCahange=(event:React.ChangeEvent<HTMLInputElement>,i:number)=>{
        numbers[i]=Number(event.target.value);
            setNumbers(numbers);
    }
    for (let i = 0; i <10 ; i++) {
        inputs.push(<div><input type="number" value={numbers[i]} onChange={(event)=>handelaCahange(event,i)}/> <br/></div>)
    }
    return(<div>
        <label>user name :</label>
        <input type="text" /><br/>
        {
            inputs
        }
        <button onClick={()=>alert(hasTheSameNum(numbers))}>click</button>
    </div>)
}
export default Loto;