function soma(valor1, valor2){
    return Number(valor1) + Number(valor2);
}

function subtração(valor1, valor2){
    return Number(valor1) - Number(valor2);
}

function multiplicação(valor1, valor2){
    return Number(valor1) * Number(valor2);
}

function division(valor1, valor2){
    return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operation = "";

do {  //usando o 'do...while', já que a primeira vez sempre vamos entrar
	
    operation = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);	
    while (operation != "soma" && operation != "subtração" && operation != "multiplicação" && operation != "divisão" && operation != "sair") {  //enquanto o texto lido for diferente de "soma", "subtração", "multiplicação", "divisão" e "sair", exibir que não foi reconhecido e perguntar novamente
	alert(`Operação não reconhecida!`);
	operation = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    }
	
    if (operation === "sair"){  //se o texto lido for "sair", sair do loop e da calculadora
		break;	
    }
	
    valor1 = prompt(`Insira o primeiro valor:`);
    valor2 = prompt(`Insira o segundo valor:`);
    switch (operation) {
        case 'soma':
          alert(`O resultado da ${operation} é ${soma(valor1, valor2)}`);
          break;
        case 'subtração':
            alert(`O resultado da ${operation} é ${subtração(valor1, valor2)}`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operation} é ${multiplicação(valor1, valor2)}`);
            break;
        case 'divisão':
            alert(`O resultado da ${operation} é ${division(valor1, valor2)}`);
            break;
    }
} while(operation === "soma" || operation === "subtração" || operation === "multiplicação" || operation === "divisão")
alert(`Até a próxima!`);