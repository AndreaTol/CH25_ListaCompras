let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

//Limpiar campos
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.value = "";
    txtNumber.value = "";
});
// Se pone el borde de otro color
btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display = "none";

    let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";
    txtNombre.value = txtNombre.value.trim();
    if (txtNombre.value.length == 0) {
        txtNombre.style.border = "solid thin red";
        lista += "<li>Se debe escribir un nombre válido</li>";
        alertValidaciones.style.display = "block";
    } else {
        txtNombre.style.border = "";
    }

    if (txtNumber.value.length == 0) {
        txtNumber.style.border = "solid thin red";
        lista += "<li>Se debe escribir una cantidad válida</li>";
        alertValidaciones.style.display = "block";
    } else {
        txtNumber.style.border = "";
    }
    lista += "</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
});

// Se borra el contenido en blanco que queda en cantidad a 
//la hora de dar click afuera del box -> text.blur
txtNumber.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();
});

txtNombre.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});