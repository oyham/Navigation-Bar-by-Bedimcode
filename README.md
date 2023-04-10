# Responsive NavBar by [Bedimcode](https://www.youtube.com/@Bedimcode)
## [Tutorial en Youtube](https://youtu.be/k-jwXwpNuXI)
![preview img](/preview.png)
Explicación del CSS y JS aplicado que me pareció interesante compartir. 
---
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
}
```
La propiedad CSS "position: fixed" hace que un elemento se fije en una posición específica en la ventana del navegador, independientemente de si el usuario desplaza la página o no. Cuando se combina con "top: 0" y "left: 0", se fija el elemento en la esquina superior izquierda de la ventana del navegador.

Por lo tanto, aplicar estas propiedades a un elemento de encabezado que contiene una barra de navegación hará que la barra de navegación permanezca visible en la parte superior de la ventana del navegador, incluso cuando el usuario desplaza hacia abajo en la página. Esto es útil para mantener la navegación accesible en todo momento, sin importar dónde se encuentre el usuario en la página.

```css
.nav__logo{
  transition: color .3s;
}
```
La propiedad CSS "transition" se utiliza para crear una transición suave entre dos estados diferentes de un elemento (por ejemplo, un cambio de color, tamaño o posición).

En este caso, la regla CSS ".nav__logo {transition: color .3s;}" establece una transición de color de 0.3 segundos para el elemento con la clase ".nav__logo". Esto significa que si el color de fondo, el color del texto o cualquier otra propiedad de color del elemento cambia, el cambio de color se realizará suavemente en un período de 0.3 segundos en lugar de cambiar instantáneamente.

En resumen, la propiedad "transition: color .3s" significa que cualquier cambio de color en el elemento .nav__logo tendrá una transición de 0.3 segundos de duración.

```css
.nav__toggle-menu,
.nav__toggle-close{
  font-size: 1.25rem;
  color: var(--title-color);
  position: absolute;
  display: grid;
  place-items: center;
  inset: 0;
  cursor: pointer;
  transition: opacity .1s, transform .4s;
}
```
"position: absolute": establece la posición de los elementos en relación con su primer elemento contenedor posicionado.

"display: grid": establece un contenedor de tipo cuadrícula para los elementos y sus elementos secundarios.

"place-items: center": coloca los elementos secundarios en el centro del contenedor.

"inset: 0": establece el desplazamiento de los elementos secundarios desde todos los lados del contenedor en 0.

"transition: opacity .1s, transform .4s": establece una transición de animación para la opacidad y la transformación de los elementos secundarios. La propiedad "opacity" controla la transparencia del elemento y se animará durante 0.1 segundos, mientras que la propiedad "transform" controla las transformaciones del elemento y se animará durante 0.4 segundos.

En resumen, estas reglas de estilo colocarán los elementos ".nav__toggle-menu" y ".nav__toggle-close" en el centro del contenedor y les aplicarán una transición de animación suave cuando se realice cualquier cambio en la opacidad o en las transformaciones. Además, la propiedad "position: absolute" los posicionará de manera absoluta dentro de su contenedor, lo que les permitirá superponerse sobre otros elementos en el diseño de la página web.

```css
 .nav__menu{
    background-color: var(--body-color);
    position: absolute;
    left: 0;
    top: 2.5rem;
    width: 100%;
    height: calc(100vh - 3.5rem);
    overflow: auto;
    padding-block: 1.5rem 4rem;
    pointer-events: none;
    opacity: 0;
    transition: top .4s, opacity .3s;
  }
```
position: absolute;: Establece la posición del elemento como absoluta, es decir, se posicionará en relación con su elemento padre más cercano que tenga una posición relativa o absoluta establecida.

left: 0;: Establece la distancia del borde izquierdo del elemento desde el borde izquierdo del elemento padre más cercano que tenga una posición relativa o absoluta establecida.

top: 2.5rem;: Establece la distancia del borde superior del elemento desde el borde superior del elemento padre más cercano que tenga una posición relativa o absoluta establecida. En este caso, el elemento se posicionará a 2.5rem de la parte superior de su elemento padre.

width: 100%;: Establece el ancho del elemento como el 100% del ancho de su elemento padre.

height: calc(100vh - 3.5rem);: Establece la altura del elemento como la altura total de la ventana del navegador (100vh) menos 3.5rem. La función "calc" permite realizar cálculos matemáticos dentro de la propiedad CSS.

padding-block: 1.5rem 4rem;: Establece el relleno (padding) del elemento en la dirección "block", es decir, en la dirección vertical. El valor "1.5rem" se aplica al relleno superior e inferior del elemento, mientras que el valor "4rem" se aplica al relleno izquierdo y derecho.

pointer-events: none;: Desactiva la detección de eventos del mouse en el elemento y sus descendientes. Esto significa que el elemento no responderá a los clics del mouse u otros eventos similares.

transition: top .4s, opacity .3s;: Establece una transición animada para las propiedades "top" (cambio en la posición vertical del elemento) y "opacity" (cambio en la opacidad del elemento) con una duración de 0.4 segundos y 0.3 segundos, respectivamente. Esto permite que los cambios en estas propiedades se animen suavemente en lugar de cambiar bruscamente.

```css
# Show icon 
.show-icon .nav__toggle-menu{
  opacity: 0;
  transform: rotate(90deg);
}

