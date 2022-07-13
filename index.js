let text_field = document.getElementById("fname");
text_field.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    //event.preventDefault();
    console.log("Enter pressed");
    let block_to_insert = document.createElement('div');
    let text_to_insert = document.getElementById('fname').value;
    let text=block_to_insert.innerHTML = ''+text_field.value;
    block_to_insert.classList.add('todo-div-todo');
 
    let where_to_insert = document.getElementById('outer-div');
    where_to_insert.appendChild( block_to_insert );
    
    block_to_insert.onclick = function(){
      block_to_insert.style.setProperty("text-decoration", "line-through");
    }
    block_to_insert.onmouseover = function(){
      console.log("mouseover");
    }
  }
});