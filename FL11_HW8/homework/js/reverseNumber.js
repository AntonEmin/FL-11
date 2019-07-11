function reverseNumber(a) {
    let result = 0;
    let sign = 1;  
    if (a < 0) {
        sign *= -1;
        a = Math.abs(a);
    } 
    while (a > 0) {        
        let digit = a % 10;
        result =result*10 + digit;
        a = Math.floor(a / 10);       
    }
    return result * sign;
}
reverseNumber(123456);