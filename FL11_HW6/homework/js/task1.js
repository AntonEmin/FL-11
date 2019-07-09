let cord = prompt('Enter your 6 coordinates like (x y). ').split(' ');
for (let i = 0; i < cord.length; i++) {
    cord[i] = parseFloat(cord[i]);
}
let cordCenterCX = (cord[0]+cord[2])/2;
let cordCenterCY = (cord[1]+cord[3])/2;
console.log('cordCenterX' + cordCenterCX, 'cordCenterY' + cordCenterCY);
if(cordCenterCX === cord[4] && cordCenterCY === cord[5]) {
    console.log(cordCenterCX === cord[4] && cordCenterCY === cord[5]);
} else {
    console.log(cordCenterCX === cord[4] && cordCenterCY === cord[5]);
}