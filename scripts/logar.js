

if(!sessionStorage.getItem('novoUser')){

    var nome = window.prompt("digite um nome para criar sessão")



    if(nome == null ){
        var nome = window.prompt("Digite um nome para criar sessão")
    }else{
        sessionStorage.setItem('novoUser' , nome)
    }
    


}



//função que dá start nas ações de login
function logar() {

    const retornoLogado = JSON.parse(localStorage.getItem('cadastrado'))
    // console.log(retornoLogado[0]['emailUs'])

    let emailUsuario = document.getElementById("email").value
    let senhaUsuario = document.getElementById("password").value

    //Verificação no "BD" se existe usuario e senha compa´tivel

    // console.log("Retorno logado", retornoLogado.length)

    for (let i = 0; i < retornoLogado.length; i++) {
        // percorre o array procurando email e senha que combinam
        if (emailUsuario == retornoLogado[i]['emailUs'] && senhaUsuario == retornoLogado[i]['senhaUs']) {

            // Encontrando a combinação, cria uma com o nome do usuário

            objetoLogado = { nomeSessao: retornoLogado[i]['nomeUs'], emailSessao: retornoLogado[i]['emailUs'] }
            sessionStorage.setItem('usuarioLogado', JSON.stringify(objetoLogado))


            // alert("Logado com sucesso")
             location.href = "./index.html"
           
            // break;
        }

    }

    // Se não encontrar e-mail e senha que combinam a sessão não é criada e não executa o login
    if (!sessionStorage.getItem('usuarioLogado')) {
        
        // alert('E-mail ou senha inválidos ou usuário não cadastrado')
        Swal.fire("E-mail ou senha nválidos ou não cadastrado!");
    }

}


// // Função que encerra a sessão
// const logOut = () => {
//     sessionStorage.clear('usuarioLogado')
//     //Redireciona de volta para index
//     location.href = "index.html"

   
// }

// Função que encerra a sessão
const logOut = () => {
    sessionStorage.clear('newUser')
    //Redireciona de volta para index
    location.href = "index.html"

   
}