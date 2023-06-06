
let respuesta

function nombreCompleto() {
    let nombre = prompt("ingrese su nombre")
    let apellido = prompt("ingrese su apellido")
    alert("Bienvenido/a " + nombre + " " + apellido)
}

nombreCompleto()

do {
    respuesta = Number(prompt("¿Que precio desea averiguar? \n1) Notebook\n2) Celular\n3) Tablet\n4 Funda de celular\n5) Salir"))
    if (respuesta == 1) {
        alert("Notebook $150.000")
    } else if (respuesta == 2) {
        alert("Celular $80.000")
    } else if (respuesta == 3) {
        alert("Tablet $50.000")
    } else if (respuesta == 4) {
        alert("Funda de celular $1500")
    } else if (respuesta == 5) {
        alert("Gracias por visitarnos")
    } else {
        alert("Dato incorrecto, vuelva a intentarlo por favor")
    }
} while (respuesta != 5)