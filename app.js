//#1
let id = ()
function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
          title: newToDoText.value,
          complete: false
          //#2 and #3
          id: true () =>
    });
    newToDoText.value = '';

    renderTheUI();

  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

   });
  }
  addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });

    renderTheUI()

    // #4 create a delete button
    let deleteBtn = document.createElement("button");

    // #4 set the button name
    deleteBtn.innerHTML = '<span>Delete</span>';

    // #4 attach the deleteBtn to the li
    newLi.appendChild(deleteBtn);

    // #4 add listener
    deleteBtn.addEventListener('click', function() {

    // #5  unsure how to create an array from this
    
  })
    // #6
    renderTheUI()

window.onload = function() {
  onReady();
};
