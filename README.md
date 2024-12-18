# ProyectoTransversal
# Proyecto Pescador

Este proyecto es un juego interactivo de pescador donde los jugadores apuestan monedas, siguen un multiplicador y tienen la oportunidad de ganar más monedas. Los jugadores pueden ver un pez moviéndose y un tiburón aparecer, añadiendo emoción al juego.

## Descripción

El juego permite a los usuarios ingresar, retirar y convertir monedas para apostar. A medida que el jugador juega, el multiplicador crece, y si decide retirar en el momento adecuado, gana monedas. El objetivo del juego es ganar la mayor cantidad de monedas posible sin retirar demasiado pronto.

### Funcionalidades:
- **Multiplicador Dinámico**: Un multiplicador de apuestas que aumenta a medida que el jugador sigue jugando.
- **Animaciones**: El pez y el tiburón tienen animaciones de movimiento.
- **Modales**: El proyecto incluye varios modales como el de bienvenida, el de ganar monedas, y los de ingresar/retirar monedas.
- **Monedas Virtuales**: Los jugadores pueden gestionar sus monedas virtuales para hacer apuestas y ganar más.

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **HTML**: Estructura básica del juego y la interfaz.
- **CSS**: Estilos y animaciones para la interfaz.
- **JavaScript**: Lógica del juego y manipulación de elementos interactivos.
- **jQuery**: Librería para facilitar la manipulación del DOM.
- **Audio**: Música de fondo para una mejor experiencia del usuario.

## Instalación

Sigue estos pasos para clonar el proyecto y hacerlo funcionar en tu máquina local.

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu-usuario/pescador.git
    ```

2. Asegúrate de tener un servidor local (como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en Visual Studio Code o cualquier otro que prefieras) para ejecutar el proyecto correctamente.

3. Una vez que tengas el servidor funcionando, abre el archivo `index.html` en tu navegador.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:
pescador/ │ ├── assets/ │ └── imgDino/ # Imágenes y recursos del juego │ ├── fondoAnimado.gif # Fondo animado del juego │ ├── pezAnimado.gif # Animación del pez │ ├── tiburon.png # Imagen del tiburón │ └── ... # Otros recursos como iconos y música │ ├── css/ │ └── cssDino/ # Archivos CSS para los estilos │ └── dino.css # Estilos principales del juego │ ├── js/ │ └── jsDino/ # Archivos JavaScript │ └── funcionalidad.js # Lógica y funcionalidad del juego │ ├── index.html # Página principal del juego └── README.md # Este archivo

## Uso

1. **Iniciar el Juego**: Al presionar el botón "Jugar", el multiplicador comienza a aumentar, y el pez se mueve. El tiburón aparece después de cierto tiempo.
2. **Apostar**: Los jugadores pueden subir o bajar su apuesta utilizando los botones correspondientes.
3. **Retirar Dinero**: Los jugadores pueden retirar sus monedas en cualquier momento. Si esperan lo suficiente, pueden ganar un multiplicador más alto, pero si se arriesgan demasiado, pueden perder la oportunidad.
4. **Monedas**: Los jugadores pueden convertir dinero en monedas para jugar o retirar monedas de su saldo.

## Modales

El juego tiene varios modales interactivos:

- **Modal de Bienvenida**: Instrucciones sobre cómo jugar.
- **Modal Ganador**: Muestra un mensaje de felicitaciones con las monedas ganadas.
- **Modal Ingresar Monedas**: Permite a los jugadores convertir dinero a monedas para apostar.
- **Modal Retirar Monedas**: Permite a los jugadores retirar las monedas ganadas.

## Personalización

Puedes personalizar el juego cambiando los recursos dentro de la carpeta `assets/imgDino/`, como imágenes y música. También puedes modificar la funcionalidad de la lógica de juego en `js/jsDino/funcionalidad.js`.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas colaborar en este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b nueva-rama`).
3. Realiza tus cambios.
4. Realiza un commit de tus cambios (`git commit -am 'Descripción de cambios'`).
5. Haz push a tu rama (`git push origin nueva-rama`).
6. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes ver el archivo `LICENSE` para más detalles.

---

¡Gracias por visitar el proyecto! Si tienes alguna pregunta o sugerencia, no dudes en abrir un problema o enviar una solicitud de extracción.
