//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

function changeColor() {
    // 3. La función debe mostrar por consola "Has hecho click en el botón"
    console.log('Me has hecho click!');

    // Cambiad el color del tag 'body' a verde
    // Acordaos que propiedad del objeto teneis que usar para cambiar un estilo en línea 19.35 corregir


// Calcular un índice aleatorio de este array y usarlo para obtener el color (Math.random()): 19.46
document.querySelector('body').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

}


// 1. Recuperar el elemento del DOM mediante el uso de querySelector (seguid el ejemplo de clase)
const btn = document.querySelector('.btn');

// 2. Asociar el evento 'click' al botón, para que ejecute una función
btn.onclick = changeColor;






