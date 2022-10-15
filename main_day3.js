let stack = prompt("Qual área deseja seguir, front-end ou back-end? Digite o nome da área.");
let language = "";

        if(stack == "front-end"){
            language = prompt ("Deseja aprender React ou aprender Vue?") ;
            alert(`Uau ${language} é muito interessante`);
        }
                
        else if(stack == "back-end"){
            language = prompt("Deseja aprender C# ou aprender JAVA?");
            alert(`Uau ${language} é muito interessante`);
        }

        else{
            alert("Resposta inválida, por favor responda uma área valida");
            while(language==""){

                stack= prompt("Qual área deseja seguir, front-end ou back-end? Digite o nome da área.");
                if(stack == "front-end"){
                    language = prompt ("Deseja aprender React ou aprender Vue?") ;
                    alert(`Uau ${language} é muito interessante`);
                }
                        
                else if(stack == "back-end"){
                    language = prompt("Deseja aprender C# ou aprender JAVA?");
                    alert(`Uau ${language} é muito interessante`);
                }
        
                else{
                    alert("Reposta inválida, por favor responda uma área valida");
                }
            }
        }

    //Aqui preciso fazer voltar pra const stack até receber uma resposta válida

let stackOption = prompt(`Pressione 1 para seguir se especializando em ${stack} ou pressione 2 para seguir se desenvolvendo para se tornar Fullstack`);
let stackChoice= "";
    if (stackOption == 1){
        stackChoice = alert(`Muito bem! Você escolheu se especializar em ${stack}`);
    }

    else if (stackOption == 2){
        stackChoice = alert(`Muito bem! Você escolheu se desenvolver para se tornar fullstack`);
    }
    else{
        alert("Resposta inválida, por favor tente novamente");
        while(stackChoice==""){
            stackOption = prompt(`Pressione 1 para seguir se especializando em ${stack} ou pressione 2 para seguir se desenvolvendo para se tornar Fullstack`);
                if (stackOption == 1){
                    stackChoice = alert(`Muito bem! Você escolheu se especializar em ${stack}`);
                }
            
                else if (stackOption == 2){
                    stackChoice = alert(`Muito bem! Você escolheu se desenvolver para se tornar fullstack`);
                }
                else{
                    alert("Resposta inválida, por favor tente novamente");
                }
        }
    }
    //Aqui preciso fazer voltar pra const stackOption até receber uma resposta válida

    const technologyOption = prompt(`Em qual tecnologia você gostaria de se especializar ou conhecer?`);
    const technologyAnswer = alert(`Uau ${technologyOption} é uma tecnologia incrível!!!`);
    let technologyAdd = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite Sim ou não");
        while (technologyAdd == "sim"){
            let newTechnology = prompt(`Em qual tecnologia você gostaria de se especializar ou conhecer?`);
            alert(`Uau ${newTechnology} é uma tecnologia incrível!!!`);
            technologyAdd = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite Sim ou não");
        }
        //Acima preciso criar um loop que repita a pertunta anterior até receber uma resposta negativa
    const conclusion = alert("Busque no seu navegador conteúdos referentes as suas escolhas e bora codar!");
    //Aqui preciso fazer voltar pra const TechnologyOption caso a resposta de technology add seja diferente de não