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


/***********BOTAO FINALIZAR PEDIDO - IR TELA BONUS************ */

function continuar() {
    let totalPratos = document.getElementsByClassName('selecionado').length    
    let botaoDesativado = document.querySelector('.botao-confirma')
    let botaoAtivo = document.querySelector('.habilitado')
    
    if(totalPratos === 6) {
       botaoDesativado.classList.add('hideButton')
       botaoAtivo.classList.remove('hideButton')
        
    }

}

/********TELA BONUS - CONFIRMAR PEDIDO******** */

function telaConfirmarPedidoBonus() {
    /****PRATO*****/

    const nomePratoPrincipal = document.querySelector(".nomePrato")
    nomePratoPrincipal.innerHTML = `${prato}`

    const precoPratoFinal = document.querySelector(".precoPrato")
    const precoPratoPrincipal = precoPrato.replace("R$", "").replace("," , ".")

    precoPratoFinal.innerHTML = `${precoPratoPrincipal.replace(".", ",")}`

     /****BEBIDA****/

    const nomeBebidaPrincipal = document.querySelector(".nomeBebida")
    nomeBebidaPrincipal.innerHTML = `${bebida}`

    const precoBebidaFinal = document.querySelector(".precoBebida")
    const precoBebidaPrincipal = precoBebida.replace("R$", "").replace("," , ".")

    precoBebidaFinal.innerHTML = `${precoBebidaPrincipal.replace(".", ",")}`

     /****SOBREMESA*****/

    const nomeSobremesaPrincipal = document.querySelector(".nomeSobremesa")
    nomeSobremesaPrincipal.innerHTML = `${sobremesa}`

    const precoSobremesaFinal = document.querySelector(".precoSobremesa")
    const precoSobremesaPrincipal = precoSobremesa.replace("R$", "").replace("," , ".")

    precoSobremesaFinal.innerHTML = `${precoSobremesaPrincipal.replace(".", ",")}`

    /*****SOMA TOTAL******/
    precoTotal = ((Number(precoBebidaPrincipal) + Number(precoPratoPrincipal) + Number(precoSobremesaPrincipal)).toFixed(2)).replace("." , ",")
    const precoTotalPedidoBonus = document.querySelector(".precoTotalPedido")
    precoTotalPedidoBonus.innerHTML = "R$ " + precoTotal




    const telaBonus = document.querySelector('.telaConfirmaPedido')
    telaBonus.classList.remove('hidden');
}

function botaoCancelarPedido() {
    const cancelarPedido = document.querySelector('.telaConfirmaPedido')
    cancelarPedido.classList.add('hidden')
    console.log(cancelarPedido)
}

function finalizarPedido() {
    
    let nome = prompt('Digite seu nome:');
    let endereco = prompt('Digite seu endereço:');   



    let mensagem = `Olá, gostaria de fazer o pedido:
               - Prato: ${prato}
               - Bebida: ${bebida}
               - Sobremesa: ${sobremesa}
               Total: R$ ${precoTotal.replace(".", ",")}`;

    let mensagem2 = ` - Nome: ${nome}
                      - Endereço: ${endereco}`;  

                  
    mensagem = encodeURIComponent(mensagem)
    mensagem2 = encodeURIComponent(mensagem2)

    window.open("https://wa.me/5591999999999?text=" + mensagem + mensagem2);
}

