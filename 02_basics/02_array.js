const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros =["superman","flash","batman"]

//marvel_heros.push(dc_heros) // Not a prefer way to merge two arrays in industry

//console.log(marvel_heros);
//console.log(marvel_heros[3]);
//console.log(marvel_heros[3][1]); // Not a good syntax

//const allHeros=marvel_heros.concat(dc_heros) //  a good way to merge but not widley used
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // Here ... represents spread operator which spreads the multiple array into single floor a excellent way to merge two or more than two arrays
//console.log(all_new_heros);


//If some difficult arary interviewer gave you to solve so do it in this way using  .flat(Infinty) method
const another_array = [1, 2, 3, 4, 5, 6, 7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);

// TO convert any string  into array form use .from()
 console.log(Array.from("1234"));
 console.log(Array.from({name:"hitesh"})); // intresting case google it very important for interview


 let score1 = 100
 let score2 = 200
 let score3 = 300
  console.log(Array.of(score1,score2,score3)); // important study more about array methods vvi for interview

  // focus more on Array.from , Array.isArray , Array.of  , these are important for interviews
  
  
 
