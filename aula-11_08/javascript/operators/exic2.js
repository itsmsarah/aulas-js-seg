//status media > 7 ( aprovado); <6 r(recuperação ) <= 5 (Reprovado)

// let media = 8

// media > 7 

const n1 = 10, n2 =3, n3 = 5
const media = (n1+n2+n3)/3

avaliacao = (media >=7 && "Aprovado") || (media >=5 && "Recuperação") || (media <= 5 && "Reprovado")