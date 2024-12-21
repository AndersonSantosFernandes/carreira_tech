let usando1 = JSON.parse(sessionStorage.getItem('usuarioLogado'))
// alert(usando1.nomeSessao +" "+usando1.emailSessao)
let nomeLogado = usando1.nomeSessao
let emailLogado = usando1.emailSessao

if(sessionStorage.getItem('usuarioLogado')){
        let botaoCadastro = document.getElementById("novoItem_btn")
      botaoCadastro.style.display="block"
     
    }
      

const itemsCadList = JSON.parse(localStorage.getItem('itemsCad'))


// esconder editor de item 

function hideEdit(){
   let editItem = document.getElementById('editItem')
   editItem.style.display = 'none'
}

//comandos para editar itens

function editItem( indiceUpdate){
   
   let editItem = document.getElementById('editItem')
   let formularioItem = document.getElementById('formularioItem')

   editItem.style.display = 'block'
   arraySelectItem = itemsCadList
//------------------------------------------------------------------------
   for (let sel = 0; sel < arraySelectItem.length; sel++) {

      if (indiceUpdate == sel) {
         
         formularioItem.innerHTML = `


         <label for="itemUp">Item</label><br>
        <input value="${arraySelectItem[sel]['newItem']}" class="inputz" type="text" name="" id="itemUp" placeholder="Digite o nome do item">
        <br>
        <label for="select_itemUp">Selecione o nível de gravidade</label><br>
        <select name="" id="select_itemUp">
            <option value="${arraySelectItem[sel]['newSelect']}">${arraySelectItem[sel]['newSelect']}</option>
            <option value="Alto">Alto</option>
            <option value="Médio">Médio</option>
            <option value="Baixo">Baixo</option>
        </select>
        <br>
        <label for="dias_resolucaoUp">Tempo de resolução (em dias)</label><br>
        <input  value="${arraySelectItem[sel]['newResolucao']}" type="number" name="" id="dias_resolucaoUp" placeholder="Digite o número em dias" min="1">
    
        <input type="hidden" id="usuario_logado" value="andersantfer@mobyan.com">
        <input type="hidden" id="data_cadastro" value="1978/10/18">   
        
        <p>
            <button class="btn_save_item" onclick="saveEditionItem('${sel}')">Salvar</button>
           
            
        </p>
         
        
         `
      }
   }
  //-------------------------------------------------------------------------
}


//================================EDIÇÃO itens inicio=========================
// Salvamento de fato da edição
arrayUpdateItem = []
function saveEditionItem(indiceSaveItem){

  
   arrayUpdateItem = itemsCadList
// let upItemItem = document.getElementsByClassName('item')
let upItemItem = document.getElementById('itemUp')
let upSelectItem = document.getElementById('select_itemUp')
let upResolucaoItem = document.getElementById('dias_resolucaoUp')
let upUsuarioItem = document.getElementById('usuario_logado')
let upDataCadItem = document.getElementById('data_cadastro')

//Obtenção de data para formar o nome do PDF
const pdfData = new Date()
const year = String(pdfData.getFullYear())
const month = String(pdfData.getMonth()+1).padStart(2,'0')
const day = String(pdfData.getDay()).padStart(2,'0')
const hour = String(pdfData.getHours()).padStart(2,'0')
const minut = String(pdfData.getMinutes()).padStart(2,'0')

const second = String(pdfData.getSeconds()).padStart(2,'0')

// const concatName = `${year}-${month}-${day}-${hour}:${minut}:${second}.pdf`
const concatName = `${day}-${month}-${year}<br>${hour}:${minut}:${second}`



   for (let update = 0; update < arrayUpdateItem.length; update++) {
      
      if(update == indiceSaveItem){
         arrayUpdateItem[update]['newItem'] = upItemItem.value
         arrayUpdateItem[update]['newSelect'] = upSelectItem.value
         arrayUpdateItem[update]['newResolucao'] = upResolucaoItem.value
         arrayUpdateItem[update]['newLogado'] = nomeLogado
         arrayUpdateItem[update]['newData'] = concatName
         
        
        
         
         localStorage.setItem('itemsCad', JSON.stringify(arrayUpdateItem))

         location.href = "index.html"
      }      
   }  
}

//================================EDIÇÃO itens final=========================




//Trecho de codigo para exibir o cadastro de items

