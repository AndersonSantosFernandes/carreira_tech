//Calcula formula de Bhaskara

const claculaBhaskara = () => {
    //Inputs para entradas    
    let vlrA = document.getElementById('valor__de__a').value
    let vlrB = document.getElementById('valor__de__b').value
    let vlrC = document.getElementById('valor__de__c').value

    //inputs para saídas
    let resultDelta = document.getElementById('valor__de__delta')
    let resultRaiz1 = document.getElementById('valor__raiz_1')
    let resultRaiz2 = document.getElementById('valor__raiz_2')

    let delta = Math.pow(vlrB, 2) - 4 * vlrA * vlrC
    console.log(delta)

    let raiz1 = (-vlrB + Math.sqrt(delta)) / (2 * vlrA)
    let raiz2 = (-vlrB - Math.sqrt(delta)) / (2 * vlrA)

    //Saída de resultados
    resultDelta.value = delta
    resultRaiz1.value = raiz1
    resultRaiz2.value = raiz2


}

const calculateTemperature = () => {


let getTemperature = document.getElementById('value__temperature')

    class Temperatura {

        constructor(valorTemperatura) {
            this.valorTemperatura = valorTemperatura
            
        }

        calcular = () => {

            let returnResults = document.getElementById("return__temperature")
            let selectConvert = document.getElementsByName('tempSelect')

            if (selectConvert[0].checked) {

                let retornandof = (this.valorTemperatura * 9 / 5) + 32                

                returnResults.innerHTML = 
                `
                <h3>${this.valorTemperatura} Graus Celcius equivalem a</h3>
                <br>
                <h3>${retornandof.toFixed(1)} Fahrenheit</h3>
                `



            } else if (selectConvert[1].checked) {

                let retornandoC = (this.valorTemperatura - 32) * 5 / 9

                returnResults.innerHTML = 
                `
                <h3>${this.valorTemperatura} fahrenheit equivalem a</h3>
                <br>
                <h3>${retornandoC.toFixed(1)} graus celcius</h3>
                `
                
            }

          
        }

    }

    const convertendo = new Temperatura(getTemperature.value)

    convertendo.calcular()




}

//Jogo adivinha no chute:
//função que sorteia o número randomoco no jogo adivinha
function sorteia(){
    var variacao = 0
     chances = 1
     
    var rad01 = window.document.getElementsByName('valor')
    
    if(rad01[0].checked){
        variacao = 10
        chances = 4
    }else if(rad01[1].checked){
        variacao = 50
        chances = 6
    }else if(rad01[2].checked){
        variacao = 100
        chances = 8
    }
    var resultado = window.document.getElementById('direita')
     resultado.innerHTML = 
     `
     <h3>
     Tente adivinhar o número secreto entre 1 e ${variacao}<br>
     Você terá ${chances} chances...
    </h3>
     <input type="number" name="jogador" id="play">

     
     `
   // window.alert(variacao)
     secreto = Number.parseInt(Math.random()*variacao+1)
    var sorteio = window.document.getElementById('sort')
    // chances1 = Number.parseInt(chances.value)
    sorteio.innerHTML = 
    `
    <input class="btn" type="button" value="Adivinhar" id="advnh" onclick="adivinhar()">
    <audio id="music" autoplay>
    <source src="audio/go.wav" type = "audio/mpeg">
   </audio>
   
    ` 
    var jogadas = window.document.getElementById('esquerdaIn')
    jogadas.innerHTML =   ` <h3>
    Tente sdivinhar chutando para mais ou para menos
</h3>`
}
//função das adivinhações no jogo adivinha
function adivinhar(){
    var ganhou = false
    var jogando = window.document.getElementById('play')
    var jogando1 = Number.parseInt(jogando.value) 
   
    if(jogando1 > secreto){
        var jogadas = window.document.getElementById('esquerdaIn')
        chances = chances-1
        jogadas.innerHTML = 
        `
        
        <h3>O número escolhido é maior que o secreto!<br>Tem mais ${chances} chances </h3>
        <audio id="music" autoplay>
        <source src="audio/games01.mp3" type = "audio/mpeg">
       </audio>
        `
        
    }else if(jogando1 < secreto){
        var jogadas = window.document.getElementById('esquerdaIn')
        chances = chances-1
        jogadas.innerHTML = 
        `
        <h3>O número escolhido é menor que o secreto<br>Tem mais ${chances} chances</h3>
        <audio id="music" autoplay>
        <source src="audio/games02.mp3" type = "audio/mpeg">
       </audio> 
        `
       
    }else if(jogando1 == secreto){
        ganhou = true
       /* var jogadas = window.document.getElementById('esquerdaIn')
    
        jogadas.innerHTML = 
        `
        Parabéns! Acertou! O número é ${secreto}
        `*/
    }
    if(chances == 0){
         var resultado = window.document.getElementById('direita')
    resultado.innerHTML = 
    `
    <h3>Suas tentativas acabaram <br> Tente novamente, pois o número secreto foi:  ${secreto}</h3>
    <br>
    <h3> Escolha um intervalo e aperte em sortear para recomeçar</h3>
    <br>
    <input class="btn" type="button" value="Sortear" onclick="sorteia()">
    <audio id="music" autoplay>
    <source src="audio/vaia.wav" type = "audio/mpeg">
   </audio>
    `
    var jogadas = window.document.getElementById('esquerdaIn')
    
    jogadas.innerHTML = 
    `
    <img id="fogos" src="./img/perdeu.gif" width="300" height="135" alt="perdeu o jogo">
    
    `

    }else if(ganhou == true){
        var resultado = window.document.getElementById('direita')
    resultado.innerHTML = 
    `
    <h1>Muito bem! <br> O número sorteado foi ${secreto}</h1>
    <br>
    <h3>Escolha um intervalo e aperte em sortear para recomeçar</h3>
    <br>
    <input class="btn" type="button" value="Sortear" onclick="sorteia()">
    <audio id="music" autoplay>
    <source src="audio/applausos.wav" type = "audio/mpeg">
   </audio>
    `
    var jogadas = window.document.getElementById('esquerdaIn')
    
    jogadas.innerHTML = 
    `
    
    <img id="fogos" src="./img/fogos.gif" width="300" height="135" alt="fogos de artifício">
    
    `
    
}  
}


