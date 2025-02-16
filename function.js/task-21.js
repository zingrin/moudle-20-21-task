// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function doMath(num1,num2,num3,num4){
    const multiply = num1 * num2 * num3 * num4;
    const result = multiply * 2;
    return result;
}
const multiply = doMath(10,5,10,33);
console.log(' some of multiply numbers are',multiply);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function checkNumber(number){
    let result = 0;
    if(number % 2 !== 0){
        result = number * 2
    }
    else{
        result = number /2
    }
return result;
}
const total = checkNumber(10);
console.log(total);
// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
let num = [87, 99, 29,38,990,830,110,330]
 function make_avg(datas){
    let sum = 0;
    const num = datas.length;
    for (const data of datas) {
      sum = sum + data;
         
    }
    const avg = sum / num;
return avg;

 }
 const result = make_avg(num);
 console.log(result);
// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
let binary = "1010101010"
 function count_zero(stBainary){
    let countValue = 0;
    for (const binary of stBainary) {
       if (binary === "0") {
        countValue++
       }

    }
return countValue;
 }

 const binar = count_zero(binary);
//  console.log(binar)


// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 
function odd_even(number){

    if(number % 2 !== 0){
        return "Odd"
    }
    else{
        return "Even"
    }
}
const output = odd_even(1);
console.log(output);