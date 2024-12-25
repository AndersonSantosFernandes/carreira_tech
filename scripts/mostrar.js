// Função que mostra o nome do usuario logado no menu lateral e habilita o botão de novo item ao logar.


let usando1 = JSON.parse(sessionStorage.getItem('usuarioLogado'))
// alert(usando1.nomeSessao +" "+usando1.emailSessao)
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
      