 verificaLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'))
// console.log('Usando',verificaLogado.emailSessao)

//Exibir tabela com as informações
const tabela = document.getElementById('corpo')
if(verificaDisponibilidade != null){
for (let j = 0; j < verificaDisponibilidade.length; j++) {
    let desabilitaDelete = ''
    //Desabilita o botão delete do usuário logado para não apagar ele mesmo
    if(verificaDisponibilidade[j]['emailUs'] == verificaLogado.emailSessao){
        desabilitaDelete = 'disabled="disabled"'
        
    }
    tabela.innerHTML += 
        `
<tr>
<td>${verificaDisponibilidade[j]['nomeUs']}</td>
<td>${verificaDisponibilidade[j]['emailUs']}</td>    
<td class="alinhaIconeTb">${verificaDisponibilidade[j]['dataCad']}</td>
</tr>
`
// console.log(verificaDisponibilidade[j]['emailUs'])
}
}
//<td class="alinhaIconeTb"><button ${desabilitaDelete} class="btnDelete" onclick="delUsuario('${j}')">Del</button></td>

