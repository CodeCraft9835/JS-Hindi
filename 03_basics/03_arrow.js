// this keyword is used  for showing current context inside the scope

const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website `);
        console.log(this);
        
    },
}

//user.welcomeMessage() // Output : hitesh ,welcome to website 
//user.username = "Apurva"
//user.welcomeMessage() //Output :Apurva ,welcome to website
 console.log(this) //Output : {}, means empty but in  browser we get output as window when we inspect it , we get window in browser as output when we log this in it because window is a glbal object in browser 
// but here in node we  have global object as empty object tahst why we get it as empty object 


 /*function chai(){
    let username = "apurva"
    console.log(this.username); //Output : undefined , so we can see this keyword is onlu give output in object not inside a function
    
 }
 chai()
*/
 
/*const chai = function(){
    let username = "apurva"
    console.log(this.username); //Output : undefined
    
 }
 chai()
*/

 //Arrow function  :
  const chai = () => {
    let username = "apurva"
    console.log(this.username); // Output : undefined
    
  }
  chai()

  // In function and object both we cannot get desire output  or access variables using this keyword


const addTwo = (num1 , num2) =>{
    return num1 + num2
}
 console.log(addTwo(2,4)); //Output : 6


 //or for single statements we dont write return

 const addnumber = (num1,num2) => (num1 + num2)
 console.log(addnumber(1,2)); //output : 3
 
 
 