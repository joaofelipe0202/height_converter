let number = 175;
let feet = number*0.0328084;

let decimal = feet - Math.trunc(feet);
let inches = Math.ceil(decimal*12)
console.log(`${Math.trunc(feet)}' ${inches}"`)