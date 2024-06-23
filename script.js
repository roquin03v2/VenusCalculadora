function calcularBeneficios() {
  // Obtener los valores ingresados por el usuario
  let cajaActual = parseFloat(document.getElementById('cajaActual').value);
  let cajaAnterior = parseFloat(document.getElementById('cajaAnterior').value);
  let gastosSemana = parseFloat(document.getElementById('gastosSemana').value);
  let ingresosSemana = parseFloat(document.getElementById('ingresosSemana').value);

  // Calcular beneficios
  let beneficiosSemana = ingresosSemana - gastosSemana;

  // Calcular diferencia entre Caja Actual y Caja Anterior
  let diferenciaCaja = cajaActual - cajaAnterior;

  // Calcular partes de Russo y Moore
  let parteRusso = 0.65 * beneficiosSemana;
  let parteMoore = 0.45 * beneficiosSemana;

  // Determinar si ha habido ganancias o pérdidas en total
  let estadoFinanciero = "";
  if (diferenciaCaja >= beneficiosSemana) {
      estadoFinanciero = "Ganancias";
  } else {
      estadoFinanciero = "Pérdidas";
  }

  // Mostrar resultados en la interfaz
  mostrarResultados(beneficiosSemana, diferenciaCaja, parteRusso, parteMoore, estadoFinanciero);
}

function mostrarResultados(beneficios, diferenciaCaja, parteRusso, parteMoore, estadoFinanciero) {
  let resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
      <p>Beneficios de la semana: ${beneficios.toFixed(2)}</p>
      <p>Diferencia entre Caja Actual y Caja Anterior: ${diferenciaCaja.toFixed(2)}</p>
      <p>Parte de Russo (65%): ${parteRusso.toFixed(2)}</p>
      <p>Parte de Moore (45%): ${parteMoore.toFixed(2)}</p>
      <p>Estado financiero: ${estadoFinanciero}</p>
  `;
}
