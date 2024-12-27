
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

        alert(paginandoDown)
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
             padding: 30px;
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