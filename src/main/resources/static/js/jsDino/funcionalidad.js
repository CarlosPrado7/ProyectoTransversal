var saldoJugador = 0;
var usuario = {};

recuperaSaldo();

function recuperaSaldo () {
  $.ajax({
      type:"GET",
      url: "/usuario/recuperarSaldo",
      success: function(response){
          usuario = response;
          saldoJugador = usuario.saldo;
          document.getElementById("cantidad").innerHTML = saldoJugador;
      },
      error: function(error) {
          console.error("Error en la solicitud AJAX (GET):", error);
      }
  })     
}

function actualizarSaldo () {

  var formData = {
    dni: usuario.dni,
    saldo: saldoJugador
  }

  $.ajax({
    type:"POST",
    url: "/usuario/actualizarSaldo",
    contentType: "application/json",
    data: JSON.stringify(formData),
    success: function(response){
        console.log("Saldo actualizado");
        document.getElementById("cantidad").innerHTML = saldoJugador;
    },
    error: function(error){
        console.log("Error" + error);
    }
  })

}

//Reloj 
function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    const tiempo = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').textContent = tiempo;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();

//Menu de la pagina
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('open'); 
  
  if (menu.classList.contains('open')) {
    menuIcon.src = '/assets/imgDino/cerrar.png'; 
  } else {
    menuIcon.src = '/assets/imgDino/menu.png'; 
  }
});

const infoImage = document.getElementById("info");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("closeButton");

infoImage.addEventListener("click", () => {
  modal.style.display = "flex"; 
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none"; 
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
//Blanco y negro de la pagina
document.getElementById("blanco-negro").addEventListener("click", function() {
  var body = document.body;

  if (body.style.filter === "grayscale(100%)") {
      body.style.filter = "";
  } else {
      body.style.filter = "grayscale(100%)";
  }
});

//Pantalla completa de la aplicacion
const pantallaCompleta = document.getElementById('pantallaCompleta');

pantallaCompleta.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(`Error al intentar entrar en pantalla completa: ${err.message}`);
    });
  } else {
    document.exitFullscreen().catch((err) => {
      console.error(`Error al intentar salir de pantalla completa: ${err.message}`);
    });
  }
});

//Musica de la pagina
 const musica = document.getElementById('musica');
 const controlVolumen = document.getElementById('controlVolumen');

 let musicaActiva = false;

 controlVolumen.addEventListener('click', () => {
     if (!musicaActiva) {
         musica.play();
         controlVolumen.src = '/assets/imgDino/silencio.png'; 
     } else {
         musica.pause();
         controlVolumen.src = '/assets/imgDino/volumen.png'; 
     }
     
     musicaActiva = !musicaActiva;
 });

var pSaldo = document.getElementById('saldo'); 
var pMonedas = document.getElementById('monedas'); 
let totalMonedas = 0; 

pMonedas.textContent = totalMonedas; 

//Modal ingresar dinero para convertir a monedas
const modalIngresar = document.getElementById('modalIngresar');
const btnAbrirModal = document.getElementById('ingresarMonedas');
const btnCerrarModal = document.getElementById('cerrarIngresar');
const btnConvertir = document.getElementById('convertirMonedas');
const inputIngresar = document.getElementById('inputIngresar');

btnAbrirModal.addEventListener('click', () => {
    modalIngresar.style.display = 'block';
});

btnCerrarModal.addEventListener('click', () => {
    modalIngresar.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modalIngresar) {
        modalIngresar.style.display = 'none';
    }
});

// Función para convertir saldo en monedas
btnConvertir.addEventListener('click', () => {
  const valorIngresado = parseFloat(inputIngresar.value);

  if (isNaN(valorIngresado) || valorIngresado <= 0) {
      alert('Por favor, ingresa un valor válido.');
      return;
  }

  if (saldoJugador < valorIngresado) {
      alert('No tienes suficiente saldo.');
      return;
  }

  const monedasNuevas = valorIngresado * 200;

  saldoJugador -= valorIngresado;

  actualizarSaldo();

  const saldoActualMonedas = parseInt(pMonedas.textContent) || 0;
  totalMonedas = saldoActualMonedas + monedasNuevas
  pMonedas.textContent = totalMonedas;

  modalIngresar.style.display = 'none';
});

// Referencias para el modal de retiro
const modalRetirar = document.getElementById('modalRetirar');
const btnAbrirModalRetirar = document.getElementById('abrirModalRetirar');
const btnCerrarModalRetirar = document.getElementById('cerrarModalRetirar');
const btnRealizarRetiro = document.getElementById('realizarRetiro');
const inputCantidadRetirar = document.getElementById('inputCantidadRetirar');

btnAbrirModalRetirar.addEventListener('click', () => {
    modalRetirar.style.display = 'block';
});

