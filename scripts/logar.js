

function changeUser(){
    let mudaUsuario = document.getElementById('selectUsuario').value

    sessionStorage.setItem('novoUser' , mudaUsuario)

    location.href = "./index.html"
}

if(!sessionStorage.getItem('novoUser')){

    sessionStorage.setItem('novoUser' , "Administrador")
}

// Função que encerra a sessão
const logOut = () => {
    sessionStorage.clear('newUser')
    //Redireciona de volta para index
    location.href = "index.html"

   
}