.show-icon .nav__toggle-close{
  opacity: 1;
  transform: rotate(90deg);
}
```
Este código CSS establece que cuando el elemento tiene ambas clases .show-icon y .nav__toggle-menu, se aplicarán las siguientes propiedades:

La propiedad opacity se establece en 0, lo que significa que el elemento será completamente transparente.
La propiedad transform se establece en rotate(90deg), lo que significa que el elemento se rotará 90 grados.
En otras palabras, cuando la clase .show-icon se aplica al elemento que tiene la clase .nav__toggle-menu, el elemento se volverá invisible y se rotará 90 grados.

### Javascript
```js
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu');

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle', 'nav-menu')
```
Este es un código JavaScript que define una función llamada showMenu. Esta función toma dos parámetros: toggleId y navId.

El propósito de esta función es alternar un menú de navegación, encendiendo y apagando, cuando el usuario hace clic en un icono específico. El parámetro toggleId es el identificador del icono que activará o desactivará el menú, mientras que navId es el identificador del menú de navegación en sí.

Dentro de la función, se obtienen los elementos HTML correspondientes a los identificadores proporcionados utilizando document.getElementById. Luego, se agrega un event listener al elemento toggle, que se activará cuando el usuario haga clic en él. Cuando se hace clic en toggle, se agrega o se elimina la clase CSS show-menu del elemento nav, lo que hará que se muestre u oculte el menú de navegación. Además, se agrega o elimina la clase CSS show-icon del elemento toggle, lo que cambiará el icono para indicar si el menú está activado o desactivado.

```js
const toggleItem = (item) => {
    const dropdownContainer = item.querySelector('.dropdown__container')

    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

dropdownItems.forEach((item) => {
    const dropdownButtons = item.querySelectorAll('.dropdown__button');

    dropdownButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const showDropdwon = document.querySelector('.show-dropdown')

            const item = button.closest('.dropdown__item');
            toggleItem(item);

            if (showDropdwon && showDropdwon != item) {
                toggleItem(showDropdwon)
            }
        });
    });
})
```
Primero, se define una función llamada toggleItem. Esta función toma un parámetro item, que es el elemento HTML correspondiente a un elemento del menú desplegable.

Dentro de la función, se obtiene el contenedor del menú desplegable y se comprueba si el elemento item ya tiene la clase CSS show-dropdown. Si la tiene, se elimina la clase y se establece la altura del contenedor en su valor por defecto. Si no la tiene, se establece la altura máxima para el contenedor y se añade la clase show-dropdown al elemento item.

Luego, se seleccionan todos los elementos del menú desplegable utilizando querySelectorAll, y se les añade un event listener al hacer clic en el botón correspondiente. Cuando se hace clic en un botón, se ejecuta la función toggleItem pasando el elemento padre correspondiente, que es el elemento item. Además, si hay algún otro elemento en el menú desplegable que ya tiene la clase show-dropdown, se le quita la clase y se establece su altura en su valor por defecto. Esto asegura que sólo haya un elemento del menú desplegable abierto a la vez.

En resumen, este código permite que los elementos de un menú desplegable se abran y cierren cuando se hace clic en sus botones correspondientes, y asegura que sólo un elemento se abra a la vez.

```js
const mediaQuery = matchMedia('(min-width: 1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown__container');

