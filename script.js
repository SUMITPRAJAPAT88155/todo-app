function addtodo(){
    const input=document.getElementById('todoInput')
    const todoList=document.getElementById("todoList")
    if (input.value.trim()===""){
        alert("please enter the name")
        return;
    }
    const li=document.createElement("li")
    li.textContent=input.value
    
    li.onclick=function(){
        li.remove()
    }
    todoList.appendChild(li);
    input.value="";


}
