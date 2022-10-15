//PARA A POSTERIDADE ADD HTML E CSS PARA ESTILIZAR A PÁGINA, CHECKLIST EM CADA PRODUTO, UMA VEZ QUE TODOS OS PRODUTOS FOREM MARCADOS A CATEGORIA RECEBE FORMATAÇÃO ESPECIFICA
//BOTÃO PRA FINALIZAR A COMPRA, EXIBE AS CATEGORIAS E OS PRODUTOS COM ENFASE AOS PRODUTOS NÃO MARCADOS
let fruits = [];
let daity = [];
let candy = [];
let savory = [];
let frozen = [];
let item = "";
let category = "";

let add = "sim";
while(add != "não"){
    add = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim' ou 'não'.")
    while (add != "sim" && add != "não") {  
        alert(`Operação não reconhecida!`);
            add = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
}
    if(add === "não"){
        break;
    }
    item = prompt("Qual item você deseja inserir?");
    category = prompt("Em qual categoria esse item se encaixa: 'frutas', 'laticínios', 'doces' 'salgados' ou 'congelados'?");

    if(category === "frutas"){
        fruits.push(item);
    }
    else if(category === "laticínios"){
        daity.push(item);
    }
    else if(category === "doces"){
        candy.push(item);
    }
    else if(category === "salgados"){
        savory.push(item);
    }
    else if(category === "congelados"){
        frozen.push(item);
    }
    else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de compras:\n  Frutas: ${fruits}\n  Laticínios: ${daity}\n  Doces: ${candy}\n  Salgados: ${savory}\n  Congelados: ${frozen}`);