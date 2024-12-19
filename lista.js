// inserir itens#################################
helpArrayPerson = []//Array auxiliar itens
function newItem() {

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








//Cria sessao pala exibir lista em lista
const sectionList = (listaCard) =>{



   if(listaCard == 1){
      sessionStorage.setItem('personList','list')
      
   }else if(listaCard == 2){
      sessionStorage.setItem('personList','card')
      
   }
   location.href = "lista.html"
}
 

//Lista de pessoas cadastradas
let showList = document.getElementById('listPersons')
let showHeader = document.getElementById('headPersons')
let showBody = document.getElementById('bodyPersons')
let showBtnPdf = document.getElementById('btnPdf')
const btnPdfs = document.getElementById('gerapdf')
const itemsCadList = JSON.parse(localStorage.getItem('itemsCad'))
//lista de itens ############################### inicio

for (let li = 0; li < itemsCadList.length; li++) {

   //Corpo da tabela
   showBody.innerHTML +=
   `
   <tr>
      <td>${itemsCadList[li]['newItem']}</td>
      <td>${itemsCadList[li]['newSelect']}</td>
      <td>${itemsCadList[li]['newResolucao']}</td>
      <td>${itemsCadList[li]['botaozinho']}</td>
      <td>${itemsCadList[li]['newData']}</td>
      <td>${itemsCadList[li]['newLogado']}</td>
      <td>${itemsCadList[li][' icone']}</td>
      
    </tr>
   
   `
}   




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
// Salvamento de fato da edição
arrayUpdate = []
function saveEdition(indiceSave){
   arrayUpdate = personCadList
let upName = document.getElementById('name')
let upLastName = document.getElementById('lastName')
let upEmail = document.getElementById('email')
let upOcupation = document.getElementById('editSelect')

let upStreet = document.getElementById('myStreet')
let upNumber = document.getElementById('myNumber')
let upBairro = document.getElementById('myBairro')
let upCep = document.getElementById('myCep')
let upCity = document.getElementById('myCity')
let upState = document.getElementById('myState')

   for (let update = 0; update < arrayUpdate.length; update++) {
      
      if(update == indiceSave){
         arrayUpdate[update]['name'] = upName.value
         arrayUpdate[update]['lastName'] = upLastName.value
         arrayUpdate[update]['email'] = upEmail.value
         arrayUpdate[update]['ocupation'] = upOcupation.value

         arrayUpdate[update]['street'] = upStreet.value
         arrayUpdate[update]['number'] = upNumber.value
         arrayUpdate[update]['bairro'] = upBairro.value
         arrayUpdate[update]['cep'] = upCep.value
         arrayUpdate[update]['city'] = upCity.value
         arrayUpdate[update]['state'] = upState.value
         
         localStorage.setItem('personCad', JSON.stringify(arrayUpdate))

         location.href = "lista.html"
      }      
   }  
}
//Obtenção de data para formar o nome do PDF
const pdfData = new Date()
const year = String(pdfData.getFullYear())
const month = String(pdfData.getMonth()+1).padStart(2,'0')
const day = String(pdfData.getDay()).padStart(2,'0')
const hour = String(pdfData.getHours()).padStart(2,'0')
const minut = String(pdfData.getMinutes()).padStart(2,'0')

const second = String(pdfData.getSeconds()).padStart(2,'0')

const concatName = `${year}-${month}-${day}-${hour}:${minut}:${second}.pdf`

console.log(concatName)
//Codigo para gerar um pdf da página
const btnGenerate = document.querySelector("#gerapdf")

btnGenerate.addEventListener("click", () => {

    const content = document.querySelector("#tablePersons")

    const options = {
        margin: [10,10,10,10],
        filename: concatName,
        html2canvas:{scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    html2pdf().set(options).from(content).save()

})



