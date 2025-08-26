const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
   const input = document.getElementById('option').value;

    const opcoes = input.split('\n').map(op => op.trim()).filter(op => op !== '');

    const indice = getRandomValue(opcoes.length);
    const escolha = opcoes[indice];

    setResult(`Escolhido: ${escolha}`, true);
});

function getRandomValue(max) {
    let numero = Math.floor(Math.random() * max);
    return numero;
}

function createPResult() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    result.style.background = "white"
    result.innerHTML = '';
    const p = createPResult();
    p.classList.add(isValid ? 'resultado' : 'error');
    p.innerHTML = msg;
    result.appendChild(p);
}
