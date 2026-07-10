//In JS we can donate String using both single and double quotes

//In JS string is an object

const name = "Apurva";// String declaration way in JS
const repoCount = "5" ;

//console.log(name + repoCount + "Value") => Outdated form of writing synatx so dont use this 
 
//new form called as String interpolation use this form as it is wideley used in the industry
 console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)

 // New way of declaring String in JS it used object refernce and constructor method

 const Gitname = new String("Apurva 9835");
 console.log(`I am ${name} and my Github id is ${Gitname} and i have repo count of ${repoCount} .`);
 
 console.log(Gitname[0]); //Accesing string value from index
 console.log(Gitname.__proto__); // It shows String object  prototype use this statement in console of the browser

// Simple Methods of String in JS in order to know more about String methods use console of browser 
console.log(Gitname.length);
console.log(Gitname.toLowerCase());
console.log(Gitname.charAt(1));
console.log(Gitname.endsWith('5'));
console.log(Gitname.indexOf('v'));

const newString = Gitname.substring(-10,4); // VVI here 0 is included but 4  is excluded in the time of output
console.log(newString);


const anotherString = Gitname.slice(-10,4);
console.log(anotherString); //differnce between slice  and substring very importnat

const newString1 = "         apurva        "
console.log(newString1);
console.log(newString1.trim());// trim  used for remove both starting and end spaces 


const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','_'));
 
console.log(url.includes('hitesh'));
 
console.log(Gitname.split(" ")); // Split spltis value on the basics of input given here we gave " " so it splits every word as individual element of the array
console.log(Gitname.split(''));



// You must spend a hour with string methods use console and mdn docs  for it write an article , very important for interviews
// practice string methods weekley use new string interpolation synatax always

 
 