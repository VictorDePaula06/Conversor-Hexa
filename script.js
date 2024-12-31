function convertToDecimal() {
    const hexInput = document.getElementById('hexInput').value.trim(); // Obtém e limpa o valor do input
    const resultadoElement = document.getElementById('resultado'); // Elemento para mostrar o resultado
    const errorSound = document.getElementById('errorSound');  // Referência ao som de erro


    if (/^[0-9A-Fa-f]+$/.test(hexInput)) {
        const decimalValue = parseInt(hexInput, 16); // Converte de hexadecimal para decimal
        resultadoElement.textContent = `Resultado: ${decimalValue}`;

        // Toca o som de sucesso e garante que o som de erro não toque
        if (!successSound.paused) {
            successSound.pause();
            successSound.currentTime = 0; // Reseta o som de sucesso
        }
        successSound.play();  // Toca o som de sucesso

    } else {
        // Se o valor não for válido, mostra a mensagem de erro
        resultadoElement.textContent = "Por favor, insira um valor hexadecimal válido.";

        // Pausa qualquer som que esteja tocando (sucesso ou erro)
        if (!successSound.paused) {
            successSound.pause();
            successSound.currentTime = 0; // Reseta o som de sucesso
        }

        // Toca o som de erro
        if (!errorSound.paused) {
            errorSound.pause();
            errorSound.currentTime = 0; // Reseta o som de erro
        }
        errorSound.play();  // Toca o som de erro
    }
}

function pegarHora() {
    var data = new Date();
    var hora = data.getHours();
    var ano = data.getFullYear();
    var mes = data.getMonth() + 1;
    var dia = data.getDate();

    var horaPay = ano - dia - mes - hora - 3;
    var horaPay2 = ano - dia - mes - hora;

   
    document.getElementById('horaPay').innerHTML = horaPay;
    document.getElementById('horaPay2').innerHTML = horaPay2;
}


// Chama a função 'pegarHora' imediatamente e a cada segundo para atualizar a hora
setInterval(pegarHora, 1000);

document.getElementById('horaPay').addEventListener('click', () => {
    const horaPayText = document.getElementById('horaPay').textContent
    navigator.clipboard.writeText(horaPayText.replace());
    alert('Senha copiada Chefia')

})

document.getElementById('horaPay2').addEventListener('click', () => {
    const horaPay2Text = document.getElementById('horaPay2').textContent
    navigator.clipboard.writeText(horaPay2Text.replace());
    alert('Senha copiada Chefia')

})

document.getElementById('copyButton').addEventListener('click', () => {
    const resultadoText = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(resultadoText.replace('Resultado: ', ''));
    alert('Resultado copiado!');
});

function playSound() {
    const sound = document.getElementById('clickSound');
    sound.play();
}












