const accountId = 14453 // unchangeble  used for declare constants
let accountEmail = "apurva@google.com" // let and var both used for variable declaration 
var accountPassword = "12345" //var is used earlier and it is discarded in today world beacause it not follows scope (block and functinal scope ) concept

accountCity = "Patna" // it is also  allowed in js to declare variable without specifying its data type but its not regarded as a good practice

let accountState;
//accountId = 2  not alowed
accountEmail = "bihar*google.com"
accountPassword = "12346"
accountCity = "Kolkata"

console.log(accountId);
 console.table([accountEmail,accountId,accountPassword,accountCity,accountState])