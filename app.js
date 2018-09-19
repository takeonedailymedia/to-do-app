function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDo = document.getElementById("deleteToDo");
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();


    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // create a delete button
    let deleteBtn = document.createElement('button');

    //empty the input
    newToDoText.value = '';

    // when checkbox on li is checked
    deleteToDo.addEventListener('checked', newLi) => {

    // remove to-do checked
    checkbox.removeChild(newLi);

  });
}


window.onload = function() {
  onReady();
};
