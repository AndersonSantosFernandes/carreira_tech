

const itemsCadList = JSON.parse(localStorage.getItem('itemsCad'))

const itemPorPagina = JSON.parse(localStorage.getItem('itemPorPagina'))

if(!itemPorPagina){
   localStorage.setItem('itemPorPagina', 5)
   
}

function mudaNumeroPorPagina(){
   let nppg = document.getElementById('itensPorPagina').value
   localStorage.setItem('itemPorPagina', nppg)
   location.href = "index.html"
}

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


//Obtenção de data
const dataAtual = new Date()
//padStart(x,x) serve para quando se deseja mostrar um numero sosinho
//como dia, de 1 a 9 o 0 é acrescentado a esquerda             
const dia = String(dataAtual.getDate()).padStart(2, '0')
// O mes começa em '0' necessitando adicionar mais 1 pra ficar correto
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
const ano = String(dataAtual.getFullYear())
const hora = String(dataAtual.getHours()).padStart(2, '0')
const minuto = String(dataAtual.getMinutes()).padStart(2, '0')
const segundo = String(dataAtual.getSeconds()).padStart(2, '0')

const concatName = `${dia}/${mes}/${ano} <br> ${hora}:${minuto}:${segundo}`


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

            //Obtenção de data
         const dataAtual = new Date()
         //padStart(x,x) serve para quando se deseja mostrar um numero sosinho
         //como dia, de 1 a 9 o 0 é acrescentado a esquerda             
         const dia = String(dataAtual.getDate()).padStart(2, '0')
         // O mes começa em '0' necessitando adicionar mais 1 pra ficar correto
         const mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
         const ano = String(dataAtual.getFullYear())
         const hora = String(dataAtual.getHours()).padStart(2, '0')
         const minuto = String(dataAtual.getMinutes()).padStart(2, '0')
         const segundo = String(dataAtual.getSeconds()).padStart(2, '0')

         const concatName = `${dia}/${mes}/${ano} <br> ${hora}:${minuto}:${segundo}`
    
          
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

paginando = sessionStorage.getItem('paginacao')
page = paginando



//Lista de itens cadastrados

let showBody = document.getElementById('bodyPersons')
let message = document.getElementById('msgEmpty')
let paginacao = document.getElementById("interPagination")
let paginacao1 = document.getElementById("paginacao")
//lista de itens ############################### inicio


   
if(itemsCadList == null){
   paginacao1.style.display ="none"
   message.innerHTML = 
   `     
   <h1 class="msgNull"> Nada cadastrado ainda </h1>
   
   `
}else{

   

   paginacao1.style.display ="block"
  

   const itensPagina = itemPorPagina
   // const itensPagina = 5


   totalPages = Math.ceil(itemsCadList.length / itensPagina)

   const cont = page * itensPagina

   const increment = (page * itensPagina) - itensPagina


  
   for(let pa = 1 ; pa < totalPages+1 ; pa++){

   paginacao.innerHTML += 
   `   
   <li class="page-item " onclick="change(${pa})"><a class="page-link" style="cursor: pointer ;"> ${pa}</a></li>
   `

}
function procurarItem(){

      let procura = document.getElementById('campoBusca').value
   if(procura.length === 0){
      alert("Campo vazio")

       icrem = (page * itensPagina) - itensPagina
      con = page * itensPagina
      alert(icrem)
   }else{
      alert(procura)
       icrem = 0
      con = itemsCadList.length
      alert(icrem)
   }
   
   
}



for (let li = increment; li < cont; li++) {
   
  console.log('li', li)
//Corpo da tabela
showBody.innerHTML +=
`
<tr class="linha_item " id="linha-${li}" >
   <td >${itemsCadList[li]['newItem']}</td>
   <td class="centralizar">${itemsCadList[li]['newSelect']}</td>
   <td class="centralizar">${itemsCadList[li]['newResolucao']}</td>
   <td class="centralizar ">
      <div class="form-check form-switch centralizar alinhar">
      <input  class="form-check-input some" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked onchange="hideRow(${li})">
      <label  class="form-check-label" for="flexSwitchCheckChecked"></label>
      </div>
   </td>
   <td   class="centralizar hideColumn" > ${itemsCadList[li]['newData']} </td>
   <td   class="centralizar hideColumn" > ${itemsCadList[li]['newLogado']} </td>
   <td class="centralizar">
   <button class="btnEdit" onclick="editItem('${li}')"><i class="bi bi-pencil"></i></button>   
   </td>   
 </tr>
`
   }
   
}   

function hideRow(line){
   let switche = document.getElementsByClassName('some')
   console.log('asasdsa',switche[line])
   // switche.style.opacity = "50%"

}


// console.log('switch', switche[2].checked)
// switche[0].addEventListener('change', desaparece)

// function desaparece(){
//    alaert(switche)
// }

// ####################################################################################################
// ####################################################################################################

// Funções que mostram e escondem o menú lateral
function hideEsc(){

   let hideCad = document.getElementById("cadastrando")
   hideCad.style.display = "none"
   
}

function showMenu(){

    let hideCad = document.getElementById("cadastrando")
   hideCad.style.display = "block"
// hideCad.style.opacity = "50%"
}






