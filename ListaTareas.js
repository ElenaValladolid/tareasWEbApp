const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');

//FUNCIONS A IMPLEMENTAR

//recoge la informacion de localStorage
function recogerTareasStorage(){
    //get del array de localStorage
    let arrayStorage = localStorage.getItem('items');
    return arrayStorage;
}

//muestra tareas en pantalla
function mostrarTareas(){
    //recorrer el array de local storage y pasarlo a escribirPantalla
    //por cada elemento que hay en arrayStorage
    //llamo a escribirPantalla y le paso el elemento (tarea)
    escribirPantalla();
}

//escribe en pantalla
function escribirPantalla(){
    //los valores recibidos añadir hijo (<li>) al <ul>
}

//recoge información del fornulario
function recogerDatosFormulario(evento){
  evento.preventDefault();
  
  //1- Aquí recoger los valores de la tarea, la fecha y prioridad
    //1.1 -recoger en variables los datos:
      //tareas= <id="item-input">.value
      const tarea = document.getElementById('item-input').value;
      //fechas= <id="fecha">.value
      let fechas = document.getElementById('fecha').value;
      const parts = fechas.split('-');
      fechas = parts[2] + '/' + parts[1] + '/' + parts[0];
      //prioridad= <id="priority">.value
      const prioridad = document.getElementById('priority').value;
      console.log(tarea, fechas, prioridad);
    

  //2- Escribir en la pantalla dentro de un <li> hijo de <ul> tarea, fecha y prioridad
    //2.1 - const li = document.createElement('li');
        const li = document.createElement ('li');

    //2.2 - Añadir al li tarea
    //2.3 - Añadir al li fecha
    //2.4 - Añadir al li prioridad
      let tareaCompleta = fechas + ' - ' + tarea + ' - ' + prioridad;
      li.appendChild(document.createTextNode(tareaCompleta));

    //2.5 - Añadir al li botón con la x
    //      2.5.1 crear botón
      const boton = document.createElement('button');
      boton.classList.add('btn-link', 'text-red', 'remove-item');
    //      2.5.2 crear icono x
      const icono = document.createElement('i');
      icono.className = 'fa-solid fa-xmark';
    //      2.5.3 añadir icono al botón
      boton.appendChild(icono);
      li.appendChild(boton);
    //2.6 - < id=<ul id="item-list", .AddChild(li)
    itemList.appendChild(li);


    //3. - Limpiar los campos del formulario
    tarea.value = '';
    fechas.value = '';
    prioridad.value = '';

  
  escribirPantalla();
  escribirLocalStorage();
}

//guarda información en LocalStorage
function escribirLocalStorage(){
    //aquí recoger el array y hacer push
 let itemsFromStorage;
 itemsFromStorage.push();
 localStorage.setItem('items',JSON.stringify(itemsFromStorage));

}

//eliminar todas las tareas de la pantalla
function eliminarTareasPantalla(){
    //aquí recoger todos los <li> y eliminarlos
    // while(itemList.firstChild){
    //   itemList.removeChild(itemList.firstChild);
    // }
}

//eliminar todas las tareas de localStorage
function eliminarTodasLocalStorage(){
    //aquí hacer clear en localStorage
}

//eliminar una tarea de la pantalla
function eliminarTareaPantalla(){
    //aquí código eliminar <li> "clickado"
}

//eliminar una tarea de localStorage
function eliminarTareaLocalStorage(){
    //aquí código para eliminar el <li> seleccionado
}

//recoger tareas de la pantalla
function recogerTareasPantalla(){
    //aquí codigo recoger las tareas del <ul>
}

//ordenar por fecha
function ordenarPorFecha(){
    
  recogerTareasPantalla();
  //aquí código para orenar por fecha
  escribirPantalla();
}

//ordenar por prioridad
function ordenarPorPrioridad(){

    recogerTareasPantalla();
    //aquí código para ordenar por prioridad
    escribirPantalla();
}

itemForm.addEventListener('submit', recogerDatosFormulario);
















