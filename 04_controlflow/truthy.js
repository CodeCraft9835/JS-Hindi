//Truty  : Excluding fasly value al others are truty value

//Falsy value - false , 0 , -0 , BigInt(0n),"",null,undefined , NaN

//truthy suprsing value : "0" ,[](empty array), 'false' pr "false"," "{}(empty object), function(){}(empty function is also a  truthy value)

//How to check an array ?

const userEmail = []

if(userEmail.length === 0){
    console.log("Array is empty");
    
}


// How to check my object is empty or not?
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}


//Nullish Colescing Operatro (??) : null undefined

let val1
let val2
let val3
val1 = 5 ?? 10 // this operator is widely use in database value fetching
val2 = null ?? 10
val3 = undefined ?? 15
console.log(val1);//5
console.log(val2); //10
console.log(val3); //15
//?? , this operator is widely used in error handling


//Ternary Opearator  : Short form for if else

    //condition ? true : false


const iceTeaPrice = 70
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

