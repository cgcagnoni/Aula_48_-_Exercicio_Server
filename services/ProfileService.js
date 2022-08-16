const URL_PROFILE = "http://localhost:3000/profile";

async function requererPorId(userId) {
    let respostaServidor = await fetch(`${URL_PROFILE}/${userId}`);
    let userPerfil = await respostaServidor.json();
    return userPerfil;
}

async function atualizarUm(userId, novoUser) {
    let configuracoesCabecalho = {
        method: 'PATCH',
        body: JSON.stringify(novoUser)
    }
    let respostaServidor = await fetch(`${URL_PROFILE}/${userId}`, configuracoesCabecalho);
    let userAtualizado = await respostaServidor.json();
    return userAtualizado;
}