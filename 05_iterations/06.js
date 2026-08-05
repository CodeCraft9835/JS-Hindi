const coding = ["js" , "ruby" , "java", "python", "cpp"]

 const values = coding.forEach((item) =>{
    //console.log(item);
    
})

console.log(values); //Output : undefined , it means forEach loop does not return a value when stored in a variable


const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


//Filter returuns value in the variable  , where as  forEach loop doesnt return any value
const newNums = myNums.filter((num) => num > 4)

console.log(newNums); // Output : [ 5, 6, 7, 8, 9, 10 ]

const newNums1 = myNums.filter( (num) => {
    return num > 4 // Without return , you will not get any vlue it will be [] empty array
})
console.log(newNums1); //Output : [ 5, 6, 7, 8, 9, 10 ]



// How to store value using forEach loop ?

const newNums2 = []

myNums.forEach( (num)=> {
    if( num > 4) {
        newNums2.push(num)
    }
})
console.log(newNums); //Output : [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((book) => book.genre == "History")

userBooks = books.filter ((book) =>{
    return book.publish >= 1995 && book.genre == "History"
} )
console.log(userBooks);

