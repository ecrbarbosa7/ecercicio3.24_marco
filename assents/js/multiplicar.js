document.getElementById("btn-multi").addEventListener("click", () => {
  operacion.valorA = Number(document.getElementById("num1").value);
  operacion.valorB = Number(document.getElementById("num2").value);

  operacion.tipo = "multiplicacion";
  operacion.total = operacion.valorA * operacion.valorB;

  console.log("MULTIPLICACION:", operacion); // JSON

  document.getElementById("resultado").textContent =
    "Resultado: " + operacion.total;

  historial.push({
    valorA: operacion.valorA,
    valorB: operacion.valorB,
    tipo: operacion.tipo,
    total: operacion.total
  });

  // 👇 ver array completo de JSONs
  console.log("Historial:", historial);
});