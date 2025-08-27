let fruta = "uva"

switch (fruta) {
    case "uva":
    case "UVA":   
        console.log("Está R$5,00")
        break;
    case "laranja":
    case "LARANJA":    
        console.log("Está R$10,00 o kg")
        break;
    case "morango":
    case "MORANGO":
        console.log("Está R$15,00 o kg")
        break;
    case "melancia":
    case "MELANCIA":    
        console.log("Está R$30,00")
        break;

    default:
        break;
}
//Multi Caso
let animal = "galinha"

switch (animal) {
    case "vaca":
    case "galinha":
    case " burro":
    case "passarinho":
    console.log("Esse animal irá para arca de noé") 
    break;
    case"dinossauro":
    default:
    console.log("Não vai para a arca")             
        break;

  
}