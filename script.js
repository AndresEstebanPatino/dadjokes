const urlApi = 'https://icanhazdadjoke.com/'

let chiste = document.getElementById('chiste');
let boton = document.getElementById('boton-chiste')

boton.addEventListener('click', imprimirChiste)

function imprimirChiste(){
    const config = {
        headers: {
            Accept: "application/json",
        },
    }
    //get url 
    fetch(urlApi, config)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            chiste.innerHTML = data.joke
            console.log(data)
        } )
    
}

let coche = {
    marca: "Toyota",
    modelo: "2020",
    status: 200
}

console.log(coche.modelo)



