let text_field = document.getElementById("fname");
let count = 0;
text_field.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    count++;
    console.log(count);
    event.preventDefault();
    let block_to_insert = document.createElement('div');
    block_to_insert.id = "div-created"+count+"";
    let text_to_insert = document.getElementById('fname').value;
    let text=block_to_insert.innerHTML = ''+text_field.value;
    block_to_insert.classList.add('todo-div-todo');
 
    let where_to_insert = document.getElementById('outer-div');
    where_to_insert.appendChild( block_to_insert );
    
    block_to_insert.onclick = function(){
      block_to_insert.style.setProperty("text-decoration", "line-through");
    }
      block_to_insert.onmouseover = function(){
      let delete_div = document.createElement('div');
      let text=delete_div.innerHTML = '<i class="fa-solid fa-trash" style="color:white"></i>';
      delete_div.classList.add('delete-todo');
      delete_div.id = "delete-div"+count+"";

      let place_to_insert = document.getElementById(block_to_insert.id);
      place_to_insert.appendChild( delete_div );
    }
    delete_div.onclick=function(){
      const element = document.getElementById("delete-div"+count+"");
      element.remove();

      const element2 = document.getElementById("div-created"+count+"");
      element2.remove();
    }
  }
});