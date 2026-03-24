document.getElementById("btn-restar").addEventListener("click", () => {
  // Guardar valores no JSON (objeto)
  operacion.valorA = Number(document.getElementById("num1").value);
  operacion.valorB = Number(document.getElementById("num2").value);

  operacion.tipo = "resta";
  operacion.total = operacion.valorA - operacion.valorB;

  console.log("RESTA:", operacion); // JSON na consola

  document.getElementById("resultado").textContent =
    "Resultado: " + operacion.total;

  // Guardar no array (historial de objetos JSON)
  historial.push({
    valorA: operacion.valorA,
    valorB: operacion.valorB,
    tipo: operacion.tipo,
    total: operacion.total
  });
});