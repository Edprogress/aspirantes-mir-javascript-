// Vinculacion  con HTML

// Contenedores 
const container_add = document.querySelector("#container_add");
const container_list = document.querySelector("#container_list");
const container_eraser = document.querySelector("#container_eraser");

// Variables del contenedor add 'ingreso de datos'
const input_add = document.querySelector(".input_add");
const boton_add = document.querySelector(".boton_add");
const completados = document.querySelector("#completados");
const nocompletados = document.querySelector("#completados");
// Variables del contenedor que recibira nuestras tareas o lista de tareas
const lista = document.querySelector(".lista");
const elementos = lista.querySelectorAll("li")
// Varialbes del contenedor de borrado 
const boton_eraser = document.querySelector(".boton_eraser");


// Listado de eventos a usar
let contador = 1;
boton_add.addEventListener("click", function () {
    if (input_add.value === "") {
        // Sino ingresamos nada se lanza una alerta
        alert("Ingresa una tarea pendiente por realizar");
    }
    else {


        // Si se ingresa algo pasamos a crear la "li ", "input_boton" con su id respectivo,estado  y tipo correspondiente
        const newLi = document.createElement('li');
        const newInput = document.createElement('input');
        const renglon = document.createElement("hr");

        newLi.innerText = input_add.value;
        newLi.id = contador;
        newLi.title = "Task" + newLi.id;
        newLi.completed = false;
        contador = contador + 1;

        newInput.type = "checkbox";
        newInput.checked = false;


        newLi.appendChild(newInput);
        newLi.insertBefore(newInput, newLi.firstChild);
        lista.appendChild(newLi);
        lista.appendChild(renglon);

        input_add.value = "";
        input_add.focus();
    }

})


addEventListener("click", function () {
    const checkboxALL = document.querySelectorAll("#lista, li input[type ='checkbox'] ");



    // itera sobre cada elementos usando el forEach    
    checkboxALL.forEach(function (checkbox) {

        const ischecked = checkbox.checked;
        const li = checkbox.parentNode;
        if (ischecked) {
            li.style.textDecoration = "line-through";li.style.textDecorationColor = "red";li.style.color = "gray";
        }
        else {
            li.style.textDecoration = "none"
        }


    });

})

boton_eraser.addEventListener("click", function () {
    const checkboxALL = document.querySelectorAll("#lista, li input[type ='checkbox'] ");
    // itera sobre cada elementos usando el forEach    
    checkboxALL.forEach(function (checkbox) {

        const ischecked = checkbox.checked;
        const li = checkbox.parentNode;
        if (ischecked) {
            li.remove();
        }
    });
});


