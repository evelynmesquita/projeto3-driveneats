let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;
let precoTotal;

/**********SELEÇÃO DE PRATOS********/

// SELECIONAR PRATO

function selecionarPrato(botaoPrato){

    /* buscar o elemento que foi selecionado anteriormente
    (verificando se existe a classe selecionado)*/
    const botaoPratoSelecionadoAnt = document.querySelector('.comida .selecionado')
    const botaoCheckAnterior = document.querySelector('.comida .selecionado .icon')

    //verificar se existe algum elemento que foi selecionado anteriormente
    if (botaoPratoSelecionadoAnt !== null){
        botaoPratoSelecionadoAnt.classList.remove('selecionado')
        botaoCheckAnterior.classList.remove('selecionado')
    }
    
    botaoPrato.classList.add('selecionado')
    const botaoCheck = document.querySelector('.comida .selecionado .icon')
    botaoCheck.classList.add('selecionado')
    

    const nomePrato = document.querySelector('.selecionado h3')
    precoPrato = document.querySelector('.selecionado h4')

    prato = nomePrato.innerHTML;
    console.log(prato)
    precoPrato= precoPrato.innerHTML;
    console.log(precoPrato)

    continuar()
}

// SELECIONAR BEBIDA

function selecionarBebida(botaoBebida){
    const botaoBebidaSelecionadoAnt = document.querySelector('.bebida .selecionado')
    const botaoCheckAnterior2 = document.querySelector('.bebida .selecionado .icon')

    if (botaoBebidaSelecionadoAnt !== null){
        botaoBebidaSelecionadoAnt.classList.remove('selecionado')
        botaoCheckAnterior2.classList.remove('selecionado')
    }

    botaoBebida.classList.add('selecionado')
    const botaoCheck2 = document.querySelector('.bebida .selecionado .icon')
    botaoCheck2.classList.add('selecionado')

    const nomeBebida = document.querySelector('.bebida .selecionado h3')
    precoBebida = document.querySelector('.bebida .selecionado h4')

    bebida = nomeBebida.innerHTML;
    precoBebida= precoBebida.innerHTML;

    continuar()
}

// SELECIONAR SOBREMESA

function selecionarSobremesa(botaoSobremesa){
    const botaoSobremesaSelecionadoAnt = document.querySelector('.sobremesa .selecionado')
    const botaoCheckAnterior3 = document.querySelector('.sobremesa .selecionado .icon')

    if (botaoSobremesaSelecionadoAnt !== null){
        botaoSobremesaSelecionadoAnt.classList.remove('selecionado')
        botaoCheckAnterior3.classList.remove('selecionado')
    }

    botaoSobremesa.classList.add('selecionado')
    const botaoCheck3 = document.querySelector('.sobremesa .selecionado .icon')
    botaoCheck3.classList.add('selecionado')

    const nomeSobremesa = document.querySelector('.sobremesa .selecionado h3')
    precoSobremesa = document.querySelector('.sobremesa .selecionado h4')

    sobremesa = nomeSobremesa.innerHTML;
    precoSobremesa = precoSobremesa.innerHTML;
    
    continuar()
}




