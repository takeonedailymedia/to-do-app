function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
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
    let deleteBtn = document.createElement("button");

    // set the button name
    deleteBtn.innerHTML = '<span>Delete</span>';

    // attach the deleteBtn to the li
    deleteBtn.appendChild(newLi);

    // add EventListener
    deleteBtn.addEventListener('click', deleteBtn);

    // remove the completed To-Do
    deleteBtn.removeChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}


window.onload = function() {
  onReady();
};
