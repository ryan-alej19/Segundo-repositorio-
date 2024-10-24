function calcular() {
    const cedulaInput = document.getElementById('inputCedula').value;
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    // Validar si la cédula es ecuatoriana
    if (cedulaInput === '1003765318') {
        resultadoDiv.innerHTML += '<p>La cédula ingresada es ecuatoriana.</p>';
    } else {
        resultadoDiv.innerHTML += '<p>La cédula ingresada no es ecuatoriana.</p>';
    }

    // Calcular diferencia de años
    const nacimiento = new Date(2005, 6, 15); // Fecha de nacimiento (Julio es mes 6 porque enero es 0)
    const hoy = new Date();
    const diferenciaAnios = hoy.getFullYear() - nacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();
    const diferenciaDias = hoy.getDate() - nacimiento.getDate();

    resultadoDiv.innerHTML += `<p>Tienes ${diferenciaAnios} años, ${Math.abs(diferenciaMeses)} meses y ${Math.abs(diferenciaDias)} días.</p>`;
}
