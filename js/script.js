let prato = null;
let bebida = null;
let sobremesa = null;
let preçoPrato = null;
let preçoBebida = null;
let preçoSobremesa = null;

function selecionarPrato(tipoPrato, valorPrato) {
    deselecionarPrato();
    let Temaki = document.querySelector("." + tipoPrato);
    Temaki.classList.add("selecionado");
    prato = tipoPrato;
    preçoPrato = valorPrato
    fecharPedido();
}

function deselecionarPrato(){
    const pratoSelecionado = document.querySelector(".selecionado")
    if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove("selecionado");
    }
}

function selecionarBebida(tipoBebida, valorBebida) {
    deselecionarBebida();
    let cocaCola = document.querySelector("." + tipoBebida);
    cocaCola.classList.add("selecionado-bebida");
    bebida = tipoBebida;
    preçoBebida = valorBebida
    fecharPedido();
}

function deselecionarBebida(){
    const bebidaSelecionada = document.querySelector(".selecionado-bebida")
    if (bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove("selecionado-bebida");
    }
}

function selecionarSobremesa(tipoSobremesa, valorSobremesa) {
    deselecionarSobremesa();
    let Pudim = document.querySelector("." + tipoSobremesa);
    Pudim.classList.add("selecionado-sobremesa");
    sobremesa = tipoSobremesa;
    preçoSobremesa = valorSobremesa
    fecharPedido();
}

function deselecionarSobremesa(){
    const sobremesaSelecionada = document.querySelector(".selecionado-sobremesa")
    if (sobremesaSelecionada !== null) {
    sobremesaSelecionada.classList.remove("selecionado-sobremesa");
    }
}

function fecharPedido() {
        let ativarbotao = document.querySelector(".buttonDesabilitado");
        let teste = document.querySelector(".ativarbotao")
        let total = parseFloat(preçoPrato) + parseFloat(preçoBebida) + parseFloat(preçoSobremesa);
        let textowpp = encodeURIComponent('Olá, gostaria de fazer o pedido: \n'+
        '- Prato: '+ prato + '\n' +
        '- Bebida: '+ bebida +  '\n' +
        '- Sobremesa: ' + sobremesa + '\n' +
        'Total: ' + total +  '\n');
        if(prato!==null && bebida!==null && sobremesa!==null){
            teste.setAttribute('href', 'https://wa.me/5519971525380?text='+ textowpp);
            teste.setAttribute('target', '_blank')
            ativarbotao.innerHTML = "<button type='button' class='buttonHabilitado'>Fechar Pedido</button>";
        }
    }






