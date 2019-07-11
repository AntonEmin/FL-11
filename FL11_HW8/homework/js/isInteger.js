function isInteger (number) {
    if (number % Math.floor(number)>0){
        return false;
    } else {
        return true;
    }
}
isInteger(5);
isInteger(5.9);