const btnDividir = document.getElementById("btn-dividir");

btnDividir.addEventListener("click", () => {
    const inputA = document.getElementById("num1").value;
    const inputB = document.getElementById("num2").value;

    operacion.valorA = Number(inputA);
    operacion.valorB = Number(inputB);
    operacion.tipo = "division";

    // evitar divisão por 0
    if (operacion.valorB === 0) {
        document.getElementById("resultado").textContent =
            "Erro: divisão por 0";
        return;
    }

    operacion.total = operacion.valorA / operacion.valorB;

    document.getElementById("resultado").textContent =
        "Resultado: " + operacion.total;

    historial.push({ ...operacion });

    console.log("DIVISÃO:", operacion);
    console.log("Historial:", historial);
});