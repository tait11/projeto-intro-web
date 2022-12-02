// Projeto web - Cidades que quero conhecer

/* 1- Semana:
Você precisará criar pelo menos:
* uma característica String;
* uma característica Number;
* uma característica Boolean;

ITEM:
Nome da cidade (string);
População (number);
Lingua (boolean);
Continente (boolean).*/

//1.2 - Criar 3 conjuntos de dados diferentes

const cidade1 = "Denver, Colorado - EUA";
const populacao1 = 715878;
let falaIngles1 = true;
let continenteEuropeu1 = false;

const cidade2 = "Chicago, Illinois - EUA";
const populacao2 = 2746388;
let falaIngles2 = true;
let continenteEuropeu2 = false;

const cidade3 = "Paris, França";
const populacao3 = 2148271;
let falaIngles3 = false;
let continenteEuropeu3 = true;

const cidade4= "Nantes, França - Europa";
const populacao4 = 287845;
let falaIngles4 = false;
let continenteEuropeu4 = true;

const cidade5 = "Bolonha, Italia - Europa";
const populacao5 = 488172;
let falaIngles5 = false;
let continenteEuropeu5 = true;

const cidade6 = "Almada - Portugal - Europa";
const populacao6 = 177268;
let falaIngles6 = false;
let continenteEuropeu6 = true;

const cidade7 = "Genebra, Suíça - Europa";
const populacao7 = 499480;
let falaIngles7 = false;
let continenteEuropeu7 = true;

//1.3 - Fazer um cálculo de média e imprimir no console

const soma = populacao1 + populacao2 + populacao3 + populacao4 + populacao5 + populacao6 + populacao7;
const media = soma/7;
console.log(`A média populacional de todas as cidades é ${media}`) //Por ser números grandes o resultado não é bonito :)


//1.4 - Verificar se todas variáveis booleanas são verdadeiras e imprimir no console

const verificaLingua = falaIngles1 && falaIngles2 && falaIngles3 && falaIngles4 && falaIngles5 && falaIngles6 && falaIngles7;
console.log(verificaLingua);

const verificaContinente = continenteEuropeu1 && continenteEuropeu2 && continenteEuropeu3 && continenteEuropeu4 && continenteEuropeu5 && continenteEuropeu6 && continenteEuropeu7;
console.log(verificaContinente);

//SEMANA 2
// 2.1 - Acrescente um array


const pontosTuristicosD = ['Denver Museum of Nature & Science', 'Space Odyssey', 'Denver Perfoming Arts Complex', 'History Colorado Center', 'Denver Botanic Gardens', 'Cherry Creek North']



const pontosTuristicosC = ['Willis Tower', '360 Chicago Observation Deck', 'Chicago Riverwalk', 'Lincoln Park Zoo', 'Navy Pier', 'Wrigley Field']



const pontosTuristicosP = ['Torre Eiffel', 'Museu do Louvre', 'Catedral de Notre-Dame', 'Arco do Triunfo']



const pontosTuristicosN = ['Château des ducs de Bretagne', 'Máquinas da ilha', 'Museu de Belas Artes', 'Jardim Botanico']



const pontosTuristicosB = ['Piazza Maggiore', 'Museu Cívico arqueológico', "Palazzo dell'Archiginnasio", 'Galleria Cavour']



const pontosTuristicosA = ['Santuário Nacional de Cristo Rei', 'Praias', 'Parques e Jardins']



const pontosTuristicosG = ['Lac Léman', 'Cidade Velha e Catedral Sain Pierre', 'Cidade dos relógios e Museu Patek Philippe', 'Rua das compras']


//2.2 - Exiba um relatório no console. O nome deve estar em LETRAS MAIÚSCULAS

console.log(`A primeira cidade escolhida é ${cidade1.toLocaleUpperCase()}.\nEla tem uma população de ${populacao1} habitantes.\nSeus principais pontos turísticos são: ${pontosTuristicosD}.\nA língua mãe dessa cidade é o ingles? ${falaIngles1}.\nEla fica no continente Europeu? ${continenteEuropeu1}.`);

console.log("----------x----------");

console.log(`A segunda cidade escolhida é ${cidade2.toLocaleUpperCase()}.\nEla tem uma população de ${populacao2} habitantes.\nSeus principais pontos turísticos são: ${pontosTuristicosC}.\nA língua mãe dessa cidade é o ingles? ${falaIngles1}.\nEla fica no continente Europeu? ${continenteEuropeu2}.`);

console.log("----------x----------");

console.log(`A terceira cidade escolhida é ${cidade3.toLocaleUpperCase()}.\nEla tem uma população de ${populacao3} habitantes.\nSeus principais pontos turísticos são: ${pontosTuristicosP}.\nA língua mãe dessa cidade é o ingles? ${falaIngles3}.\nEla fica no continente Europeu? ${continenteEuropeu3}.`);

console.log("----------x----------");

