// declaración de variables
let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

// event listener

post.addEventListener("click",AllPost);
clear.addEventListener("click",AllClear);
mark.addEventListener("click",AllMark);
del.addEventListener("click",AllDel);

// funciones

function AllPost(e){ // tiene el parametro del evento
    e.preventDefault(); //previene el evento natural, que en este caso
                        // es que se recargue la página
    //obtener valor de TextArea
    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    if (todo!=""){
    var currListHTML = list.innerHTML; 
    list.innerHTML = currListHTML + `<input type = "checkbox" name="todo" /> ${todo} <br>`;
    }

}

function AllClear(e){
    var todos = document.getElementsByName("todo");
    for (var i = 0; i < todos.length; i++ ){
        todos[i].checked = false;
    }
}

function AllDel(e){
    var list = document.getElementById("todoList");
    list.innerHTML = '';
}

function AllMark(e){

    var todos = document.getElementsByName("todo");
    for (var i = 0; i < todos.length; i++ ){
        todos[i].checked = true;
    }

}