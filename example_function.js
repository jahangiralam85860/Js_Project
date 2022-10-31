/*
function functionName(parameters) {
    function body;
    return;
}
 var returnValue = functionName(parameters value);
 */

 function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
 }

 var myAverage = getAverage(60,58,59);
 console.log(myAverage);

//  step by step taka sum 
function add(first, second) {
    const sum = first + second;
    return sum;
}

const firstTaka = add(100,200);
const secondTaka = add(300,200);
const fullPayment = add(firstTaka, secondTaka);
console.log(fullPayment);


