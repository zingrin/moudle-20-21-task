// Write a JavaScript code to get the even numbers from an array using any looping technique.


 const numbers = [12, 98, 5, 41, 23, 78, 46];
 let result =[];
 for(let i = 0; i < numbers.length; i++){
   let even = numbers[i];
    if(even % 2==0){
      result.push(even)
    }
 }
console.log(result)