const accountId = 265732;
let accountEmail = "deepansh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // Not a good practice
let accountState;
// accountId = 2; // Not Allowed, because of const keyword;

accountEmail = "hc@oc.in";
accountPassword = "12345";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope

*/
console.table([accountId, accountEmail,accountPassword,accountCity,accountState]);