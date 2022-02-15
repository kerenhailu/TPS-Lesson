export const hasTheSameNum=(arrayNum:number[]):boolean=>{
    for (let i = 0; i < arrayNum.length; i++) {
        for (let j = i+1; j < arrayNum.length-i; j++) {
            if(arrayNum[i]==arrayNum[j]){
                return true;
            }  
        }
    }
return false
}