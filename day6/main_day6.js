//PARA A POSTERIDADE ADD HTML E CSS PARA ESTILIZAR A PÁGINA, CHECKLIST EM CADA PRODUTO, UMA VEZ QUE TODOS OS PRODUTOS FOREM MARCADOS A CATEGORIA RECEBE FORMATAÇÃO ESPECIFICA
//BOTÃO PRA FINALIZAR A COMPRA, EXIBE AS CATEGORIAS E OS PRODUTOS COM ENFASE AOS PRODUTOS NÃO MARCADOS
let fruits = [];
let daity = [];
let candy = [];
let savory = [];
let frozen = [];
let item = "";
let category = "";
let remove = "";

let add = "sim";
while(add != "não"){
    if(fruits.length == 0 && daity.length == 0 && candy.length == 0 && savory.length == 0 && frozen.length == 0){
        add = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim' ou 'não'.");
    }

    else{
        add = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim', 'não' ou 'remover'");
    }

    while (add != "sim" && add != "não" && add != "remover") {  
        alert(`Operação não reconhecida!`);
        add = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
    
    if(add == "não"){
            break;
    }

    if(add == "sim"){
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
            alert("Essa categoria não foi pré-definida.");
        }
    }

    else if(add == "remover"){
        if(fruits.length == 0 && daity.length == 0 && candy.length == 0 && savory.length == 0 && frozen.length == 0){
            alert(`A lista está vazia!`);
        }
        else{
                remove = prompt(`Lista de compras:\n  Frutas: ${fruits}\n  Laticínios: ${daity}\n  Doces: ${candy}\n  Salgados: ${savory}\n Congelados: ${frozen}\n\nQual produto você deseja remover?`);
            if(fruits.indexOf(remove) != -1){
                fruits.splice(fruits.indexOf(remove), 1);
                alert(`O item ${remove} foi removido com sucesso!`)
            } 
            
            else if(daity.indexOf(remove) != -1){
                daity.splice(daity.indexOf(remove), 1);
                alert(`O item ${remove} foi removido com sucesso!`)
            } 
            
            else if (candy.indexOf(remove) != -1){
                candy.splice(candy.indexOf(remove), 1);
                alert(`O item ${remove} foi removido com sucesso!`)
            }

            else if (savory.indexOf(remove) != -1){
                savory.splice(savory.indexOf(remove), 1);
                alert(`O item ${remove} foi removido com sucesso!`)
            } 
            
            else if (frozen.indexOf(remove) != -1){
                frozen.splice(frozen.indexOf(remove), 1);
                alert(`O item ${remove} foi removido com sucesso!`)
            } 
            
            else {
                alert(`Não foi possível encontrar o item dentro da lista!`)
            }
        }
    }
}

alert(`Lista de compras:\n  Frutas: ${fruits}\n  Laticínios: ${daity}\n  Doces: ${candy}\n  Salgados: ${savory}\n  Congelados: ${frozen}`);