console.log(`A quarta cidade escolhida é ${cidade4.toLocaleUpperCase()}.\nEla tem uma população de ${populacao4} habitantes.\nSeus principais pontos turísticos são: ${pontosTuristicosN}.\nA língua mãe dessa cidade é o ingles? ${falaIngles4}.\nEla fica no continente Europeu? ${continenteEuropeu4}.`);

console.log("----------x----------");

console.log(`A quinta cidade escolhida é ${cidade5.toLocaleUpperCase()}.\nEla tem uma população de ${populacao5} habitantes.\nSeus principais pontos turísticos são: ${pontosTuristicosB}.\nA língua mãe dessa cidade é o ingles? ${falaIngles5}.\nEla fica no continente Europeu? ${continenteEuropeu5}.`);

console.log("----------x----------");

console.log(`A sexta cidade escolhida é ${cidade6.toLocaleUpperCase()}.\nEla tem uma população de ${populacao6} habitantes.\nSeus principais pontos turísticos são: ${pontosTuristicosA}.\nA língua mãe dessa cidade é o ingles? ${falaIngles6}.\nEla fica no continente Europeu? ${continenteEuropeu6}.`);

console.log("----------x----------");

console.log(`A sétima cidade escolhida é ${cidade7.toLocaleUpperCase()}.\nEla tem uma população de ${populacao7} habitantes.\nSeus principais pontos turísticos são: ${pontosTuristicosG}.\nA língua mãe dessa cidade é o ingles? ${falaIngles7}.\nEla fica no continente Europeu? ${continenteEuropeu7}.`);

// SEMANA 3

//3.1 - Transforme os itens criados em objetos

destino1 = {
    cidade : "Denver, Colorado - EUA",
    pontosTuristicos : ['Denver Museum of Nature & Science', 'Space Odyssey', 'Denver Perfoming Arts Complex', 'History Colorado Center', 'Denver Botanic Gardens', 'Cherry Creek North'],
    populacao : 715878,
    lingua : "Ingles",
    continente : "Americano",
};

destino2 = {
    cidade : "Chicago, Illinois - EUA",
    pontosTuristicos : ['Willis Tower', '360 Chicago Observation Deck', 'Chicago Riverwalk', 'Lincoln Park Zoo', 'Navy Pier', 'Wrigley Field'],
    populacao : 2746388,
    lingua : "Ingles",
    continente : "Americano",
}

destino3 = {
    cidade : "Paris, França - Europa",
    pontosTuristicos : ['Torre Eiffel', 'Museu do Louvre', 'Catedral de Notre-Dame', 'Arco do Triunfo'],
    populacao : 2148271,
    lingua : "Francês",
    continente : "Europeu",

}

destino4 = {
    cidade : "Nantes, França - Europa",
    pontosTuristicos : ['Château des ducs de Bretagne', 'Máquinas da ilha', 'Museu de Belas Artes', 'Jardim Botanico'],
    populacao : 287845,
    lingua : "Francês",
    continente : "Europeu",
}

destino5 = {
    cidade: "Bolonha, Italia - Europa",
    pontosTuristicos: ['Piazza Maggiore', 'Museu Cívico arqueológico', "Palazzo dell'Archiginnasio", 'Galleria Cavour'],
    populacao: 488172,
    lingua : "Italiano",
    continente : "Europeu",
}

destino6 = {
    cidade: "Almada - Portugal - Europa",
    pontosTuristicos: ['Santuário Nacional de Cristo Rei', 'Praias', 'Parques e Jardins'],
    populacao: 177268,
    lingua : "Português",
    continente : "Europeu",
}
 
destino7 = {
    cidade: "Genebra, Suíça - Europa",
    pontosTuristicos: ['Lac Léman', 'Cidade Velha e Catedral Sain Pierre', 'Cidade dos relógios e Museu Patek Philippe', 'Rua das compras'],
    populacao: 499480,
    lingua : "Francês",
    continente : "Europeu",
} 

//3.2 - Crie um array vazio para guardar os objetos

const destinosEscolhidos = [];

// 3.3 Adicione os objetos criados ao array de objetos utilizando o push

destinosEscolhidos.push(destino1, destino2, destino3, destino4, destino5, destino6, destino7);
console.log(destinosEscolhidos);

//SEMANA 4
//4.1 Antes de dar o push(), crie uma verificação na característica booleana. Só acrescente o objeto ao array se a propriedade booleana for true.

const destinosVerificados= [];

 for(let i = 0; i < destinosEscolhidos.length; i++){
    
if (destinosEscolhidos[i].lingua === "Francês" && destinosEscolhidos[i].continente === "Europeu") {
    
    destinosVerificados.push(destinosEscolhidos[i]);
      
     }else {
       alert ('Cidade não adicionada')
    };
}
   console.log(destinosVerificados); 
    

 //semana 5
 console.log(`O nome da cidade é: ${destino1.cidade.toLocaleUpperCase()}.\n Seus pontos turísticos são: ${destino1.pontosTuristicos}.\n Sua população é: ${destino1.populacao}.\n A língua falada na cidade é o ${destino1.lingua}.\n E o continente em que está situada é o ${destino1.continente}.`);

