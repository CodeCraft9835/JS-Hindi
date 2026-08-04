const coding = ["js" , "ruby" , "java" ,"python" ,"cpp"]

//Higher order functions :

/* 
A higher-order function is a function that does one of the following:

Takes another function as an argument.
Returns another function as its result.
*/


coding.forEach(  function(item){ //This function inside forEach is called as call back functions
    //console.log(item);
})

coding.forEach( (item) => {
    //console.log(item);
    
})


//Passing function as refernce inside forEach method
function printMe(item){
    console.log(item);
    
}
 coding.forEach(printMe)


 //We can pass three parameters inside forEaach arrow function one will give item , index and complete array

 coding.forEach( (item , index ,arr) =>{
    //console.log(item , index , arr);
    
 })



 //how to access the value of array object using forEach() ?
 const myCoding = [
   {
    "langugeName" : "javascript",
    "languageFileName": "js",
   },
]

myCoding.forEach((item)=>{
    console.log(item.langugeName);
    
})