function addOne(x) {
    return x + 1;
  }
function pipe(x, ...theArgs) {       
    for (let i = 0; i < theArgs.length; i++){
        x = addOne(x);
    }
    return x;
}
pipe(2,addOne,addOne,addOne,addOne);