const converter = document.querySelector('.converter');

converter.addEventListener('submit', event => {
  let height = document.querySelector('.height');
  const feetValue = document.querySelector('.feet');
  const inchesValue = document.querySelector('.inches');
  event.preventDefault();
  height = parseInt(height.value);

  if (height < 170) {
    converter.style.backgroundColor = "rgb(2,0,30);";
  } else if (height > 170 && height <= 180) {
    converter.style.backgroundColor = "blue";
  } else if (height > 180 && height <= 190) {
    converter.style.backgroundColor = "green";
  } else if (height > 190) {
    converter.style.backgroundColor = "brown";
  }

  if (isNaN(height) || (height.value = '')) {
    alert('Only valid numbers, please');
  } else if (height <= 0) {
    alert('Only values greater than ZERO!');
  } else {
    let feet = height*0.0328084;
    let decimal = feet - Math.trunc(feet);
    let inches = Math.ceil(decimal*12);

    feetValue.value = `${Math.trunc(feet)}'`;
    inchesValue.value = `${inches}"`;

    document.querySelector('.height').value = '';
  }
})


