//for of  loop

const arr = [1 , 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello World !"

for (const greet of greetings) {
    if(greet == " "){
    continue
}
    console.log(`Each character is ${greet}`);
}


//Maps - itself an object , which hold key value pairs like objects in jS , it doesn't have duplicate values and ordered during input and at the time of giving output will be same

const map = new Map()
map.set('IN',"INDIA")
map.set('USA', "United States of America")
map.set('Fr',"France")

console.log(map); //Output
/* 
Map(3) {
  'IN' => 'INDIA',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/



for (const key of map) {
    console.log(key) //Output :
    /*
        [ 'IN', 'INDIA' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
    */
}

for (const [key ,value] of map) { //    Destructing map object
    //console.log(key); //Output:
    /* 
    IN
    USA
    Fr
*/
console.log(key +":-"+value);
/* 
Ouptut :

IN:-INDIA
USA:-United States of America
Fr:-France

*/
}



const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

/*
for (const [key,value] of myObject) {
    console.log(key+":"+value);//Output : TypeError: myObject is not iterable , so objects are iterated using forof loop
    
}
    */

