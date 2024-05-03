const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const clearBoton = document.getElementById('clear');
const inputfilter = document.getElementById('filter');

//FUNCIONS A IMPLEMENTAR

//recoge la informacion de localStorage
function recogerTareasStorage(){
    //get del array de localStorage
    let arrayStorage = localStorage.getItem('items');
    return arrayStorage;
}

//muestra tareas en pantalla
function mostrarTareas(){
    //0.- definir el evento que lanzará esta función
  
        //ver al final del código junto el resto de los listeners

    //1.- Obtener la información de localStorage y almacenar en array
    let tareasEnLocalStorage = JSON.parse(localStorage.getItem ('tareas')) || [];

    //2.-recorrer el array de local storage y escribir en pantalla
    //2.1 - por cada tarea hay que crear un <li>
    //si utilizo la función escribirPatalla(): 
    //tareasEnLocalStorage.forEach(element =>escribirPantalla(element));

    tareasEnLocalStorage.array.forEach(element => {
      const li = document.createElement ('li');
      li.appendChild(document.createTextNode(element)); 
    });

    const boton = document.createElement('button');
    boton.classList.add('btn-link', 'text-red', 'remove-item');

    const icono = document.createElement('i');
    icono.className = 'fa-solid fa-xmark';

    boton.appendChild(icono);
    li.appendChild(boton);

    itemList.appendChild(li);


    
   
    //2.2 - En <li> hay que añadir un hijo con la información de la tarea 
    //      un hijo con un <button> y este hijo con un <i>
    //2.3 - cada <li> tiene que añadirse  como hijo al elemento <ul>
    
    escribirPantalla();
    
}

//escribe en pantalla
function escribirPantalla(element){
 
  const li = document.createElement ('li');
  li.appendChild(document.createTextNode(element)); 
  
  const boton = document.createElement('button');
  boton.classList.add('btn-link', 'text-red', 'remove-item');

  const icono = document.createElement('i');
  icono.className = 'fa-solid fa-xmark';

  boton.appendChild(icono);
  li.appendChild(boton);

  itemList.appendChild(li);

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
    
        //esto sustituiría al punto 2
        //escribirPantalla(tareaCompleta);


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


    // //3. - Limpiar los campos del formulario
    // tarea.value = '';
    // fechas.value = '';
    // prioridad.value = '';

  
  escribirPantalla();
  escribirLocalStorage();
}

//3 -Escribir  en LocalStorage
function escribirLocalStorage(){
    // 3.1 - Traer la información de localStorage
      //3.1.1 localStorage.getItem() y almacenar en array
      let tareasEnLocalStorage = JSON.parse(localStorage.getItem ('tareas')) || []
    //3.2 -Hacer pushde los datos del aRRAy
    let tareaParaLocalStorage = tareaCompleta;
    tareasEnLocalStorage.push(tareaParaLocalStorage);
    //3.3 -Guardar la información el localStorage
      //3.3.1 localStorage.setItem()
    localStorage.setItem('tareas', JSON.stringify(tareasEnLocalStorage));

    //resear los campos del formulario
    itemForm.reset();

}

//eliminar todas las tareas de la pantalla
function eliminarTodasTareasPantalla(){
    //0. -Manejar el evento de 'click' sobre el botón de eliminar todo
    //1.- aquí recoger todos los <li> y eliminarlos  
    //1.1.- Mientras hayan <li> (hijo de la ista) en el <ul> eliminarlos
    while(itemList.firstChild){
      itemForm.removeChild(itemList.firstChild);
    }
    //1.2.- Eliminar también el localStorage
    localStorage.clear();
    //esto hace lo mismo:
    //localStorage.removeItem('tareas');
}

// //eliminar todas las tareas de localStorage
// function eliminarTodasLocalStorage(){
//     //aquí hacer clear en localStorage
// }

//eliminar una tarea de la pantalla
function eliminarUnaTareaPantalla(evento){
    if(evento.target.parentElement.classList.contains('remove-item')){
    
    //eliminar una tarea de localStorage
    //1.- Traer la información que tenemos en el localStorage
    let tareasEnLocalStorage = JSON.parse(localStorage.getItem('tareas')) || [];
    //2.- Escribir de nuevo el array sin el elemento eliminado en pantalla
    //2.1.- aplicamos .filter()
    tareasEnLocalStorage = tareasEnLocalStorage.filter((i)=> i!==evento.target.parentElement.parentElement.textContent);
    //3.- Guardar el array nuevo en localStorage
    localStorage.Storage.setItem('tareas', JSON.stringify(tareasEnLocalStorage));
    //aquí código eliminar <li> "clickado"
    evento.target.parentElement.parentElement.remove();
    }
}


//eliminar una tarea de localStorage
function eliminarUnaTareaLocalStorage(){
    //aquí código para eliminar el <li> seleccionado
}

//recoger tareas de la pantalla
function recogerTareasPantalla(){
    //aquí codigo recoger las tareas del <ul>
}

//ordenar por fecha
function ordenarPorFecha(){
  //0.-Manejar el evento 'click' del botón id = ordenFecha
  //1.-Recoger los elementos <li> en un array
  //2.-Recoger el texto del elemento y extraer solo la fecha y quitar '/'
  //3-a.- Reordenar el array de <li> por el texto extraido
  //3-b.- Crear un nuevo array con los elementos ordenados.
 
}


//ordenar por prioridad
function ordenarPorPrioridad(){


}

function filtrarElementosPantalla(evento){
  //0.- manejar el evento'input' dentro del campo del filtro
  //1.- recoger el texto que se está excribiendo en el campo filtro(lanza evento)
  //1.1- convertir texto a minúsculas
  const texto = evento.target.value.toLocaleLowerCase();

  //2.- recoger todos los <li> en un array en minúsculas
  const listaLi = itemList.querySelectorAll('li');

    //2.1.- recorro esse array para comprobar si existe el texto recogido
    // en cada elemento del array
    listaLi.forEach((elemento) => {
      const textoTarea = elemento.firstChild.textContent.toLocaleLowerCase();
  
    //2.1.1- si existe style.display = 'flex'
    //       si no existe style.display = 'none'
      if (textoTarea.indexOf(texto) !=-1){
        elemento.style.display = 'flex';
      }else{
        elemento.style.display = 'none';
      }
    });
}


//eventos de interacción del usuario
itemForm.addEventListener('submit', recogerDatosFormulario);
clearBoton.addEventListener('click', eliminarTodasTareasPantalla);
itemList.addEventListener('click', eliminarUnaTareaPantalla);
inputfilter.addEventListener('input', filtrarElementosPantalla);


//eventos de ciclo de vida de la webApp
document.addEventListener('DOMContentLoaded', mostrarTareas);















