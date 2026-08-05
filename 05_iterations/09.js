 // Reduce in JS : Do mdn for more knowledge

 const myNums = [1 ,2 , 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc : ${acc} and curval : ${currval}`);
        
    return acc  + currval
} , 1)
console.log(myTotal);

const myTotal1 = myNums.reduce( (acc , curr) => acc + curr , 0)

console.log(myTotal1);



// ADD all shopping Cart items  

const shoppingCart =[
    {
        itemName : "jsCourse",
        price  : 2999
},
{
    itemName : "pyCourse",
        price  : 999
},
{
    itemName : "javaCourse",
        price  : 5999
}
]

const pricetopay = shoppingCart.reduce ( (acc ,item) => item.price + acc ,0)
console.log(pricetopay); //Output : 9997
