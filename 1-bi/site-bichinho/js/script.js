const cria = document.getElementById("b");
const feedBtn = document.getElementById("feed-btn");
const restartBtn = document.getElementById("restart-btn");
const statusText = document.getElementById("status-text");
const timerText = document.getElementById("timer-text");
const gostosinhoBtn = document.getElementById("gostosinho-btn");
const eggAudio = new Audio("audio/voce-nao-tem-aura.mp3");
eggAudio.preload = "auto";

const estados = {
    normal: "img/b_n.png",
    puto: "img/b_p.png",
    morto: "img/b_d.png",
    comendo: "img/b_c.png",
    alimentado: "img/b_a.png"
};

const LIMITE_PUTO = 30;
const LIMITE_MORTE = 60;
const INTERVALO_MS = 500;

let contador = 0;
let intervalo = null;
let animacaoComida = null;
let vivo = true;

function esconderGostosinho() {
    const gostosinho = document.querySelector(".gostosinho");
    if (gostosinho) {
        gostosinho.classList.remove("show");
        gostosinho.remove();
    }
}

function atualizarTemporizador() {
    const tempoDecorrido = contador / 2;
    const ateFicarBravo = Math.max(0, LIMITE_PUTO / 2 - tempoDecorrido);
    const ateMorrer = Math.max(0, LIMITE_MORTE / 2 - tempoDecorrido);

    timerText.textContent = `Bravo em: ${ateFicarBravo.toFixed(1)}s | Morte em: ${ateMorrer.toFixed(1)}s`;
}

function atualizarInterface() {
    if (!vivo) {
        cria.src = estados.morto;
        cria.alt = "Bichinho virtual morto";
        statusText.textContent = "Seu bichinho morreu de fome. Hora de recomecar.";
        feedBtn.disabled = true;
        restartBtn.hidden = false;
        atualizarTemporizador();
        return;
    }

    feedBtn.disabled = false;
    restartBtn.hidden = true;

    if (contador >= LIMITE_PUTO) {
        cria.src = estados.puto;
        cria.alt = "Bichinho virtual bravo";
        statusText.textContent = "Ele esta bravo. Melhor dar comida logo.";
    } else {
        cria.src = estados.normal;
        cria.alt = "Bichinho virtual em estado normal";
        statusText.textContent = "Seu bichinho esta bem, mas continua com fome.";
    }

    atualizarTemporizador();
}

function iniciarLoop() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        contador += 1;

        if (contador >= LIMITE_MORTE) {
            vivo = false;
            clearInterval(intervalo);
        }

        atualizarInterface();
    }, INTERVALO_MS);
}

function alimentar() {
    if (!vivo) {
        return;
    }

    clearTimeout(animacaoComida);
    contador = 0;
    cria.src = estados.comendo;
    cria.alt = "Bichinho virtual comendo";
    statusText.textContent = "Nhac! Ele adorou a comida.";
    atualizarTemporizador();

    animacaoComida = setTimeout(() => {
        cria.src = estados.alimentado;
        cria.alt = "Bichinho virtual alimentado";
        statusText.textContent = "Barriguinha cheia. Agora ele esta satisfeito.";

        animacaoComida = setTimeout(() => {
            atualizarInterface();
        }, 900);
    }, 450);
}

function reiniciar() {
    clearTimeout(animacaoComida);
    contador = 0;
    vivo = true;
    statusText.textContent = "Seu bichinho voltou. Cuide melhor dele desta vez.";
    atualizarInterface();
    iniciarLoop();
}

function ativarGostosinho() {
    esconderGostosinho();

    const gostosinho = document.createElement("img");
    gostosinho.className = "gostosinho";
    gostosinho.src = "img/gostosinho.png";
    gostosinho.alt = "";
    document.body.appendChild(gostosinho);

    void gostosinho.offsetWidth;
    gostosinho.classList.add("show");

    eggAudio.pause();
    eggAudio.currentTime = 0;
    eggAudio.play().catch(() => {});

    statusText.textContent = "Modo gostosinho ativado por alguns segundos.";
}

eggAudio.addEventListener("ended", esconderGostosinho);

feedBtn.addEventListener("click", alimentar);
restartBtn.addEventListener("click", reiniciar);
gostosinhoBtn.addEventListener("click", ativarGostosinho);

atualizarInterface();
iniciarLoop();
