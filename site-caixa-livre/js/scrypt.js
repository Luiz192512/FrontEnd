const produtos = {
    "123": { nome: "Gold do Brasil", preco: 9.99 },
    "456": { nome: "Gold da Croacia", preco: 9.99 },
    "789": { nome: "Gold da Alemanha", preco: 9.99 }
};

let carrinho = [];

const audiosPorCodigo = {
    "123": new Audio("fx/fahhhhhhhhhhhhhh.mp3"),
    "456": new Audio("fx/voce-nao-tem-aura.mp3"),
    "789": new Audio("fx/recuperamos-a-bola.mp3")
};

window.onload = () => {
    document.getElementById("cod").focus();
    renderCarrinho();
};

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function alertItem(mensagem) {
    alert(mensagem);
}

function tocarAudioDoProduto(codigo) {
    const audio = audiosPorCodigo[codigo];

    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function renderCarrinho() {
    const lista = document.getElementById("lista");
    const total = document.getElementById("total");

    lista.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = '<li class="list-group-item">Nenhum produto adicionado.</li>';
        total.textContent = "0,00";
        return;
    }

    let valorTotal = 0;

    carrinho.forEach((item) => {
        valorTotal += item.subTotal;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <span>${item.nome} x${item.qtdItem}</span>
            <strong>R$ ${formatarMoeda(item.subTotal)}</strong>
        `;
        lista.appendChild(li);
    });

    total.textContent = formatarMoeda(valorTotal);
}

function addProduto() {
    const codInput = document.getElementById("cod");
    const qtdInput = document.getElementById("qtd");

    const valorCod = codInput.value.trim();
    const valorQtd = parseInt(qtdInput.value, 10);

    if (!produtos[valorCod]) {
        alertItem("Codigo de barras nao encontrado.");
        codInput.focus();
        return;
    }

    if (Number.isNaN(valorQtd) || valorQtd <= 0) {
        alertItem("Informe uma quantidade valida.");
        qtdInput.focus();
        return;
    }

    const produtoBase = produtos[valorCod];

    const item = {
        nome: produtoBase.nome,
        preco: produtoBase.preco,
        qtdItem: valorQtd,
        subTotal: produtoBase.preco * valorQtd
    };

    carrinho.push(item);
    renderCarrinho();

    tocarAudioDoProduto(valorCod);

    codInput.value = "";
    qtdInput.value = 1;
    codInput.focus();
}
