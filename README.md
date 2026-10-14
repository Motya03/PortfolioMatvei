# Portafolio Matvei

Portafolio de videojuegos editable, en español e inglés. Incluye LOBSTAR!, Smack That Rooster y una plantilla para añadir más juegos.

## Abrir

Abre `index.html` en el navegador. No requiere instalación ni servidor.
Para compartirlo, entrega la carpeta completa o el ZIP: las imágenes, vídeos y PDF son locales.

## Estructura

```text
index.html
case-studies/
  lobstar.html
  smack-that-rooster.html
  nuevo-juego.html
assets/
  css/styles.css
  js/main.js
  img/                    Portadas y avatar
  media/                  Vídeos de los dos juegos
  docs/                   PDF de los dos juegos
templates/
  tarjeta-juego.html      Bloque para copiar una tarjeta
  ficha-juego.txt         Bloque HTML para copiar el contenido de una ficha
README.md
```

Cada juego tiene su propio HTML. Los estilos y controles se comparten; el contenido de las fichas ya no se repite en JavaScript.

## Personalizar

- Edita el nombre, descripción y contenido en el HTML correspondiente.
- En los textos bilingües, cambia `data-text-es` y `data-text-en`. El texto entre las etiquetas sirve como respaldo cuando JavaScript está desactivado.
- Cambia `src` y `alt` de las imágenes, `src` y `poster` de los vídeos y `href` de los enlaces.
- Sustituye `assets/img/profile-placeholder.svg` por la foto o avatar de Matvei y actualiza su ruta en `index.html`.
- Completa el contacto en `index.html` y el rol de Matvei en cada juego. Esos datos siguen pendientes; no se han inventado.
- `assets/js/main.js` contiene solo idioma, contador, año y animación. No hace falta editarlo para añadir juegos.

## Añadir un juego

1. Duplica `case-studies/nuevo-juego.html` dentro de la misma carpeta y ponle un nombre, por ejemplo `mi-juego.html`.
2. Completa sus textos ES/EN y su portada. Puedes usar el bloque de `templates/ficha-juego.txt` para sustituir el contenido principal de esa página.
3. Copia `templates/tarjeta-juego.html` dentro de `<div class="cards">` del apartado Proyectos en `index.html`, o duplica la tarjeta delimitada por los comentarios.
4. Cambia el enlace de la nueva tarjeta a `case-studies/mi-juego.html` y completa nombre, descripción y portada.

El contador de Juegos se actualiza al abrir la página. No hay que registrar proyectos en JavaScript.
Para añadir un vídeo o un enlace a PDF, copia el bloque correspondiente de `lobstar.html` y cambia las rutas por las de tu juego. Agrega únicamente enlaces y archivos que existan.

## Materiales y créditos

La estructura original y los materiales de los juegos proceden del portafolio de Santiago Cardozo Botero:

- https://scardozoprogramming.github.io/
- https://scardozoprogramming.github.io/Videogames/Lobstar/lobstar.html
- https://scardozoprogramming.github.io/Videogames/SmackThatRooster/smackthatrooster.html

Matvei participó en ambos equipos según la información facilitada por el propietario. Las tareas individuales de Santiago no se atribuyen a Matvei.