function mostraCadastro(){
   let mostraCadastro = document.getElementById("cadastrar_item")

   mostraCadastro.style.display = 'block'
}
function hideCadastro(){
   let mostraCadastro = document.getElementById("cadastrar_item")
   mostraCadastro.style.display = 'none'
}


// inserir itens#################################
helpArrayPerson = []//Array auxiliar itens
function newItem() {

    let item = document.getElementById('item')
    let select_item = document.getElementById('select_item')
    let dias_resolucao = document.getElementById('dias_resolucao')
    let usuario_logado = document.getElementById('usuario_logado')
    let data_cadastro = document.getElementById('data_cadastro')

    
      //Obtenção de data para formar o nome do PDF
const pdfData = new Date()
const year = String(pdfData.getFullYear())
const month = String(pdfData.getMonth()+1).padStart(2,'0')
const day = String(pdfData.getDay()).padStart(2,'0')
const hour = String(pdfData.getHours()).padStart(2,'0')
const minut = String(pdfData.getMinutes()).padStart(2,'0')

const second = String(pdfData.getSeconds()).padStart(2,'0')

// const concatName = `${year}-${month}-${day}-${hour}:${minut}:${second}.pdf`
const concatName = `${day}-${month}-${year}<br>${hour}:${minut}:${second}`



    
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
        objectPerson = { newItem: item.value, newSelect: select_item.value, newResolucao: dias_resolucao.value, newLogado: nomeLogado,
        newData: concatName}

        helpArrayPerson = JSON.parse(localStorage.getItem('itemsCad')) || []
        helpArrayPerson.push(objectPerson)
        localStorage.setItem('itemsCad', JSON.stringify(helpArrayPerson))

        location.href = "index.html"
    }
}

// inserir itens #################################




//Lista de itens cadastrados

let showBody = document.getElementById('bodyPersons')


//lista de itens ############################### inicio

for (let li = 0; li < itemsCadList.length; li++) {

   //Corpo da tabela
   showBody.innerHTML +=
   `
   <tr class="linha_item " >
      <td >${itemsCadList[li]['newItem']}</td>
      <td class="centralizar">${itemsCadList[li]['newSelect']}</td>
      <td class="centralizar">${itemsCadList[li]['newResolucao']}</td>
      <td class="centralizar ">
         <div class="form-check form-switch">
         <input  class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
         <label  class="form-check-label" for="flexSwitchCheckChecked"></label>
         </div>
      </td>
      <td class="centralizar">${itemsCadList[li]['newData']}</td>
      <td class="centralizar">${itemsCadList[li]['newLogado']}</td>
      <td class="centralizar">
      <button class="btnEdit" onclick="editItem('${li}')"><i class="bi bi-pencil"></i></button>
      
      </td>
      
    </tr>
   
   `
}   


// ####################################################################################################
// ####################################################################################################
// ####################################################################################################
// ####################################################################################################

if (personCadList.length == 0) {
   showList.innerHTML +=
      `
   <h3> Nenhuma pessoa cadastrada ainda </h3>
   `
} else {

   //Exibe inpormações em tabela
   if(sessionStorage.getItem('personList') == 'list'){

      btnPdfs.style.display = 'block'
      //Cabeçalho da tabela
      showHeader.innerHTML = 
      `
      <h4 class="tituloHome">Lista de Pessoas</h4>
      <tr>
      <th>Nome</th>
      <th>Sobrenome</th>
      <th>E-mail</th>
      <th>Cargo</th>            
    </tr>
      
      `      
      for (let li = 0; li < personCadList.length; li++) {

         //Corpo da tabela
         showBody.innerHTML +=
         `
         <tr>
            <td>${personCadList[li]['name']}</td>
            <td>${personCadList[li]['lastName']}</td>
            <td>${personCadList[li]['email']}</td>
            <td>${personCadList[li]['ocupation']}</td>
          </tr>
         
         `
      }     

   }else{
      btnPdfs.style.display = 'none'
   
      //Exibir informações em caards
    for (let i = 0; i < personCadList.length; i++) {

      showList.innerHTML += `
    
      <div class="card__person">
         <h3>Nome: ${personCadList[i]['name']}</h3>
         <h5>Sobrenome: ${personCadList[i]['lastName']}</h5>
         <h5>e-mail: ${personCadList[i]['email']}</h5>
         <h5 class="strong">Cargo: ${personCadList[i]['ocupation']}</h5>
         <h5>Logradouro: ${personCadList[i]['street']}</h5>
         <h5>Número: ${personCadList[i]['number']}</h5>
         <h5>CEP: ${personCadList[i]['cep']}</h5>
         <h5>Bairro: ${personCadList[i]['bairro']}</h5>
         <h5>Cidade: ${personCadList[i]['city']}</h5>
         <h5>UF:${personCadList[i]['state']}</h5>
         
         <hr>
         <div class="out__btn">
            <button class="btn btn-primary" onclick="deletePerson('${i}')">Apagar ${personCadList[i]['name']} </button>
          
            
            <button type="button" class="btn btn-primary" onclick="updateUsers('${i}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Editar
          </button>          

          </div>
      </div>
    
    `
   }
}
}


