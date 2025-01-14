
if(!sessionStorage['paginacao']){
    sessionStorage.setItem('paginacao', 1)
}



function change(nrPage){

    sessionStorage.setItem('paginacao', nrPage)
    location.href = "index.html"

}

 
function proxima(){

    

    paginando = sessionStorage.getItem('paginacao')

    paginandoUp = parseInt(paginando) + 1

    sessionStorage.setItem('paginacao', paginandoUp)
    location.href = "index.html"
}

function anterior(){
    let pageDown = document.getElementById('pageItemDown')

    paginando = sessionStorage.getItem('paginacao')

    paginandoDown = paginando - 1

    sessionStorage.setItem('paginacao', paginandoDown)

   

    if(paginandoDown <= 1){

        // alert(paginandoDown)
        pageDown.style.display = "none"
    }else{
        pageDown.style.display = "block"
    }

    // location.href = "index.html"
}


//esconder duas colunas de informação
function information(){
    let showInformation = document.getElementById("flexSwitchCheckChecked")
    
    if(showInformation.checked == true){ 
       
       let estilo = document.getElementById("styleShow")
       estilo.innerHTML = 
       `
       .hideColumn{
          display: "";
             
             margin-left: 40px;
      }
       `
    }else{
      
       let estilo = document.getElementById("styleShow")
       estilo.innerHTML = 
       `
       .hideColumn{
          display: none;
          
      }
       `
    }
 }


 function hideRow(linhaCheck){

    // console.log(linhaCheck.checked)


    var line = linhaCheck.parentNode.parentNode.parentNode;
 if(linhaCheck.checked){
    line.classList.remove('disabled')
  
 }else{
  
  line.classList.add('disabled')
 }

}


//buscar item específico
const tabelaItens = document.getElementById('bodyPersons')
const inputBusca = document.getElementById('campoBusca')
let btn = document.getElementById('buscaBtn')

inputBusca.addEventListener('keyup', () => {

// btn.addEventListener('click', () => {

    let expressao = inputBusca.value.toLowerCase()

    if (expressao.length === 1) {
        return
    }

    // let linhas = document.getElementsByTagName('tr')
    let linhas = document.getElementsByClassName('aa')

    for(let posicoes in linhas){

        if(true === isNaN(posicoes)){
            continue
        }
      let conteudoDaLinha = linhas[posicoes].innerHTML.toLowerCase()

      if(true === conteudoDaLinha.includes(expressao)){
        linhas[posicoes].style.display = ''
      }else{
        linhas[posicoes].style.display = 'none'
      }
    }
})
