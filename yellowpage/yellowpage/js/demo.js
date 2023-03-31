function showResult(resultId) {
  console.log('resultId:', resultId);

  var resultDiv = document.getElementById("result");
  console.log('resultDiv:', resultDiv);

  // Ocultar todos los resultados
  var results = document.querySelectorAll("[id^='result']");
  console.log('results:', results);

  for (var i = 0; i < results.length; i++) {
    results[i].style.display = "none";
  }

  // Mostrar el resultado seleccionado
  var selectedResult = document.getElementById(resultId);
  console.log('selectedResult:', selectedResult);

  selectedResult.style.display = "block";

  // Copiar el contenido del resultado seleccionado al div del resultado
  resultDiv.innerHTML = selectedResult.innerHTML;
}

let buttons = document.querySelectorAll('.buttonactive');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Eliminar la clase 'active' de todos los botones y restablecer sus estilos
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
      btn.style.backgroundColor = '';
      btn.style.margin = '';
      btn.style.color = '';
    });
    // Agregar la clase 'active' al botón que se ha hecho clic y cambiar sus estilos
    this.classList.add('active');
    this.style.backgroundColor = 'rgb(255 255 255)';
    this.style.margin = '5px 22px';
    this.style.color = 'black';
  });
});