//Deleta de fato um apessoa cadastrada
function deletePerson(indice) {

   const listDelete = JSON.parse(localStorage.getItem('personCad'))

   auxDelete = []
   for (let j = 0; j < listDelete.length; j++) {

      if (j == indice) {        

         auxDelete = listDelete        

         auxDelete.splice(indice, 1)

         localStorage.setItem('personCad', JSON.stringify(auxDelete))
      }

   }

   location.href = "lista.html"
}


//Lista de cargos
const ocupList = JSON.parse(localStorage.getItem('ocupations'))
const listOcup = document.getElementById('editSelect')
console.log(ocupList)

for (let list = 0; list < ocupList.length; list++) {
   console.log(ocupList[list]['ocupation'])
listOcup.innerHTML +=
`
<option value="${ocupList[list]['ocupation']}">${ocupList[list]['ocupation']}</option>

` 
   
}


//Seleciona o arquivo para edição
arraySelectPerson = []
function updateUsers(indiceUpdate) {

   let editPersons = document.getElementById('editPerson')
   arraySelectPerson = personCadList

   for (let sel = 0; sel < arraySelectPerson.length; sel++) {

      if (indiceUpdate == sel) {
         
         editPersons.innerHTML = `
         
         <input class="modalInput" value="${arraySelectPerson[sel]['name']}" type="text" name="" id="name">
         <input class="modalInput" value="${arraySelectPerson[sel]['lastName']}" type="text" name="" id="lastName">
         <input class="modalInput" value="${arraySelectPerson[sel]['email']}" type="email" name="" id="email" disabled="disabled">

         <input class="modalInput" value="${arraySelectPerson[sel]['street']}" type="email" name="" id="myStreet">
         <input class="modalInput" value="${arraySelectPerson[sel]['number']}" type="email" name="" id="myNumber">
         <input class="modalInput" value="${arraySelectPerson[sel]['bairro']}" type="email" name="" id="myBairro">
         <input class="modalInput" value="${arraySelectPerson[sel]['cep']}" type="email" name="" id="myCep">
         <input class="modalInput" value="${arraySelectPerson[sel]['city']}" type="email" name="" id="myCity">
         <input class="modalInput" value="${arraySelectPerson[sel]['state']}" type="email" name="" id="myState">
                  <hr>
         <button type="button" class="btn btn-primary"  onclick="saveEdition('${sel}')" >
         Salvar
          </button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancela</button>
         `
      }
   }
}

//================================EDIÇÃO=========================
// Salvamento de fato da edição
arrayUpdate = []
function saveEdition(indiceSave){
   arrayUpdate = personCadList
let upName = document.getElementById('name')
let upLastName = document.getElementById('lastName')
let upEmail = document.getElementById('email')
let upOcupation = document.getElementById('editSelect')



   for (let update = 0; update < arrayUpdate.length; update++) {
      
      if(update == indiceSave){
         arrayUpdate[update]['name'] = upName.value
         arrayUpdate[update]['lastName'] = upLastName.value
         arrayUpdate[update]['email'] = upEmail.value
         arrayUpdate[update]['ocupation'] = upOcupation.value

        
         
         localStorage.setItem('personCad', JSON.stringify(arrayUpdate))

         location.href = "lista.html"
      }      
   }  
}

//================================EDIÇÃO=========================




function hideEsc(){

   let hideCad = document.getElementById("cadastrando")
   hideCad.style.display = "none"

}

function showMenu(){

    let hideCad = document.getElementById("cadastrando")
   hideCad.style.display = "block"

}






