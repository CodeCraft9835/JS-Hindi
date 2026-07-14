// singleton - is made when object is cretaed form constructor

//object literals consists of key and value pairs KEYS by default in object are string
const mySym = Symbol("key1")
const JsUser = {
    name : "Apurva",
    "full name" : "Apurva Dutta",
    age : 19 , 
    location : "Patna",
    email : "apurva@gmail.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday","Saturday"],
    //adding symbol
   [ mySym ] : "mykey1" //correct way dont write symbol as mySym : "key1" its wrong it will typeof String not symbol
}

// How to access objects ?
console.log(JsUser.name);
console.log(JsUser["email"]); // recommanded to use always
console.log(JsUser["full name"]);

// How to use symbols of JS as key in objects
// 
console.log(JsUser.mySym);
console.log(typeof JsUser.mySym); // string where interviewer tricks you so in order to make the mySym symbol we place it under [],
console.log(JsUser[mySym]);

// Inorder to  freeze the object so that no one can change the value 
//Object.freeze(JsUser)
//Now after frezzing we try to change the key value of the object JsUser it doesnt give error but value change is not going to be reflected on screen it shows olde value 

JsUser.email = "apurva12@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
    
}
console.log(JsUser.greeting()); 

JsUser.greetingtwo = function(){
    console.log(`Hello JS user , ${this["full name"]}`);
    
}
console.log(JsUser.greetingtwo());
