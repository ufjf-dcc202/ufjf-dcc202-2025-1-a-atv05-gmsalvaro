import { getSelecionado, getTabuleiro, selecionado } from "./disco.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "ola mundo!"; 


const eTabuleiro =  criaTabuleira();
atualizaTabuleiro();
document.body.append(eTabuleiro);


function atualizaTabuleiro(){
    eTabuleiro.innerHTML = "";
    const tabuleiro = getTabuleiro();
    for(let i = 0; i < 7; i++){
        const disco1 = criaDisco(tabuleiro[i],i);
        eTabuleiro.append(disco1);
        disco1.addEventListener("click", clickDisco);
        if(i == getSelecionado()){
            disco1.classList.add("selecionado");
        }
    }
}


function clickDisco(evento){
    const posicao = evento.target.dataset.posicao;
    selecionado(posicao);
    atualizaTabuleiro();
}

function criaTabuleira(){
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}

function criaDisco(cor, posicao){
    const novoDisco = document.createElement("div");
    novoDisco.classList.add("disco");
    novoDisco.dataset.cor = cor;
    novoDisco.dataset.posicao = posicao;
    return novoDisco;
}