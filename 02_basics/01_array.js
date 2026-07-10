// Array 



//interview most important part JS
/*
JavaScript array-copy operations create shallow copies.

A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
As a result, when you change either the source or the copy, you may also cause the other object to change too.
That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

* two objects o1 and o2 are shallow copies if:

1-They are not the same object (o1 !== o2).
2-The properties of o1 and o2 have the same names in the same order.
3-The values of their properties are equal.
4-Their prototype chains are equal.

A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. 
That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.

* We can now define deep copies more formally as:

1-They are not the same object (o1 !== o2).
2-The properties of o1 and o2 have the same names in the same order.
3-The values of their properties are deep copies of each other.
4-Their prototype chains are structurally equivalent.

*/


// Array declaration 

const myArr = [1,2,3,4,5]
const myCartton = ["Doremon","Sinchan","Pokemon"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0])

//Array methods
myArr.push(6) // The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
myArr.push(7)
console.log(myArr);

myArr.pop() //The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
console.log(myArr);


myArr.unshift(-2,-1,0) //The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
console.log(myArr);

myArr.shift()//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(myArr);

console.log(myArr.includes(9));//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(myArr.indexOf(1));//The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.


const newArr = myArr.join(); // The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
console.log(newArr);

//slice and splice interview vvi

console.log("A ",myArr);
const myn1 = myArr.slice(1,3) //The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1 ,3)//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().
console.log(myn2);
console.log("C",myArr);


/*
Interview : Differnce between splice and slice 

Splice changes the orignal array also but slice doesnt affect original one
*/



