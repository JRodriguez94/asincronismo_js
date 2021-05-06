
// * Callback 1
function sum(num1, num2) {
    console.log("Antes del el ret, del callback");
    return num1 + num2;
}

function res(num1, num2) {
    console.log("Antes del el ret, del callback");
    return num1 - num2;
}


function calc(num1, num2, callback) {
    console.log("Antes del resultado");
    return callback(num1, num2);
}

console.log(calc(7,2,sum));
console.log(calc(7,2,res));



// * Callback 2
function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date)
    }, 7000)
}


function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);