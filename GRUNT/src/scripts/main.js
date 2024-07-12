document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form-sorteador")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Previne o comportamento padrão do formulário

      let numeroMax = document.getElementById("numero-max").value;
      numeroMax = parseInt(numeroMax);

      if (isNaN(numeroMax) || numeroMax <= 0) {
        alert("Por favor, insira um número válido.");
        return;
      }

      let numeroRandom = Math.floor(Math.random() * numeroMax) + 1; // Gera um número inteiro entre 1 e numeroMax
      alert(numeroRandom);
    });
});
