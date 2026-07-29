//Immediately Invoked Function Expressin (IIFE)

/*function chai(){
    console.log(`Databse Connected`);
    
}
    */
//chai() //output : Databse Connected

//IIFE is just wrapping function inside braces 

(function chai(){
    console.log(`Databse Connected`);
    
})() ; //Output :Databse Connected , Here you have to add ; always


(()=>{
    console.log(`DB CONNECTED TWICE`);
    
})(); //Output : DB CONNECTED TWICE

((name)=>{
    console.log(`DB CONNECTED TWICE ${name}`);
    
})("Apurva"); //output :DB CONNECTED TWICE Apurva


//Whenever we write 2 iife we will always add ; otherwise it shows  error , vvi for interview
