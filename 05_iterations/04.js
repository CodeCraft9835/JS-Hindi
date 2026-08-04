const myObject = {
    'JS' : 'JavaScript',
    'Cpp' : 'C++',
    'rb' : 'ruby',
    'swift' : 'swift by app'

}


// for-in loop

for (const key in myObject) {
    
    //console.log(key);
    /*
    Output :
    JS
Cpp
rb
swift
 
    */

//console.log(myObject[key]); //Prints value of myObject corresponding to each key
/*
Output :
JavaScript
C++
ruby
swift by app

*/

//console.log(`${key} is shortcut for ${myObject[key]}`);
/*Output :
JS is shortcut for JavaScript
Cpp is shortcut for C++
rb is shortcut for ruby
swift is shortcut for swift by app

*/
    
}

const programming = ["js", "rb", "py" ,"java", "cpp"]

for (const key in programming) {
   
    //console.log(key);
    //Output :
    /*

0
1
2
3
4


    */
   //console.log(programming[key]);

   //Output :

   /*js
rb
py
java
cpp
 */
   
    
}

const map = new Map()
map.set('IN',"INDIA")
map.set('USA', "United States of America")
map.set('Fr',"France")

for (const key in map) {
   
    console.log(key); //output : Nothing
    // Maps are not iterable 
    
}