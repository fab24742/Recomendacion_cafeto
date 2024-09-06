// Datos de los cafés peruanos
const cafes = [
    {
        zona: "Norte (Cajamarca)",
        altura: "1500 - 1800 msnm",
        notas: "Chocolate y nueces",
        acidez: "media",
        recomendacion: "Un café de cuerpo completo con notas a chocolate, ideal para disfrutar en las mañanas."
    },
    {
        zona: "Centro (Junín)",
        altura: "1200 - 1700 msnm",
        notas: "Frutas cítricas",
        acidez: "alta",
        recomendacion: "Perfecto para aquellos que buscan una acidez brillante y sabores afrutados, ideal para las tardes."
    },
    {
        zona: "Sur (Cusco)",
        altura: "1600 - 2000 msnm",
        notas: "Frutas rojas y flores",
        acidez: "media",
        recomendacion: "Un café balanceado con toques florales, ideal para acompañar momentos relajantes."
    }
];

// Función para hacer la recomendación basada en las respuestas
document.getElementById("coffeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener las respuestas del formulario
    const momento = document.querySelector('input[name="momento"]:checked').value;
    const sabor = document.querySelector('input[name="sabor"]:checked').value;
    const acidez = document.querySelector('input[name="acidez"]:checked').value;

    // Filtrar las recomendaciones basadas en el sabor y la acidez
    const cafeRecomendado = cafes.find(cafe => cafe.notas.includes(sabor) && cafe.acidez === acidez);

    // Mostrar la recomendación
    const resultado = document.getElementById("recomendacion");
    if (cafeRecomendado) {
        resultado.innerHTML = `<strong>Zona:</strong> ${cafeRecomendado.zona} <br>
                               <strong>Altura:</strong> ${cafeRecomendado.altura} <br>
                               <strong>Notas:</strong> ${cafeRecomendado.notas} <br>
                               ${cafeRecomendado.recomendacion}`;
    } else {
        resultado.innerHTML = "No encontramos una recomendación exacta, pero estamos seguros de que disfrutarás de cualquier café peruano.";
    }

    document.getElementById("resultados").style.display = "block";
});
