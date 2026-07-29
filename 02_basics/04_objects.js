// Singelton objects : When objects are created using constructors 
// In last video we all talk about how we construct the objects by the help of literals but today we will going to study how we create objects using constructors and this is called as singelton

const tinderUser = new Object();
console.log(tinderUser) // Output : {} , empty object
 // or 
 const tinderUser1 = {};
 console.log(tinderUser1); // Output : {} , empty object

tinderUser1.id = "123abc"
tinderUser1.name = "Apurva"
tinderUser1.isLoggedIn = false
 console.log(tinderUser1); // Output :{ id: '123abc', name: 'Apurva', isLoggedIn: false }


 // Object Nesting 

  const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Apurva",
            lastname : "Dutta",
        }
    }
  }
// How to access the nested objects in JS
  console.log(regularUser.fullname); //Output :{ userfullname: { firstname: 'Apurva', lastname: 'Dutta' } }
  console.log(regularUser.fullname.userfullname);//Output :{ firstname: 'Apurva', lastname: 'Dutta' }
  console.log(regularUser.fullname.userfullname.firstname);// Output : Apurva


  //Objects merging
  const obj1 = {1: "a", 2: "b"}
  const obj2 = {3 : "a", 4 : "b"}
 const obj = {5 : "c", 6 : "d"}
  const obj3 = {obj1 , obj2} // Not a correct way to merge two differnt objects into single object
  console.log(obj3); // Output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
  
  //Correct way to merge
  const obj4 = Object.assign(obj1 , obj2)
  console.log(obj4); // Output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

  const obj5 = Object.assign({},obj1,obj2 , obj) //Recommandable way
  console.log(obj5);//Output :{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }

  //Mostly used in current industry to merge objects are spreading concept

  const obj6 = {...obj1, ...obj2 , ...obj} // Mostly used and latest way
  console.log(obj6); //Output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }


  //Whenever we get value from any database then in order to acess it we widly use this below methdology

  // Whenever we get value from database it will be array of objects

   const users = [  // this is array of objects it means inside array we have several objects 
    {
      id : 1,
      email : "apu34@gmail.com"
    },
    {
      id : 2,
      email : "apu34@gmail.com"
    },
    {
      id : 3,
      email : "apu34@gmail.com"
    },
   ]
   console.log( users[1].email); //Output : apu34@gmail.com , it simply means we are accessing array 1st element  object value

   
   console.log(tinderUser1);

   console.log(Object.keys(tinderUser1)); //Output : [ 'id', 'name', 'isLoggedIn' ] , it simply means we are accessing keys of given object and Object.keys() method have return type array 
   console.log(Object.values(tinderUser1)); //Output :[ '123abc', 'Apurva', false ] , return type array
   console.log(Object.entries(tinderUser1)); // Output :[ [ 'id', '123abc' ], [ 'name', 'Apurva' ], [ 'isLoggedIn', false ] ] , it will return each key value pair in separated array box form

   console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Outpu : false , it basically we use it when we want to determine that  whether my given value is present or not in the given array list
    // For more details use mdn documents

   
     // Object Destructuring 

     const course = {
      coursename : "js in hindi",
      price : "999",
      courseInstructor : "Hitesh Sir"
     }
   
   console.log(course.courseInstructor); // Output : Hitesh Sir

  const {courseInstructor} = course //Mostly used in Industry
   
  console.log(courseInstructor); // Output : Hitesh Sir
  // or
  const {courseInstructor : instructor} = course // Here we destructure object course by changing the name of courseinstructore into instructor , widly used in React
  console.log(instructor); // Output :Hitesh Sir


  
  