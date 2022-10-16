var money = 10;
var butterBread = 35;
var toastBiscuit = 20;
var milk = 40;
// condition add 
if (butterBread < money) {
    console.log("Ami akta danish khabo");
}
else if (butterBread > money) {
    console.log("Amar Taka nai, so khawar kotha cinta korbo na");
}

// array position check
var destinations = ['sajek','coxsbazar','nepal','balli','sp'];
console.log(destinations[2]);
// man change
destinations[2] = 'thailand';
// array index check
var index = destinations.indexOf('balli');
console.log(index);