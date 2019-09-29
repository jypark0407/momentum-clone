const toDoForm = document.querySelector(".todo_form"),
  toDoInput= document.getElementById("input_form"),
  toDoOutput = document.querySelector(".todo_list"),
  toDos = [];

function deleteToDo(event){
  // const btn = event.target;
  const li = event.target.parentNode;
  toDoOutput.removeChild(li);
}

function paintToDo(text) {
  const li = document.createElement("li")
  li.innerHTML = toDoInput.value;
  const btn = document.createElement("button")
  btn.innerHTML= "❌" 
  const span = document.createElement("span")
  // btn.value = "nope"
  li.appendChild(span)
  li.appendChild(btn)
  const newId = toDos.length+1
  li.id = newId
  toDoOutput.appendChild(li);
  const toDoObj = {
    text:toDoInput.value,
    id: newId
  }
  toDos.push(toDoObj)
  localStorage.setItem("todo", JSON.stringify(toDos))
  btn.addEventListener("click", deleteToDo)
}

toDoForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  const current_value = toDoInput.value
  paintToDo(current_value)
  localStorage.setItem("toDo", current_value)
  toDoInput.value = "";
});

