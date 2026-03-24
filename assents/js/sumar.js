const btnSumar = document.getElementById("btn-sumar");

btnSumar.addEventListener("click", () => {
  const inputA = document.getElementById("num1").value;
  const inputB = document.getElementById("num2").value;

  operacion.valorA = Number(inputA);
  operacion.valorB = Number(inputB);
  operacion.tipo = "suma";

  operacion.total = operacion.valorA + operacion.valorB;

  document.getElementById("resultado").textContent =
    "Resultado: " + operacion.total;

  historial.push({ ...operacion });

  console.log("Operación:", operacion);
  console.log("Historial:", historial);
});