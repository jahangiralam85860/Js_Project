// continue tag for js
var numbers = [10,20,30,40,50,60,30,13];
for( var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number < 50) {
        continue;
    }
    console.log(number);
}