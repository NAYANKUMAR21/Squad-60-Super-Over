var inputText = document.getElementById('inputText');
var form = document.getElementById('form');
var container = document.getElementById('container');
form.addEventListener('submit', storeTodos);

function storeTodos(event) {
  event.preventDefault();
  var inputValue = inputText.value;
  console.log(inputValue);
  display(inputValue);
}

function display(data) {
  const todoText = document.createElement('p');
  todoText.innerText = data;
  container.appendChild(todoText);
  inputText.value = '';
}
