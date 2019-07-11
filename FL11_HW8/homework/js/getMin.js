function getMin() {
    let min = 0;
    for (let i = 0; i<arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
       
    }
    return min; 
}
getMin(-1, 2, 10, -10, 4);