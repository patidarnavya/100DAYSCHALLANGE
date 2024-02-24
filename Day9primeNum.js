function checkPrime(num) {
    let i,
    value = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            value = false;
            break;
        }
    }
    if (value == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(4);
checkPrime(29);