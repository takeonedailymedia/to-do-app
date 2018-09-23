//#1
function onReady() {
  let toDos = [];
  let id = 0;

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo() {
    toDos.push({
        title: newToDoText.value,
        complete: false,
        //#2 and #3
        id: ++id
  });
}
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
      toDoList.textContent = '';
      toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

    // #4 create a delete button
    let deleteBtn = document.createElement("button");

    // #4 set the button name
    deleteBtn.innerHTML = '<span>Delete</span>';

    // #5
    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);


    function deleteToDoItem(newLi, toDos , toDoList) {
        return toDoList( id => 0);

    }

    });
  });
}
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
        //#6
        renderTheUI();
    });

}

window.onload = function() {
  onReady();
};