console.log("-------------------------------x----------------------------------");

console.log(`O nome da cidade é: ${destino2.cidade.toLocaleUpperCase()}.\n Seus pontos turísticos são: ${destino2.pontosTuristicos}.\n Sua população é: ${destino2.populacao}.\n A língua falada na cidade é o ${destino2.lingua}.\n E o continente em que está situada é o ${destino2.continente}.`);

console.log("-------------------------------x----------------------------------");

console.log(`O nome da cidade é: ${destino3.cidade.toLocaleUpperCase()}.\n Seus pontos turísticos são: ${destino3.pontosTuristicos}.\n Sua população é: ${destino3.populacao}.\n A língua falada na cidade é o ${destino3.lingua}.\n E o continente em que está situada é o ${destino3.continente}.`);

console.log("-------------------------------x----------------------------------");

console.log(`O nome da cidade é: ${destino4.cidade.toLocaleUpperCase()}.\n Seus pontos turísticos são: ${destino4.pontosTuristicos}.\n Sua população é: ${destino4.populacao}.\n A língua falada na cidade é o ${destino4.lingua}.\n E o continente em que está situada é o ${destino4.continente}.`);

console.log("-------------------------------x----------------------------------");

console.log(`O nome da cidade é: ${destino5.cidade.toLocaleUpperCase()}.\n Seus pontos turísticos são: ${destino5.pontosTuristicos}.\n Sua população é: ${destino5.populacao}.\n A língua falada na cidade é o ${destino5.lingua}.\n E o continente em que está situada é o ${destino5.continente}.`);

console.log("-------------------------------x----------------------------------");

console.log(`O nome da cidade é: ${destino6.cidade.toLocaleUpperCase()}.\n Seus pontos turísticos são: ${destino6.pontosTuristicos}.\n Sua população é: ${destino6.populacao}.\n A língua falada na cidade é o ${destino6.lingua}.\n E o continente em que está situada é o ${destino6.continente}.`);

console.log("-------------------------------x----------------------------------");

console.log(`O nome da cidade é: ${destino7.cidade.toLocaleUpperCase()}.\n Seus pontos turísticos são: ${destino7.pontosTuristicos}.\n Sua população é: ${destino7.populacao}.\n A língua falada na cidade é o ${destino7.lingua}.\n E o continente em que está situada é o ${destino7.continente}`);

console.log("-------------------------------x----------------------------------");




let i = 0

while(i < 7){
    
    console.log(`O nome da cidade é:${destinosEscolhidos[i].cidade.toLocaleUpperCase()}.\n Seus pontos turísticos são: ${destinosEscolhidos[i].pontosTuristicos}. \n Sua população é: ${destinosEscolhidos[i].populacao}.\n A língua falada na cidade é o ${destinosEscolhidos[i].lingua}.\n E o continente em que está situada é o ${destinosEscolhidos[i].continente}`);
    console.log("-------------------------------x----------------------------------");
    i++;
}

//6.1 Função que recebe como parametro um objeto
destino = {
    cidade: "Genebra, Suíça - Europa",
    pontosTuristicos: ['Lac Léman', 'Cidade Velha e Catedral Sain Pierre', 'Cidade dos relógios e Museu Patek Philippe', 'Rua das compras'],
    populacao: 499480,
    lingua : "Francês",
    continente : "Europeu",
}



function recebeObjeto(objeto){
    const imprimir = console.log(`O nome da cidade é: ${destino.cidade.toLocaleUpperCase()}.\n Seus pontos turísticos são: ${destino.pontosTuristicos}.\n Sua população é: ${destino.populacao}.\n A língua falada na cidade é o ${destino.lingua}.\n E o continente em que está situada é o ${destino.continente}`);
}
recebeObjeto(destino);

//6.2 - Criar uma função de verificação

function buscaDestino(arrayDeObj, valorString){
    let destinoaRetornar = {};
    for(let i=0; i< arrayDeObj.length; i++){
        if (arrayDeObj[i].cidade === valorString){
           destinoaRetornar.cidade = arrayDeObj[i].cidade;
           destinoaRetornar.pontosTuristicos = arrayDeObj[i].pontosTuristicos;
           destinoaRetornar.populacao = arrayDeObj[i].populacao;
           destinoaRetornar.lingua = arrayDeObj[i].lingua;
           destinoaRetornar.continente = arrayDeObj[i].continente;

        }
    }
   if(destinoaRetornar.cidade !== valorString){

    alert('Destino não encontrado')

   }else{
    return destinoaRetornar
   }
    
}
const localidade = buscaDestino(destinosEscolhidos, "Chicago, Illinois - EUA")
console.log(localidade);

