// const verificarResultado = new Promise ((resolve,reject)=>{
//     let result = 1+1
//     if(result ==2){
//         resolve("uhu girl, nmr 2")
//     } else{
//         reject("vish gir")
//     }
// })

// verificarResultado.then((res)=>console.log(res))
// .catch((err)=> console.log(err))

const buscarUsuario = new Promise ((resolve,reject)=>{
    console.log("Buscando usuário no banco de dados")

    setTimeout(()=>{
        const encontrado = true
        if(encontrado){
            resolve({nome:"Beyonce", idade: 44})
        }else{
            reject("Usuário não encontrado")
        }
    },3000)
})
buscarUsuario.then((res)=>console.log(res.nome))