const removeStyle = () => {
    if (mediaQuery.matches) {
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style')
        })

        dropdownItems.forEach((e) => {
            e.classList.remove('show-dropdown')
        })
    }
}
addEventListener('resize', removeStyle)
```
Este es un código JavaScript que se encarga de eliminar estilos y clases de un menú desplegable cuando se cambia el tamaño de la ventana del navegador.

Primero, se define un objeto matchMedia que se utiliza para comprobar si se cumple una determinada condición en la pantalla del usuario. En este caso, se está comprobando si la pantalla tiene un ancho mínimo de 1118px.

A continuación, se seleccionan todos los elementos con la clase CSS dropdown__container. Estos elementos son los contenedores de los menús desplegables.

Se define una función llamada removeStyle, que se encarga de eliminar estilos y clases del menú desplegable cuando se cambia el tamaño de la ventana del navegador. Si se cumple la condición de la media query (ancho mínimo de 1118px), entonces se eliminan los estilos de altura de los contenedores de menús desplegables y se elimina la clase show-dropdown de los elementos de menú desplegable. Esto asegura que el menú desplegable se restablezca a su estado original en pantallas más grandes.

Por último, se añade un event listener que escucha el evento resize de la ventana del navegador. Cuando se produce este evento, se ejecuta la función removeStyle. Esto asegura que el menú desplegable se restablezca automáticamente a su estado original cuando el usuario cambia el tamaño de la ventana del navegador.


# CSS Media querys
```css
@media screen and (max-width: 300px) {
  .dropdown__group {
    padding-left: 1.5rem;
  }
}
```
Este código CSS utiliza una media query para aplicar un estilo a un elemento con la clase CSS .dropdown__group cuando el ancho de la pantalla del usuario es menor o igual a 300px.

La media query se define utilizando la regla @media de CSS, que permite definir estilos para diferentes condiciones de visualización. En este caso, la condición es screen and (max-width: 300px), lo que significa que se aplicarán los estilos definidos en el bloque de código CSS que sigue a continuación solo cuando la pantalla sea de tipo "screen" y su ancho máximo sea de 300px.

Dentro del bloque de código CSS que sigue a la media query, se define una regla para el elemento con la clase CSS .dropdown__group. En este caso, se está estableciendo el estilo padding-left en 1.5rem, lo que significa que se agregará un espacio en blanco a la izquierda del elemento. Esto puede ser útil para crear un margen visual entre el elemento y otros elementos cercanos en pantallas más pequeñas.
```css
@media screen and (min-width: 1118px)
```
Este código CSS utiliza una media query para aplicar un estilo a los elementos que cumplan la condición de tener un ancho de pantalla mayor o igual a 1118px.
```css
.nav {
    height: calc(var(--header-height) + 2rem);
    display: flex;
    justify-content: space-between;
  }

  .nav__toggle {
    display: none;
  }

  .nav__list {
    display: flex;
    column-gap: 3rem;
    height: 100%;
  }

  .nav li {
    display: flex;
  }

  .nav__link {
    padding: 0;
  }

  .nav__link:hover {
    background-color: initial;
  }
```
.nav define el estilo general para el contenedor del menú de navegación. Aquí se define que la altura del contenedor es igual a la altura del encabezado más 2 rem (una unidad de medida en CSS), y que los elementos dentro del contenedor deben estar dispuestos en una distribución flexible (flex). La propiedad justify-content establece que los elementos deben estar separados por igual en el eje horizontal.

.nav__toggle oculta el botón de alternar el menú (toggle button).

.nav__list establece que los elementos del menú de navegación se deben mostrar en una fila con un espacio de separación de 3 rem entre ellos, y que su altura debe ser del 100% del contenedor.

.nav li establece que los elementos de la lista del menú de navegación se deben mostrar en una fila, utilizando una disposición flexible.

.nav__link establece que los enlaces del menú de navegación no deben tener ningún relleno.

.nav__link:hover establece que al pasar el cursor sobre los enlaces del menú de navegación, no se debe agregar un color de fondo adicional.
```css
.dropdown__container {
    height: max-content;
    position: absolute;
    left: 0;
    right: 0;
    top: 6.5rem;
    background-color: var(--body-color);
    box-shadow: 0 6px 8px hsla(220, 68%, 12%, .05);
    pointer-events: none;
    opacity: 0;
    transition: top .4s, opacity .3s;
  }
```
.dropdown__container establece que la altura del contenedor debe ser igual al contenido máximo que se encuentra dentro del mismo, utilizando la propiedad height: max-content.

position: absolute establece que el elemento debe estar posicionado de manera absoluta en relación al elemento primario más cercano que tenga una posición relativa establecida.

left: 0; right: 0; establece que el elemento debe abarcar todo el ancho disponible de su elemento primario.

top: 6.5rem; establece que el elemento debe estar posicionado 6.5 rem (una unidad de medida en CSS) debajo del elemento primario.

background-color: var(--body-color); establece el color de fondo del contenedor.

box-shadow: 0 6px 8px hsla(220, 68%, 12%, .05); agrega una sombra alrededor del contenedor.

pointer-events: none; establece que el elemento no debe responder a eventos del puntero, como clics o movimientos.

opacity: 0; establece que el elemento debe estar inicialmente oculto.

transition: top .4s, opacity .3s; establece una transición para las propiedades de top y opacity, con duraciones de 0.4s y 0.3s, respectivamente. Esto permite que el elemento se muestre y se oculte con una animación suave.

```css
.dropdown__item:hover > .dropdown__container{
    top: 5.5rem;
    opacity: 1;
    pointer-events: initial;
    cursor: initial;
  }
```
.dropdown__item:hover > .dropdown__container indica que los estilos se aplicarán a un elemento con la clase "dropdown__container" que sea hijo directo de un elemento con la clase "dropdown__item" cuando el cursor del mouse se coloque sobre él (cuando está en estado de "hover").

Luego, las siguientes líneas especifican los estilos que se aplicarán:

top: 5.5rem; establece la distancia desde la parte superior del elemento padre hasta la parte superior del elemento con la clase "dropdown__container" cuando se aplica el efecto "hover".
opacity: 1; establece la opacidad del elemento con la clase "dropdown__container" cuando se aplica el efecto "hover" en 100% (totalmente visible).
pointer-events: initial; restablece el comportamiento predeterminado de eventos de puntero para permitir que el elemento sea clickeable.
cursor: initial; restablece el cursor predeterminado del puntero al valor predeterminado del navegador.

---
Corrección de error CSS en la clase .nav__toggle. 