const colors = ['red', 'blue', 'green', 'yellow', 'orange'];


// colors.reverse();
// console.log(colors);



const rev_colors = [];
for (const clr of colors){
    // console.log(clr);
    rev_colors.unshift(clr)
}
// console.log(rev_colors);

const reverse_colors =[];
for(let i = 0; i < colors.length; i++){
    const clr = colors[i];
    reverse_colors.unshift(clr);
}


// side reverse

for (let i =colors.length -1; i >=0; i--){
    const clr =colors[i];
    console.log(clr);
}
