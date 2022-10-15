const chosenNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let attempt = "";
let correct = false;

//Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).
//Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.
attempt = prompt("Tente adivinhar o número de 0 a 10");

for(let counter = 0; counter < 2; counter++){
    
    if(attempt<chosenNumber)
    {
        alert("Errado!");
        attempt = prompt(`Tente um número > que ${attempt} e <= 10`); 
    }

    if(attempt>chosenNumber)
    {
        alert("Errado!");
        attempt = prompt(`Tente um número < que ${attempt} e >= 0`); 
    }
    
    
    if(attempt == chosenNumber){
        alert(`Parabéns, você acertou! O número era ${chosenNumber}.`);
        correct = true;
        break;
    }

//No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
    
}
if(!correct){
    alert(`Infelizmente, você não acertou. O número era ${chosenNumber}`);
}
//Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
//Math.floor(Math.random() * (10 - 1 + 1) + 1)

