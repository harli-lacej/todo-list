let text_field = document.getElementById("fname");
text_field.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let newdivelem = document.createElement('div');
    newdivelem.classList.add('todo-div-todo');
    newdivelem.textContent = 'Replacement text';
    
    
  }
});