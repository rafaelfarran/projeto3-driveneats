

function selecionarPrato(tipoPrato) {
    deselecionarSentimento();
    let Temaki = document.querySelector("." + tipoPrato);
    Temaki.classList.add("selecionado");
}

function deselecionarSentimento(){
    const sentimentoSelecionado = document.querySelector(".selecionado")
    if (sentimentoSelecionado !== null) {
    sentimentoSelecionado.classList.remove("selecionado");
    }
}




