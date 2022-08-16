const URL_COMMENTS = "http://localhost:3000/comments";

async function requererTodos() {
    let respostaServidor = await fetch(URL_COMMENTS);
    let comentarios = await respostaServidor.json();
    return comentarios;
}

async function cadastrarUm(novoComentario) {
    let configuracoesCabecalho = {
        method: 'POST',
        body: JSON.stringify(novoComentario)
    }
    let respostaServidor = await fetch(`${URL_COMMENTS}`, configuracoesCabecalho);
    let comentarioCriado = await respostaServidor.json();
    return comentarioCriado;
}

async function deletarUm(idComentario) {
    let configuracoesCabecalho = {
        method: 'DELETE',
    }
    let respostaServidor = await fetch(`${URL_COMMENTS}/${idPost}`, configuracoesCabecalho);
    return (respostaServidor.status == 200)
}

async function atualizarUm(idComentario, novoComentario) {
    let configuracoesCabecalho = {
        method: 'PATCH',
        body: JSON.stringify(novoComentario)
    }
    let respostaServidor = await fetch(`${URL_COMMENTS}/${idComentario}`, configuracoesCabecalho);
    let comentarioAtualizado = await respostaServidor.json();
    return comentarioAtualizado;
}