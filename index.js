
function listaComentario() {
    comments.map(comment =>
        elementListComments.innerHTML +=
        `<li>${comment.id} ${comment.body} </li>`)
}


function listaPostagens() {
    posts.map(postagem =>
        elementListPosts.innerHTML +=
        `<li>${postagem.id} ${postagem.body} </li>`)
}

function identificarUsuario() {
    profile.map(perfil =>
        elementProfileName.innerHTML += perfil.name)
}

function cliquePublicar(elementPostTitlePost)
{
    cadastrarUmPost(elementPostTitlePost)
    console.log("amém")
}