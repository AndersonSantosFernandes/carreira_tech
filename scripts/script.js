//Obtenção de data
const dataAtual = new Date()
//padStart(x,x) serve para quando se deseja mostrar um numero sosinho
//como dia, de 1 a 9 o 0 é acrescentado a esquerda             
const dia = String(dataAtual.getDate()).padStart(2, '0')
// O mes começa em '0' necessitando adicionar mais 1 pra ficar correto
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
const ano = String(dataAtual.getFullYear())

const dataCompleta = `${dia}/${mes}/${ano}`


const verificaDisponibilidade = JSON.parse(localStorage.getItem('cadastrado'))
// console.log(verificaDisponibilidade)
function gravar() {

    const getNome = document.getElementById('userCadastro').value
    const getEmail = document.getElementById('emailCadastro').value
    const getSenha = document.getElementById('passwordCadastro').value
    const getConfirma = document.getElementById('confPasswordCadastro').value

    let verificar = true
    //Se ainda não houver nenhum cadástro, não faz a verificação de duplicidade de e-mail
    if (verificaDisponibilidade != null) {
        for (let i = 0; i < verificaDisponibilidade.length; i++) {
            // Impede decadastrar e-mail repetido
            if (verificaDisponibilidade[i]['emailUs'] == getEmail) {
                // alert(`O e-mail ${getEmail} já está em uso, tente outro`)
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `O email ${getEmail} já está em uso`,
                    showConfirmButton: false,
                    timer: 2500
                });

                verificar = false
                break;
            }
        }
    }



    if (getNome == false || getEmail == false || getSenha == false) {
        // alert('Senhas não conferem. tente outa vez...')
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Preencha todos os campos",
            showConfirmButton: false,
            timer: 1500
        });
    } else {



        //Verificação de senhas
        if (getSenha === getConfirma) {

            //Se tentar um e-mail já cadastrado não executa esse trecho
            if (verificar == true) {

                //Pega do localStorage, recebe o push e retornar atualizado 
                arrayUsuarios = []

                //Clase Usuarios
                class Usuarios {

                    constructor(nome, email, senha, dataCadastro) {
                        this.nome = nome
                        this.email = email
                        this.senha = senha
                        this.dataCadastro = dataCadastro
                    }

                    salvarStorage() {

                        //cria um ojeto con informações do usuário
                        const objetoUsuario = { nomeUs: this.nome, emailUs: this.email, senhaUs: this.senha, dataCad: this.dataCadastro }

                        //Pega o array existente no localStorage e converte para objeto
                        arrayUsuarios = JSON.parse(localStorage.getItem('cadastrado')) || []

                        //Faz o push com mais um objeto
                        arrayUsuarios.push(objetoUsuario)

                        //Salva no localstorage atualizado com a nova informação
                        localStorage.setItem('cadastrado', JSON.stringify(arrayUsuarios))

                        location.href = "./index.html"

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Cadastrado com êxito",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
                // Instanciando a classe Usuarios
                const salvando = new Usuarios(getNome, getEmail, getSenha, dataCompleta)
                // Executando o método para salvar novo usuário
                salvando.salvarStorage()

            }
        } else {
            // alert('Senhas não conferem. tente outa vez...')
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Senhas não conferem",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
}



// função que muda login para cadástro
function girarCadastro() {
    rodado = document.getElementById("formInit")
    form1 = document.getElementById("init1")
    btn1 = document.getElementById("btn1")
    form2 = document.getElementById("init2")
    btn2 = document.getElementById("btn2")
    //  = document.getElementById("")


    form2.style.display = 'block';
    form1.style.display = 'none';
    rodado.style.transform = ' perspective(600px) rotatey(540deg)';
    // rodado.style.backgroundColor ='purple';
    form1.style.opacity = '0';
    form2.style.opacity = '1';
    btn1.style.opacity = '0';
    btn2.style.opacity = '1';
}
//função que faz o inverso da anterior
function girarLogin() {
    rodado = document.getElementById("formInit")
    form1 = document.getElementById("init1")
    btn1 = document.getElementById("btn1")
    form2 = document.getElementById("init2")
    //  = document.getElementById("")
    //  = document.getElementById("")


    form2.style.display = 'none';
    form1.style.display = 'block';
    rodado.style.transform = ' perspective(600px) rotatey(0deg)';
    // rodado.style.backgroundColor ='aqua';
    form1.style.opacity = '1';
    form2.style.opacity = '0';
    btn1.style.opacity = '1';
    btn2.style.opacity = '0';

}

//Renderiza o menú em todas as páginas ao criar uma sessão
if (sessionStorage.getItem('usuarioLogado')) {

    let cabecalho = document.getElementById('navegando')
    cabecalho.innerHTML =
        `

<div class="container-fluid ">

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<ul class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav navegar ">
        <li class="nav-iten h2"><a class="nav-link " aria-current="page" href="../home/home.html">HOME</a></li>
        <li class="nav-iten h2"><a class="nav-link " aria-current="page" href="../cadastroPessoas/cadastrarPessoas.html">Cadastrar</a></li>
        <li class="nav-iten h2"><a class="nav-link " aria-current="page" href="../listaPessoas/lista.html">Lista de Pessoas</a></li>
        <li class="nav-iten h2"><a class="nav-link " aria-current="page" href="../utilidades/utilidades.html">Utilidades</a></li>
        <li class="nav-iten h2"><a class="nav-link " aria-current="page" href="../users/users.html">Admins.</a></li>
        <li class="nav-iten h2"><a class="nav-link " aria-current="page" href="../sobre/sobre.html">Sobre</a></li>
           
        </div>

</ul>
</div>

  `

}

//função que dá start nas ações de login
function logar() {

    const retornoLogado = JSON.parse(localStorage.getItem('cadastrado'))
    // console.log(retornoLogado[0]['emailUs'])

    let emailUsuario = document.getElementById("email").value
    let senhaUsuario = document.getElementById("password").value

    //Verificação no "BD" se existe usuario e senha compa´tivel

    // console.log("Retorno logado", retornoLogado.length)

    for (let i = 0; i < retornoLogado.length; i++) {
        // percorre o array procurando email e senha que combinam
        if (emailUsuario == retornoLogado[i]['emailUs'] && senhaUsuario == retornoLogado[i]['senhaUs']) {

            // Encontrando a combinação, cria uma com o nome do usuário

            objetoLogado = { nomeSessao: retornoLogado[i]['nomeUs'], emailSessao: retornoLogado[i]['emailUs'] }
            sessionStorage.setItem('usuarioLogado', JSON.stringify(objetoLogado))


            // alert("Logado com sucesso")
             location.href = "./pages/home/home.html"
           
            break;
        }

    }

    // Se não encontrar e-mail e senha que combinam a sessão não é criada e não executa o login
    if (!sessionStorage.getItem('usuarioLogado')) {
        // alert('E-mail ou senha inválidos ou usuário não cadastrado')
        Swal.fire("E-mail ou senha nválidos ou não cadastrado!");
    }

}
let showUsuario = document.getElementById('nomeUsuario')
let usando = JSON.parse(sessionStorage.getItem('usuarioLogado'))
// console.log('Usando',usando.emailSessao)
// Caso haja uma sessão, é exibido onome do usuário logado no header da página home
if (sessionStorage.getItem('usuarioLogado') != null) {
    showUsuario.innerHTML = `Olá, ${usando.nomeSessao}`
}

//Arrai de apoio
arrayDelete = []

//Deletar usuário
function delUsuario(chave) {

    // arrayDelete[] recebe array de objetos do localStorage
    arrayDelete = JSON.parse(localStorage.getItem('cadastrado'))

    // Retira o objeto interno através da chave escolhida vinda peta função
    arrayDelete.splice(chave, 1)

    //Feita a alteração grava de volta no localStorage atualizado
    localStorage.setItem('cadastrado', JSON.stringify(arrayDelete))

    //Dá um 'refresh' na pagina para já mostrar a alteração
    location.href = "./home.html"

}

// Função que encerra a sessão
const encerrarSessao = () => {
    sessionStorage.clear('usuarioLogado')
    //Redireciona de volta para index
    location.href = "../../index.html"
}
