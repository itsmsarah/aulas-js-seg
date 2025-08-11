//se preço for maior que 100, aplica o desconto de 10%, caso contrário mantém o preço

let price = 100
let discount =0.1

result = ((price > 100 && price) * (1 -discount)) || price

//se o amarelo for falso, ele cai no preço direto

// if(preco >100){
//     preco = preco - (preco * desconto)
//     console.log(preco)
// } else{
//     console.log(`Ops não teve desconto, preço continua ${preco}`)
// }

// console.log(price * discount) //vai receber 10 de desconto
// console.log(1- discount)// 0.9 // vai te mostrar o real valor q vc deve multiplicar do resultado
// console.log(discount*0.9)
