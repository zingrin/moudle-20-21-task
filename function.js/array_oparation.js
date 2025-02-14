

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
console.log(number)
    sum = sum + number;
    }
    return sum;
}



const numbers = [54, 62, 12, 6];
const sum = sumOfNumbers(numbers);
console.log('some of numbers is', sum);