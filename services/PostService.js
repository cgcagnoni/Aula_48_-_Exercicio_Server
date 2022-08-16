const URL_POST = "http://localhost:3000/posts";

async function requererTodos() {
    let respostaServidor = await fetch(URL_POST);
    let publicacoes = await respostaServidor.json();

    return publicacoes;
}

async function cadastrarUmPost(novoPost) {
    let configuracoesCabecalho = {
        method: 'POST',
        body: JSON.stringify(novoPost)
    }
    let respostaServidor = await fetch(`${URL_POST}`, configuracoesCabecalho);
    let postCriado = await respostaServidor.json();
    return postCriado;
}

async function deletarUm(idPost) {
    let configuracoesCabecalho = {
        method: 'DELETE',
    }
    let respostaServidor = await fetch(`${URL_POST}/${idPost}`, configuracoesCabecalho);
    return (respostaServidor.status == 200)
}

async function atualizarUm(idPost, novoPost) {
    let configuracoesCabecalho = {
        method: 'PATCH',
        body: JSON.stringify(novoPost)
    }
    let respostaServidor = await fetch(`${URL_POST}/${idPost}`, configuracoesCabecalho);
    let postAtualizado = await respostaServidor.json();
    return postAtualizado;
}