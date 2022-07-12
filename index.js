let text_field = document.getElementById("fname");
text_field.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    //event.preventDefault();
    console.log("Enter pressed");
    let block_to_insert = document.createElement('div');
    let text_to_insert = document.getElementById('fname').value;
    block_to_insert.innerHTML = ''+text_field.value;
    block_to_insert.classList.add('todo-div-todo');
 
    let where_to_insert = document.getElementById('outer-div');
    where_to_insert.appendChild( block_to_insert );
  }
});