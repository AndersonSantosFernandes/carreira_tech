

listaCargos = document.getElementById('personOcupation')
// inserir itens#################################
helpArrayPerson = []//Array auxiliar itens
function newItemm() {



    let item = document.getElementById('item')
    let select_item = document.getElementById('select_item')
    let dias_resolucao = document.getElementById('dias_resolucao')
    let usuario_logado = document.getElementById('usuario_logado')
    let data_cadastro = document.getElementById('data_cadastro')
    alert(usuario_logado.value)
    
    // Evita salvar campos vazios
    if (item.value.length < 2 || select_item.value.length < 2 || dias_resolucao.value.length < 1 ) {
        // alert('Não deixe campos vazios')
        Swal.fire({
            icon: "error",
            // title: "Oops...",
            text: "Não deixe campos vazios",

        });

    } else {

        // objeto que recebe dos inputs
        objectPerson = { newItem: item.value, newSelect: select_item.value, newResolucao: dias_resolucao.value, newLogado: usuario_logado.value,
        newData: data_cadastro.value}


        helpArrayPerson = JSON.parse(localStorage.getItem('itemsCad')) || []
        helpArrayPerson.push(objectPerson)
        localStorage.setItem('itemsCad', JSON.stringify(helpArrayPerson))

        location.href = "cadastrarPessoas.html"
    }
}

// inserir itens #################################

helpArrayOcupation = []//Array auxiliar cargos

function newCargo() {

    let newOcupation = document.getElementById('newOcupation')

    if (newOcupation.value.length < 5) {
        // alert('Descreva um cargo com no mínimo 5 letras')

        Swal.fire({
            icon: "error",
            // title: "Oops...",
            text: "Descreva um cargo com no mínimo 5 letras",
        });

    } else {

        objectOcupation = { ocupation: newOcupation.value }

        helpArrayOcupation = JSON.parse(localStorage.getItem('ocupations')) || []
        helpArrayOcupation.push(objectOcupation)
        localStorage.setItem('ocupations', JSON.stringify(helpArrayOcupation))

        location.href = "cadastrarPessoas.html"
    }
}




// Lista de cargos
const ocupationList = JSON.parse(localStorage.getItem('ocupations'))
let updateCargos = document.getElementById('updateCargo')
for (let j = 0; j < ocupationList.length; j++) {
    //Lista para cadastrar
    listaCargos.innerHTML +=
        `
    <option onclick="updateOcupation(${j})" value="${ocupationList[j]['ocupation']}">${ocupationList[j]['ocupation']}</option>  
      
    `

    //Lista para editar que aparece no segundo modal

    //O botão neste trecho envia o número de índice para a função "updateOcupation()"
    updateCargos.innerHTML +=
        `
    <tr>
       
        <td><input type="text" name="nameUpdate" value="${ocupationList[j]['ocupation']}"  style="height:25px;" ></td>
        <td><button onclick="updateOcupation('${j}')" class="btn btn-primary">Salvar</button></td>
        <td><button onclick="deleteOcupation('${j}')" class="btn btn-primary">Deletar</button></td>
    </tr>
    
    `

}


helpArrayUpdate = []
//Valor do índice vem do botão salvar
function updateOcupation(indiceOcupation) {
    let nameUpdates = document.getElementsByName('nameUpdate')

    helpArrayUpdate = ocupationList //Recebe o objeto completo 

    for (let u = 0; u < ocupationList.length; u++) {

        //Procura o objeto com o mesmo numero de ídice
        if (u == indiceOcupation) {

            //Altera o valor da chave do ídice encontrado 
            helpArrayUpdate[u]['ocupation'] = nameUpdates[u].value

            // Retorna o objeto atualizado para o localStorage
            localStorage.setItem('ocupations', JSON.stringify(helpArrayUpdate))

            // Dá um refresh na página para mostrar as atualizações
            location.href = "cadastrarPessoas.html"
            break;

        }

    }
}

helpArrayDelete = []
function deleteOcupation(indiceDelete) {

    helpArrayDelete = ocupationList

    for (let d = 0; d < ocupationList.length; d++) {



        if (d == indiceDelete) {

            helpArrayDelete.splice(indiceDelete, 1)
            localStorage.setItem('ocupations', JSON.stringify(helpArrayDelete))


            location.href = "cadastrarPessoas.html"
            break;
        }

    }


}



function buscaCep(){
    let cep = document.getElementById("meucep").value
    
    var regexCEP = /^\d{8}$/; //CEP sem traço
    var regexCEP1 = /^\d{5}\-\d{3}$/;//CEP com traço
    let logradouros = document.getElementById("logradouro")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")
    
    //Verifica se o cep está nos dois formatos aceitos, com traço e sem e com 8numeros
    if (regexCEP.test(cep) || regexCEP1.test(cep) ) {
        let url = `https://viacep.com.br/ws/${cep}/json/`
    
    fetch(url)
    .then(response => response.json())
    .then(response =>exibir(response))
    
    function exibir(dados){
    console.log( "acerto ou erro: ", dados)
    
    // Se o cep estiver no formato correto mas não for válido: mensagem de CEP inválido
    if(dados.erro == true){
    
    Swal.fire({
        icon: "error",    
        text: "CEP inválido!",    
      });
      logradouros.value = ""
      bairro.value = ""
      cidade.value = ""
      estado.value = ""    
    }else
    {
        logradouros.value = dados.logradouro
    bairro.value = dados.bairro
    cidade.value = dados.localidade
    estado.value = dados.uf
    }
    
    }
    } else {//Retorno de erro se o formato não atender a condução
    
        Swal.fire({
            icon: "error",    
            text: "Formato inválido! Verifique",    
          });

          logradouros.value = ""
      bairro.value = ""
      cidade.value = ""
      estado.value = ""    
    }    
    }
    