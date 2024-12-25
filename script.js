function convertToDecimal() {
    const hexInput = document.getElementById('hexInput').value.trim(); // Obtém e limpa o valor do input
    const resultadoElement = document.getElementById('resultado'); // Elemento para mostrar o resultado

    // Regex para verificar se o valor é um hexadecimal válido
    if (/^[0-9A-Fa-f]+$/.test(hexInput)) {
        const decimalValue = parseInt(hexInput, 16); // Converte de hexadecimal para decimal
        resultadoElement.textContent = `${decimalValue}` ; // Exibe o resultado
        resultadoElement.style.color = "rgb(88, 171, 243)"; // Define uma cor para o texto válido

        // Feedback visual no input
        document.getElementById('hexInput').classList.remove('error');
        document.getElementById('hexInput').classList.add('success');

        // Limpa o campo de entrada
        document.getElementById('hexInput').value = "";
    } else {
        // Mensagem de erro
        resultadoElement.textContent = "Por favor, insira um valor hexadecimal válido.";
        resultadoElement.style.color = "red"; // Define uma cor de erro

        // Feedback visual no input
        document.getElementById('hexInput').classList.remove('success');
        document.getElementById('hexInput').classList.add('error');
    }


}



document.getElementById('copyButton').addEventListener('click', () => {
    const resultadoText = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(resultadoText.replace('Resultado: ', ''));
    alert('Resultado copiado!');
});

function playSound() {
    const sound = document.getElementById('clickSound');
    sound.play();
}











