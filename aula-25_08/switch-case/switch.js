//switch

let cnh = "C"

switch (cnh) {
    case "A":
    case "a":   
        console.log("Pode digirir moto")
        break;

    case "B":
    case "b":   
        console.log("Pode digir carro")
        break;    
    case "C":
    case "c":
        console.log("Pode digir caminhões e veículos")
        break;    
    case "D" :
    case "d":    
        console.log("Pode ônibus e micro-ônibus")
        break;    
    case "E":
    case "e":   
        console.log("Pode digir carretas")
        break;    

    default:
        console.log("Não vai dirigir legalizado")
        break;
}