btnCerrarModalRetirar.addEventListener('click', () => {
    modalRetirar.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modalRetirar) {
        modalRetirar.style.display = 'none';
    }
});

// Función para manejar el retiro de monedas
btnRealizarRetiro.addEventListener('click', () => {
  const monedasIngresadas = parseInt(inputCantidadRetirar.value);

  if (isNaN(monedasIngresadas) || monedasIngresadas <= 0) {
      alert('Por favor, ingresa un número de monedas válido.');
      return;
  }

  const saldoActualMonedas = parseInt(pMonedas.textContent) || 0;
  if (saldoActualMonedas < monedasIngresadas) {
      alert('No tienes suficientes monedas.');
      return;
  }

  const saldoConvertido = monedasIngresadas / 200;

  saldoJugador += saldoConvertido;

  actualizarSaldo();

  totalMonedas = saldoActualMonedas - monedasIngresadas;
  pMonedas.textContent = totalMonedas;

  modalRetirar.style.display = 'none';
});

//Apuesta

  let apuestaActual = 0; 

  const apuestaDisplay = document.getElementById('apostado');
  const btnSubir = document.getElementById('subirApuesta'); 
  const btnBajar = document.getElementById('bajarApuesta'); 
  const btnJugar = document.getElementById('jugar'); 

  // Función para actualizar la visualización
  function actualizarDisplay() {
      apuestaDisplay.innerHTML = apuestaActual; 
      pMonedas.innerHTML = totalMonedas; 
  }

  // Manejar subir apuesta
  btnSubir.addEventListener('click', () => {
      if (totalMonedas > 0) {
          apuestaActual += 10;
          totalMonedas -= 10; 
          actualizarDisplay(); 
      } else {
          alert("No tienes suficientes monedas para aumentar la apuesta.");
      }
  });

  // Manejar bajar apuesta
  btnBajar.addEventListener('click', () => {
      if (apuestaActual > 0) {
          apuestaActual -= 10;
          pMonedas += 10; 
          actualizarDisplay(); 
      } else {
          alert("La apuesta ya está en 0.");
      }
  });

  const pezAnimado = document.getElementById('pez');
  let jugando = false;

// Elementos del DOM
const multiplicadorElement = document.getElementById("multiplicador");
const botonJugar = document.getElementById("jugar");

// Variables del juego
let multiplicador = 1.00;
let velocidad = 100; 
let incremento = 0.01;
let intervalo;

// Función para actualizar el multiplicador con detención aleatoria
function actualizarMultiplicador() {
    if (multiplicador < 10 && apuestaActual > 20) {

        multiplicador = parseFloat((multiplicador + incremento).toFixed(2));
        multiplicadorElement.textContent = `x${multiplicador.toFixed(2)}`;

        const probabilidad = Math.random(); 

        if (probabilidad < 0.03) {
            mostrarImagenTiburon();
            clearTimeout(intervalo);
            reiniciar();
            return;
        }

        // Continuar actualizando el multiplicador
        intervalo = setTimeout(actualizarMultiplicador, velocidad);

    } else if(apuestaActual == 0 && apuestaActual == 10) {
        window.alert("Introduce una apuesta");
    }
}

function mostrarImagenTiburon () {

  const contenedor = document.querySelector('.contenedor');

  if(contenedor){
    contenedor.classList.add('mostrar-tiburon');
  }

}

function reiniciar () {

  const contenedor = document.querySelector('.contenedor');

  if(contenedor){
    setTimeout(() => {
      contenedor.classList.remove('mostrar-tiburon');
      document.body.style.backgroundImage = "url('/assets/imgDino/fondo.jpeg')";
      pezAnimado.src = "/assets/imgDino/PEZ.png";
      btnJugar.src = "/assets/imgDino/jugar.png";
      apuestaActual = 0;
    },2000);
  }

}

// Evento para iniciar al hacer clic en el botón
botonJugar.addEventListener("click", () => {

  if(botonJugar.src.split('/').pop() === "jugar.png") {
    //Cambiar fondo con movimientos y iconos
    document.body.style.backgroundImage = "url('/assets/imgDino/fondoAnimado.gif')";
    pezAnimado.src = "/assets/imgDino/pezAnimado.gif";
    btnJugar.src = "/assets/imgDino/jugando.png";
    
    //Inicia el multi y lo termina
    multiplicador = 1.00; 
    multiplicadorElement.textContent = `x${multiplicador.toFixed(2)}`; 
    clearTimeout(intervalo); 
    actualizarMultiplicador(); 
  }else if(botonJugar.src.split('/').pop() === "jugando.png") {
    reiniciar();
    totalMonedas += apuestaActual * multiplicador;
    pMonedas.innerHTML = totalMonedas;
    clearTimeout(intervalo);
    window.alert("HOLA");
  }

});


