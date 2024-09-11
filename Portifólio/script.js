function executarExercicio(numero) {
    const resultado = document.getElementById(`resultado${numero}`);
    // Adicione o código do exercício aqui, por exemplo:
    if (numero === 1){
        var number = parseInt(prompt("Digite um número:"));

        if(number > 0){
            alert("Seu número é positivo!");
        }else if (number < 0){
            alert("Seu número é negativo");
        }else if (number <= 0){
            alert("Seu número é neutro");
        }
        resultado.textContent = 'Resultado do Exercício 1';
    }else if (numero === 2){
        var idade = parseInt(prompt("Digite sua idade:"));

        if(idade <= 12){
            alert("Você é criança");
        } else if(idade <=17){
            alert("Você é adolescente");
        } else if(idade <= 64){
            alert("Você é adulto");
        } else if(idade > 65){
            alert("Você é idoso");
        }
        resultado.textContent = 'Resultado do Exercício 2';

    }else if (numero === 3){
        var DiaSemana = parseInt(prompt("Digite um número de 1, 2, 3, 4, 5, 6, 7"));

        switch(DiaSemana){
            case 1:
                alert("Domingo");
                break;
            case 2:
                alert("Segunda");
                break;
            case 3:
                alert("Terça");
                break;
            case 4:
                alert("Quarta");
                break;
            case 5:
                alert("Quinta");
                break;
            case 6:
                alert("Sexta");
                break;
            case 7:
                alert("Sábado");
                break;
            default:
                alert("Número não encontrado");
                break;
        }
        resultado.textContent = 'Resultado do Exercício 3';
    }else if (numero === 4){
        for(let i = 0; i <= 10; i++){
            console.log(i);
        }
        resultado.textContent = 'Abra o console para ver o resultado do exercício 4';
    }else if (numero === 5){
        let soma = 0;
        let numero;

        do{
            numero = parseFloat(prompt("Digite um número inteiro (ou 0 para sair):"));
            soma += numero;
        }while(numero !== 0);

        alert("A soma dos números inseridos é:" + soma);
        console.log(soma);

        resultado.textContent = 'Resultado do exercício 5';
    }else if (numero === 6){
        // Gera um número aleatório entre 1 e 10
        const numeroSecreto = Math.floor(Math.random() * 10) + 1;

        let tentativa = 0;

        // Continua pedindo ao usuário para tentar até acertar
        while (tentativa !== numeroSecreto) {
            tentativa = parseInt(prompt("Adivinhe um número entre 1 e 10:"), 10);

            if (tentativa === numeroSecreto) {
                alert("Parabéns! Você acertou!");
            } else {
                alert("Errado! Tente novamente.");
            }
        }
    }else if (numero === 7){
        let numeros = [];

        // Solicita ao usuário que insira 5 números inteiros
        for (let i = 0; i < 5; i++) {
            let numero = parseInt(prompt(`Insira o número inteiro ${i + 1}:`), 10);
            numeros.push(numero);
        }

        // Encontra o maior e o menor número no vetor
        let maiorNumero = Math.max(...numeros);
        let menorNumero = Math.min(...numeros);

        // Exibe o maior e o menor número
        alert(`O maior número inserido é: ${maiorNumero}`);
        alert(`O menor número inserido é: ${menorNumero}`);

        resultado.textContent = 'Resultado do exercício 7';
    }else if (numero === 8){
        function encontrarMedia(numeros) {
                let soma = 0;
                for (let i = 0; i < numeros.length; i++) {
                soma += numeros[i];
                }
                return soma / numeros.length;
            }
          
          let quantidadeNumeros = parseInt(prompt("Quantos números você deseja informar?"));
          let numeros = [];
          
            for (let i = 0; i < quantidadeNumeros; i++) {
                numeros[i] = parseFloat(prompt(`Informe o ${i + 1}º número:`));
            }
          
          let media = encontrarMedia(numeros);
          alert(`A média dos números informados é: ${media}`);

          resultado.textContent = 'Resultado do exercício 8';
    }else if (numero === 9){
        // Vetor de números para percorrer
        let numeros = [3, 10, 7, 18, 2, 15, 1, 9];

        // Valor específico para comparar
        let valorEspecifico = 8;

        // Novo vetor para armazenar números maiores que o valor específico
        let numerosMaiores = [];

        // Percorre o vetor original e verifica cada número
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] > valorEspecifico) {
                numerosMaiores.push(numeros[i]);
            }
        }

        // Exibe o novo vetor com os números maiores que o valor específico
        console.log("Números maiores que " + valorEspecifico + ":", numerosMaiores);

        resultado.textContent = 'Resultado do exercício 9 (abra o console)';
    }else if (numero === 10){
        // Vetor de palavras
        let palavras = ["maçã", "banana", "laranja", "maçã", "uva", "maçã", "banana"];

        // Palavra específica a ser contada
        let palavraEspecifica = "maçã";

        // Inicializa a variável de contagem
        let contagem = 0;

        // Percorre o vetor de palavras e conta as ocorrências da palavra específica
        for (let i = 0; i < palavras.length; i++) {
            if (palavras[i] === palavraEspecifica) {
                contagem++;
            }
        }

        // Exibe o valor da contagem
        console.log(`A palavra "${palavraEspecifica}" aparece ${contagem} vezes no vetor.`);
        resultado.textContent = 'Resultado do exercício 10 (abra o console)';
    }
}