// Your code goes here
let sides = prompt('Write 3 triangle sides length').split(' ');
let a = 0;
let b = 1;
let c = 2;
for (let i = 0; i<sides.length;i++) {
    sides[i] = parseInt(sides[i]);
}
if (sides[a] + sides[b] <= sides[c] || sides[a] + sides[c] <= sides[b] || sides[c] + sides[b] <= sides[a]) {
    console.log('Triangle doesn’t exist');
}else { 
        if (sides[a] === sides[b] === sides[c]) {
            console.log('Equivalent triangle');
        }else if (sides[a] === sides[b] && sides[b] !== sides[c] || sides[b] === sides[c] && sides[1] !== sides[a]
                 || sides[a] === sides[c] && sides[a] !== sides[b] ) {
            console.log('Isosceles triangle');
        }else {
            console.log('Normal triangle');
        }
}
