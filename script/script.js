const button = document.getElementById("botao");

const testar = () => {
    const inputPeso = document.getElementById("inputPeso").value;
    const inputAltura = document.getElementById("inputAltura").value;

    const nivelImc = document.getElementById("NivelImc");
    const resultadoImc = document.getElementById("resultadoImc");

    Imc = (inputPeso / (inputAltura * inputAltura)).toFixed(3);

    resultadoImc.innerHTML = Imc;

    if (Imc <= 16.9) {
        nivelImc.innerHTML = "muito abaixo do peso!";
    } else if (Imc <= 18.4) {
        nivelImc.innerHTML = "Abaixo do peso!";
    } else if (Imc <= 24.9) {
        nivelImc.innerHTML = "Peso Normal!";
    } else if (Imc <= 29.9) {
        nivelImc.innerHTML = "Acima do Peso!";
    } else if (Imc <= 34.9) {
        nivelImc.innerHTML = "Obesidade grau 1!";
    } else if (Imc <= 40) {
        nivelImc.innerHTML = "Obesidade grau 2!";
    } else if (Imc >= 40.1) {
        nivelImc.innerHTML = "Obesidade grau 3!";
    }

    if (isNaN(Imc)) {
        Imc = "valor inválido";
    }
};

// imc = peso / (altura * altura)

button.addEventListener("click", testar);
