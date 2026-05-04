const gruposOriginais = [
    {
        id: 'grupo-a',
        nome: 'Grupo A',
        selecoes: ['México', 'África do Sul', 'Coreia do Sul', 'República Tcheca'],
        fatos: 'O jogo de abertura será México x África do Sul. Confrontos entre Coreia do Sul e seleções europeias já ocorreram em várias Copas, com histórico equilibrado.'
    },
    {
        id: 'grupo-b',
        nome: 'Grupo B',
        selecoes: ['Canadá', 'Suíça', 'Catar', 'Vaga Europeia (Bósnia)'],
        fatos: 'O Canadá joga em casa, fator importante de desempenho. Catar e Suíça já se enfrentaram recentemente em amistosos internacionais.'
    },
    {
        id: 'grupo-c',
        nome: 'Grupo C',
        selecoes: ['Brasil', 'Marrocos', 'Haiti', 'Escócia'],
        fatos: 'Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.'
    }
];

const gruposAlternativos = [
    {
        id: 'grupo-d',
        nome: 'Grupo D',
        selecoes: ['Estados Unidos', 'Paraguai', 'Austrália', 'Turquia'],
        fatos: 'Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.'
    },
    {
        id: 'grupo-e',
        nome: 'Grupo E',
        selecoes: ['Alemanha', 'Equador', 'Costa do Marfim', 'Curaçao'],
        fatos: 'Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.'
    },
    {
        id: 'grupo-f',
        nome: 'Grupo F',
        selecoes: ['Holanda', 'Japão', 'Tunísia', 'Suécia'],
        fatos: 'Holanda e Japão são fortes candidatos; Tunísia e Suécia trazem um futebol técnico e organizado para o grupo.'
    }
];

let mostrarAlternativo = false;

function alternarGrupos() {
    mostrarAlternativo = !mostrarAlternativo;
    const button = document.getElementById('toggleButton');
    button.textContent = mostrarAlternativo ? 'Mostrar grupos A, B e C' : 'Mostrar grupos D, E e F';
    renderizarGrupos();
}

function renderizarGrupos() {
    const container = document.getElementById('gruposContainer');
    const grupos = mostrarAlternativo ? gruposAlternativos : gruposOriginais;
    container.innerHTML = grupos.map(grupo => criarElementoGrupo(grupo)).join('\n');
}

function criarElementoGrupo({ id, nome, selecoes, fatos }) {
    return `
        <section id="${id}" class="group-card">
            <h2>${nome}</h2>
            <h3>Seleções</h3>
            <ul>
                ${selecoes.map(time => `<li>${time}</li>`).join('')}
            </ul>
            <details>
                <summary>Saiba Mais</summary>
                <p>${fatos}</p>
            </details>
        </section>
    `;
}

renderizarGrupos();
