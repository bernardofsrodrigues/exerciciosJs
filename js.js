
let senhaAleatoria = null;

function gerarSenhaAleatoria() {
    senhaAleatoria = Math.floor(Math.random() * 1000);
    document.getElementById('gerado').innerText = senhaAleatoria;
    console.log('Sua senha: ', senhaAleatoria);
}

function verificarSenha() {
    const senhaDigitada = document.getElementById('senha').value;

    if (senhaDigitada === senhaAleatoria.toString()) {
        document.getElementById('resposta').innerText = 'Acesso permitido!';
    } else {
        document.getElementById('resposta').innerText = 'Acesso negado!';
    }
}