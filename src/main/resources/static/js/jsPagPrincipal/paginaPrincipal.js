var saldoJugador = 0;
var usuario = null;
var inputDineroRetirar = null;
var inputDinero = null;
const guardarDinero = document.getElementById("guardarDinero");
const retirarDinero = document.getElementById("retirarDinero");

function recuperaSaldo () {

    $.ajax({
        type:"GET",
        url: "/usuario/recuperarSaldo",
        success: function(response){
            usuario = response;
            saldoJugador = usuario.saldo;
            document.getElementById("saldo").innerHTML = saldoJugador;
        },
        error: function(error) {
            console.error("Error en la solicitud AJAX (GET):", error);
        }
    })     
}

function sumarSaldo () {

    inputDinero = parseFloat(document.getElementById("inputDinero").value);
    var dni = usuario.dni;
    saldoJugador += inputDinero;

    var formData = {
        dni: dni,
        saldo: saldoJugador
    }

    $.ajax({
        type:"POST",
        url: "/usuario/actualizarSaldo",
        contentType: "application/json",
        data: JSON.stringify(formData),
        success: function(response){
            console.log("Saldo actualizado");
            document.getElementById("saldo").innerHTML = saldoJugador;
        },
        error: function(error){
            console.log("Error" + error);
        }
    })

}

function restarSaldo () {

    inputDineroRetirar = parseFloat(document.getElementById("inputRetirar").value);
    var dni = usuario.dni;
    saldoJugador -= inputDineroRetirar;

    var formData = {
        dni: dni,
        saldo: saldoJugador
    }

    $.ajax({
        type:"POST",
        url: "/usuario/actualizarSaldo",
        contentType: "application/json",
        data: JSON.stringify(formData),
        success: function(response){
            console.log("Saldo actualizado");
            document.getElementById("saldo").innerHTML = saldoJugador;
        },
        error: function(error){
            console.log("Error" + error);
        }
    })

}

guardarDinero.addEventListener("click", sumarSaldo);
retirarDinero.addEventListener("click", restarSaldo);

function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    const tiempo = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').textContent = tiempo;
}

// Actualiza el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Inicia el reloj
actualizarReloj();

document.addEventListener("DOMContentLoaded", function() {
    recuperaSaldo();
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        const items = carousel.querySelector(".carousel-items");
        const points = carousel.querySelectorAll(".punto");
        let currentIndex = 0;

        points.forEach((point, index) => {
            point.addEventListener("click", () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        function updateCarousel() {
            items.style.transform = `translateX(-${currentIndex * 100}%)`;
            points.forEach((point, idx) => {
                point.classList.toggle("activo", idx === currentIndex);
            });
        }

        updateCarousel();
    });
});

//-------------------------------------------SALDO DEL JUEGO--------------------------------------------------------------------
// --------------------------------------- Variables Globales ---------------------------------------
const saldoDisplay = document.getElementById("saldoPagina");
let saldo = 0;

//----------------------------------------Modal Retirar Dinero----------------------------------------
const modalRetirar = document.getElementById("modalRetirar");
const btnRetirar = document.getElementById("retirarDineroSaldo");
const closeModalRetirar = document.getElementById("closeModalRetirar");

// --------------------------------------- Modal Añadir Dinero ---------------------------------------
const modalAniadir = document.getElementById("modalAniadir");
const btnAniadir = document.getElementById("sumarDinero");
const closeModalAniadir = document.getElementById("closeModalAniadir");

// --------------------------------------- Eventos ---------------------------------------

// Mostrar modal de añadir dinero al hacer clic en el icono
btnAniadir.addEventListener("click", () => {
    modalAniadir.style.display = "flex";
});

btnRetirar.addEventListener("click", ()=>{
    modalRetirar.style.display = "flex";
});

// Cerrar modal de añadir dinero
closeModalAniadir.addEventListener("click", () => {
    modalAniadir.style.display = "none";
});

closeModalRetirar.addEventListener("click", () => {
    modalRetirar.style.display = "none";
});

// Cerrar modal si se hace clic fuera de la caja
window.addEventListener("click", (event) => {
    if (event.target === modalAniadir) {
        modalAniadir.style.display = "none";
    }
});

window.addEventListener("click", (event) => {
    if(event.target === modalRetirar){
        modalRetirar.style.display = "none";
    }
});




