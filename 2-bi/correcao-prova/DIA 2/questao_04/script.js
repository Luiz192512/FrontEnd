function add() {
    const cards = document.getElementById('Cards');
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.style.width = '22rem';
    newCard.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Tolentino Coelho de Lima">
        <div class="card-body">
            <h5 id="Nome2" class="card-title">
                Lucas Tolentino Coelho de Lima <span id="Rank2" class="badge">8,8</span>
            </h5>
            <p class="card-text">
                <span id="Data_Nas2"><strong>Nascimento:</strong> 27/08/1997</span><br>
                <span id="Altura2"><strong>Altura:</strong> 1,80 m</span><br>
                <span id="Posicao2"><strong>Posição:</strong> Meio-campista</span><br>
            </p>
        </div>
    `;
    cards.appendChild(newCard);
}