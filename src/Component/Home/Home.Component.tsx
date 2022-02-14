const Home=()=>{
    let Age:number=23;
    let FirstName:string="keren";
    let isInClasss:boolean=true;
    let Greads:number[]=[99,87,95];
    const Welcome=():void=>{
      alert("welcome");
    }
    const SortThen4=(name:string,age:number):string=>{
        if(age>15){
        return name;
        }
        return "Wrong grade";
    }
    const WithDefualt=(name:string,Lname:string,age:number=0):string=>{
        return `${name}, ${Lname} , ${age}`;
    }
    const Teacher=(...restTecherAndSudents:string[]):void=>{
       console.log(restTecherAndSudents);
    }
    const aaa=(name:string,Lname?:string,graed:number=60,...restFriends:string[]):void=>{
    if(Lname){
    console.log(name,Lname,graed,restFriends);
}
    alert("lname is defualt");
    }
    const BigNum=(...restArrayNums:number[]):number=>{
     restArrayNums.sort((a,b)=>{return b-a});
    return restArrayNums[0];
    }
    const StringAndBigNum=(name:string,...restNumbers:number[]):string=>{
        restNumbers.sort((a,b)=>{return b-a})
        return `${name},${restNumbers[0]}`
    }
    const SameName=(name :string,...restNames:string[]):string=>{
        for (let i = 0; i < restNames.length; i++) {
           if(restNames[i]==name){
               return "true"
        } 
    }
    return "false";
    }
    const CalssAndNames=(classA?:number,...restOfNames:string[]):string[]=>{
        if(classA){
            return  restOfNames.sort();
        }
       return  restOfNames.sort().reverse();
    }
    return(
    <div>
        {/* {aaa("keren",undefined,undefined,"kkk","dd","ddd")} */}
        class :{CalssAndNames(undefined,"ker","ede","shi","gef")}
        {Teacher("tikva","eden")}
        {SortThen4("keren",23)}<br/>
        {WithDefualt("keren","hailu")}<br/>
        <h4>BigNum :{BigNum(22,86,9,44,1,3,7)}</h4>
        <h4>SameName : {SameName("aa","dc","fr","aa","ee")}</h4>
        <h4>StringAndBigNum : {StringAndBigNum("keren",9,3,12,6,23,7,18)}</h4>
        <button onClick={Welcome}>click</button>
    </div>)
}
export default Home;