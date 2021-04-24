const button = document.getElementById('submit');
const input = document.getElementById('input');
const output = document.querySelector('.container p');

button.addEventListener('click', (e) => {
  output.innerHTML = '';
  const inputVal = input.value;
  looping(inputVal);
  e.preventDefault();
});

function looping(inputVal) {
  for (let i = 0; i < inputVal; i++) {
    for (let j = 0; j <= i; j++) {
      output.innerHTML += '* ';
    }
    output.innerHTML += '<br>';
  }
}
