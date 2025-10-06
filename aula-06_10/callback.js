

// function suco(parametro){
//     console.log(`Suco com sabor de ${parametro}`)
// }
// suco("Morango")

//função com parametro precisa passar um valor

//callback é uma função passada por parametro para uma outra função
// function suco2(){

// }
// suco(suco2)

// function assarPizza(callback){
//     setTimeout(()=>{
//         console.log("Pizza pronta")
//         callback()
//     },3000)

// }

// function comerPizza(){
//     console.log("Comendo pizza")
// }

// console.log("Preparando a pizza")

// assarPizza(comerPizza)

// function pedirComida(callback){
//     setTimeout(()=>{
//         console.log("Pedido pronto!")
//         callback()
//     },3000)
// }
// function comerComida(){

//     console.log("Comendo a comida")
// }

// pedirComida(comerComida)

// let nome

// function buscarUsuario(callback){
//     setTimeout(() => {
//         console.log("Buscando usuário")        
//         nome = "Matheus"
//         callback()
//     }, 3000)
// }

// function usuario(){
//     console.log(`Nome do usuário é: ${nome}`)
// }

// console.log("Iniciando")
// buscarUsuario(usuario)

function verificarResultado(callbackSucesso,callbackErro){
    let result = 1+1

    if(result ==2){
        callbackSucesso()

    }else{
        callbackErro()
    }
}

function sucesso(){
    console.log("Uhuuu! Número 2")
}
function erro (){
    console.log("Ops, errou girl")
}

verificarResultado(sucesso,erro)

//colocar na ordem sempre