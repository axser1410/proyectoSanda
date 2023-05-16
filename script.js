const inputNombre = document.getElementById("inputNombre")
const primeraPantalla = document.getElementById("primeraPantalla")
const segundaPantalla = document.getElementById("segundaPantalla")
const input = document.querySelector(".entradaNombre")
const jueces = []
const botondisponible = document.getElementById("ultimo")
let prueba = document.getElementById("prueba")
function ingreso(){
    if (inputNombre.value ==="") {
        prueba.innerHTML=""
        return
    }
    const nombre = inputNombre.value;
    jueces.push(nombre)
    prueba.innerHTML="funciona su nombre es " + nombre
    inputNombre.value = ""  //aqui no me aparecia el placeholder pero era porque  en el .value = "(aqui)" habia un espacio-->""
    console.log(jueces)
    if (jueces.length === 4) {
        juradosListos()
    }
    revisarboton()
}

function juradosListos(){
    prueba.innerHTML = "se inicio la mesa"
    console.log(jueces)
    primeraPantalla.style.display = "none"
    segundaPantalla.style.display = "block"
}

function limpiardatos(){
    if (jueces.value !== []) {
        jueces.length = 0;
        console.log(jueces);
    }
    //ingreso() #tiene un bug que al limpiar datos y si existe algo en el input lo registra en la lista despues de limpiarlo
    revisarboton()
}

function revisarboton(){
    if (jueces.length === 0){
        botondisponible.style.display = "none"
    }
    else{
        botondisponible.style.display = "block"
    }
    
}

function pagina(){
    primeraPantalla.style.display = "block"
    segundaPantalla.style.display = "none"
}
function iniciarPag(){
    revisarboton()
    pagina()
}

function borraruno(){
    jueces.length = jueces.length-1
    console.log(jueces);
    revisarboton()
    ingreso()
}

document.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        ingreso()
    }
})

window.addEventListener("load",iniciarPag() )



