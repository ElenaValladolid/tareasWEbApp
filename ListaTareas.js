
//FUNCIONS A IMPLEMENTAR

//recoge la informacion de localStorage
function recogerTareasStorage(){}
    //get del array de localStorage
    let arrayStorage = localStorage.getItem('items');
    return arrayStorage;

//muestra tareas en pantalla
function mostrarTareas(){
    //recorrer el array de local storage y pasarlo a escribirPantalla
    //por cada elemento que hay en arrayStorage
    //llamo a escribirPantalla y le paso el elemento (tarea)

    escribirEnPantalla();
}

//escribe en pantalla
function escribirEnPantalla(){}
    //los valores recibidos añadir hijo (<li>) al <ul>



function recogerInformacionAlmacen(){}


function escribirInformacion(){}






function guardarInformacion(){

}

function mostrarInformacion(){

}

//recoger tareas de la pantalla
function recogerTareasPantalla(){}

//ordenar por fecha();
function ordenarPorFecha(){

    reci
}

//ordenar por prioridad
function ordenarPorPrioridad(){

    recogerTareasPantalla();
    //aquí codigo para ordenar por prioridad
    escribirEnPantalla();
}












document.addEventListener('DOMContentLoaded', function() {
    // Función para agregar una tarea
    function addTask(event) {
      event.preventDefault(); // Evita el comportamiento por defecto del formulario
      
      // Recoger valores del formulario
      const nombre = document.getElementById('nombre').value;
      const tarea = document.getElementById('tarea').value;
      const fecha = document.getElementById('fecha').value;
      const prioridad = document.getElementById('prioridad').value;
      
      // Crear objeto con la tarea
      const nuevaTarea = {
        nombre: nombre,
        tarea: tarea,
        fecha: fecha,
        prioridad: prioridad
      };
      
      // Obtener lista de tareas del LocalStorage (si existe)
      let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
      
      // Agregar la nueva tarea a la lista
      tareas.push(nuevaTarea);
      
      // Guardar la lista de tareas en el LocalStorage
    localStorage.setItem('tareas', JSON.stringify(tareas));
    
    // Limpiar el formulario
    document.getElementById('taskForm').reset();
    
    // Actualizar la lista de tareas mostrada
    mostrarTareas();
  }
  // Función para eliminar una tarea
  function eliminarTarea(index) {
    // Obtener lista de tareas del LocalStorage
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    
    // Eliminar la tarea en el índice dado
    tareas.splice(index, 1);
    
    // Guardar la lista actualizada en el LocalStorage
    localStorage.setItem('tareas', JSON.stringify(tareas));
    
    // Actualizar la lista de tareas mostrada
    mostrarTareas();
  }

  // Función para mostrar las tareas almacenadas
  function mostrarTareas() {
    // Obtener lista de tareas del LocalStorage
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    
    // Mostrar las tareas en el HTML
    const listaTareas = document.getElementById('taskList');
    listaTareas.innerHTML = ''; // Limpiar la lista antes de agregar las tareas
    
    tareas.forEach(function(tarea, index) {
      const elementoLista = document.createElement('li');
      elementoLista.innerHTML = `
        <strong>${tarea.nombre}</strong> - ${tarea.tarea} - ${tarea.fecha} - ${tarea.prioridad}
        <button onclick="eliminarTarea(${index})">Eliminar</button>
      `;
      listaTareas.appendChild(elementoLista);
    });
}

// Mostrar las tareas almacenadas al cargar la página
mostrarTareas();
  
// Agregar evento al formulario para agregar una tarea
document.getElementById('taskForm').addEventListener('submit', addTask);
});
