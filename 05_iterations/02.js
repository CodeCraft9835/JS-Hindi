// while loop



let index = 0 
while ( index <= 10){
    console.log(`Value of index is ${index}`);
    index+=2
}


let myArray = ["flash" , "batman", "superman"]

let arr = 0;
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr = arr +1
    
}



// Do while loop
let scores = 1
do {
   // console.log(`scores value is ${scores}`);
    scores++
} while (scores <= 10);


//Dowhile loop prints value atleast one time even the condition will be false

let score = 11
do {
    console.log(`scores value is ${score}`);
    score++
} while (score <= 10);