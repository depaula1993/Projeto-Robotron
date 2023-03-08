const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const cores = {
    "0": "img/Azul.png",

    "1": "img/Amarelo.png",
    
    "2": "img/Preto.png",

    "3": "img/Branco.png",

    "4": "img/Rosa.png",

    "5": "img/Vermelho.png"
    
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca)
        console.log(evento)
    })
})

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector('[data-contador]');

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1;
    }
    else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    

    estatisticas.forEach((elemento) => {
    
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];

    })
        
}

const mudarcor = document.querySelector('[data-cor]');
const robo = document.querySelector('#robotron');

mudarcor.addEventListener('click', (evento) => {    
    mudarcor.value = parseInt(mudarcor.value) + 1;
    murdarCorRobo(mudarcor.value);

})

function murdarCorRobo (valor) {    

    for(let contador = 0; contador < 7; contador ++){
      
        if(contador == valor){
            if(contador == '6'){
                mudarcor.value = 0;
                valor = mudarcor.value
                robo.setAttribute('src', cores[valor]);
            }else{
                robo.setAttribute('src', cores[valor]);
            }
        }
        
    }
    
}




