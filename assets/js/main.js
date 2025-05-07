const form = document.querySelector('#valores');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var opcao1 = document.getElementById('opcao1').value;
    var opcao2 = document.getElementById('opcao2').value;
    
    if (!opcao1) {
        setResult('Digite uma primeira opção', false);
        return;
    }
    if (!opcao2) {
        setResult('Digite uma segunda opção', false);
        return;
    }

    let escolha;
    escolha = getRandomValue();

    console.log(escolha);

    switch (escolha) {
        case 0:
            escolha = opcao1;
            break;
        case 1:
            escolha = opcao2;
            break;
        default:
            break;
    }
    const msg = `${escolha}`;
    setResult(msg, true);
});

function getRandomValue() {
    let numero = Math.floor(Math.random() * 2);
    return numero;
}

function createp() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = createp();
    if (isValid) {
        p.classList.add('resultado');
    } else {
        p.classList.add('error');
    }
    p.innerHTML = msg;
    result.appendChild(p);


}




