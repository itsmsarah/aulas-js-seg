let nome = document.getElementById ("nome")
let username = document.getElementById ("username")
let email = document.getElementById ("email")
let telefone = document.getElementById ("telefone")
let rua = document.getElementById ("rua")
let cidade = document.getElementById ("cidade")
let codigopostal = document.getElementById ("codigopostal")
let nomeempresa = document.getElementById ("nomeempresa")


fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=> res.json())
.then((data)=>console.log(
    nome.innerText = data[0].name,
    username.innerText = data[0].username,
    email.innerText = data[0].email,
    telefone.innerText = data[0].phone,
    rua.innerText = data[0].address.street,
    cidade.innerText = data[0].address.city,
    codigopostal.innerText = data[0].address.zipcode,
    nomeempresa.innerText = data[0].company.name

   
))
.catch((err)=>console.log(err))
