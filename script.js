
        function convertToDecimal() {
            const hexInput = document.getElementById('hexInput').value.trim();
            const resultadoElement = document.getElementById('resultado');

            // Verifica se o valor é um hexadecimal válido
            if (/^[0-9A-Fa-f]+$/.test(hexInput)) {
                const decimalValue = parseInt(hexInput, 16); // Converte de hexadecimal para decimal
                resultadoElement.textContent = `Seu cartão troca de preço bacana: ${decimalValue}`;
            } else {
                resultadoElement.textContent = "Por favor, insira um valor hexadecimal válido.";
            }
        }
