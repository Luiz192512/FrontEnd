function revelar() {
    // Change image src
    document.querySelector('.card-img-top').src = 'img/_vinicius_junior.png';

    // Update spans
    document.getElementById('Nome').innerHTML = 'Vinícius José Paixão de Oliveira Júnior <span id="Rank" class="badge text-bg-secondary">9,5</span>';
    document.getElementById('Data_Nas').textContent = '12/07/2000 (25 anos)';
    document.getElementById('Alutra').textContent = '1,76 m';
    document.getElementById('Posição ').textContent = 'Ponta-esquerda / Atacante';

    // Remove placeholder class and add card-text
    const placeholders = document.querySelectorAll('.placeholder');
    placeholders.forEach(el => {
        el.classList.remove('placeholder');
        el.classList.add('card-text');
    });

    // Also for the h5
    document.getElementById('Nome').classList.remove('placeholder-glow');
    document.querySelector('.card-text').classList.remove('placeholder-glow');
}