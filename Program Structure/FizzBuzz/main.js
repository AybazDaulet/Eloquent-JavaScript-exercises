for (let i = 0; i < 100; i++) {
    let fizz_buzz = "";
    if ((i + 1) % 3 == 0) {
        fizz_buzz += "Fizz";
    };
    if ((i + 1) % 5 == 0) {
        fizz_buzz += "Buzz";
    };
    fizz_buzz ? console.log(fizz_buzz) : console.log(i + 1);
}