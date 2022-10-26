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
// array new index add
destinations.push('bhutan');
console.log(destinations);
// array last index delete
destinations.pop();
console.log(destinations);

var num1 = 'jahangir';
var num2 = 'masud';
var num3 = 'sojib';
var num4 = 'prapti';

if (num1 == num2) {
    console.log('I know');
}else if (num1 != num4) {
    console.log('I love you prapti');   
}else{
    console.log('You are bad boy');
}