const converter = document.querySelector('.converter');

converter.addEventListener('submit', event => {
  let height = document.querySelector('.height');
  const feetValue = document.querySelector('.feet');
  const inchesValue = document.querySelector('.inches');

  height = parseInt(height.value);

  if (inNaN(height) || (height.value = '')) {
    alert('Only valid numbers, please');
  } else if (height <= 0) {
    alert('Only values greater than ZERO!');
  } else {
    let feet = height*0.0328084;
    let decimal = feet - Math.trunc(feet);
    let inches = Math.ceil(decimal*12);

    feetValue.value = `${Math.trunc(feet)}'`;
    inchesValue.value = `${inches}"`;
  }
})






let number = 175;
let feet = number*0.0328084;

let decimal = feet - Math.trunc(feet);
let inches = Math.ceil(decimal*12)
console.log(`${Math.trunc(feet)}' ${inches}"`)