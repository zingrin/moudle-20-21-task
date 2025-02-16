// Use a for...of loop to concatenate all the elements of an array into a single string.
 let friends = ['Tom', 'Tim', 'Tin', 'Tik']

 let newString = "";

for(const friend of friends){
newString += friend;


}
console.log(newString);



//  Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

let statement = 'I am a hard working person'
// shortcut way
const reversed = statement.split('').reverse().join('');
// console.log(reversed);



// for loop
let reverse =''
for (const letter of statement){
    // console.log(letter);
    reverse = letter + reverse;

}
// console.log(reverse)

// normal for loop
let rev =''
for(let i =0; i<statement.length; i++){
    // console.log(i);
    // console.log(statement[i]);
    const letter = statement[i];
    rev = letter+rev;
}
// console.log(rev);

