

function PrecoFinal(nomeCliente,valorCompra){
    let desconto
    if(valorCompra < 500){
    console.log(`Cliente ${nomeCliente} fez uma compra de ${valorCompra} , o desconto aplicado foi de 5% = ${desconto = valorCompra * 0.05} e o valor final é ${valorCompra - desconto}`)
 } else if(valorCompra >501 && valorCompra <1000 ){
     console.log(`Cliente ${nomeCliente} fez uma compra de ${valorCompra} , o desconto aplicado foi de 10% = ${desconto = valorCompra * 0.1} e o valor final é ${valorCompra - desconto}`)
 } else {
    console.log(`Cliente ${nomeCliente} fez uma compra de ${valorCompra} , o desconto aplicado foi de 15% = ${desconto = valorCompra * 0.15} e o valor final é ${valorCompra - desconto}`)
 }
}
PrecoFinal("Joao", 2000 )