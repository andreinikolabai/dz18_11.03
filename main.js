function pow(num, degree) {
if (degree === 1){
    return num;
}
else {
    return num * pow(num, degree - 1);
}
}

let num = 5;
let degree = 2;

console.log(`${num} ^ ${degree} = ${pow(num, degree)}`);
