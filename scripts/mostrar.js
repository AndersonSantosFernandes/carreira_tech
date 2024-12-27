// Função que mostra o nome do usuario logado no menu lateral e habilita o botão de novo item ao logar.


let usando1 = JSON.parse(sessionStorage.getItem('usuarioLogado'))

if(usando1 == null){

  // Swal.fire("Para cadstrar e editar itens é necessário estar logado \n Faça o cadástro no menú lateral e logue eposteriormente");

  Swal.fire({
    // position: "top-end",
    icon: "error",
    title: "Para cadstrar e editar itens é necessário estar logado \n Faça o cadástro no menú lateral e logue posteriormente",
    showConfirmButton: false,
    timer: 3500
});


}

let nomeLogado = usando1.nomeSessao
let emailLogado = usando1.emailSessao



if(sessionStorage.getItem('usuarioLogado')){
  
    
        let botaoCadastro = document.getElementById("novoItem_btn")
        let logadoSessao = document.getElementById("sessaoUsuario")
      botaoCadastro.style.display="block"
     logadoSessao.innerHTML = 
     `
     <p><i class="bi bi-person"></i> Olá ${nomeLogado}</p>
     `
    }else{
      
    }
   
  