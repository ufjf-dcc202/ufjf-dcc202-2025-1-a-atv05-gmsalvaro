
const eH1 = document.querySelector("h1");
eH1.textContent = "ola mundo!"; 

const eTabuleiro =  criaTabuleira();
document.body.append(eTabuleiro);

for(let i = 0; i < 7; i++){
    if(i == 3) continue;
    const disco1 = criaDisco(i<3?"branco":"preto",i);
    eTabuleiro.append(disco1);
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