const reset = ()=>{
    location.href = "calculos.html"
  }
  
  function sortearNumero(retInit, retFin) {
    let titleSort = document.getElementById("titleSort")
    let returnSorteio = document.getElementById("returnSort")
    let contando = document.getElementById('contador')
 
    let numeroAleatorio = Math.floor(Math.random() * (retFin - retInit + 1)) + retInit;
    console.clear()
    console.log(`Número sorteado: ${numeroAleatorio}`);
  
    titleSort.innerHTML=
      `
      <h2>O número sorteado foi:</h2>
      `
  
  
    returnSorteio.innerHTML =
      `
          ${numeroAleatorio}
          `
    returnSorteio.style.width = "300px"
    returnSorteio.style.height = "300px"
    returnSorteio.style.opacity = "1"
    
    contando.style.display = "none"

    if(numeroAleatorio >= 1000){
        returnSorteio.style.fontSize = "120px"
    }else{
        returnSorteio.style.fontSize = "150px"
    }
    
  }
  
  function aguardarPorSegundos() {
   
    let titleSort = document.getElementById("titleSort")
    let initialValue = parseInt(document.getElementById('initial').value)
    let finalValue = parseInt(document.getElementById('final').value)
    let returnSorteio = document.getElementById("returnSort")
    let contando = document.getElementById('contador')
  
    if (initialValue < 1 || finalValue < 1 || !initialValue || !finalValue) {
  
      // alert('Insira qualquer valor maior que 0')
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insira qualquer valor maior que 0",
        
      });
  
    } else {
  
      titleSort.innerHTML=
      `
      <h3>Sorteando...</h3>
      `
  
      if (initialValue >= finalValue) {
        console.log("O número inicial deve ser menor que o número final.");
        // alert('O número inicial deve ser menor que o número final.')
        Swal.fire({
          icon: "error",
         
          text: "O número inicial deve ser menor que o final.",
          
        });
      } else { 
  
        
        returnSorteio.style.width = "0px"
        returnSorteio.style.height = "0px"
        returnSorteio.style.opacity = ".11"
        returnSorteio.style.fontSize = "1px"
        contando.style.display = "flex"
        return new Promise((resolve) => {
          setTimeout(() => {
            sortearNumero(initialValue, finalValue); 
          }, 2 * 1000); 
        });
      }
    }
  
  } 
  
