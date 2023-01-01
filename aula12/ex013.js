var agora = new Date()
//var diaHora = agora.getHours()
//var diaMinuto = agora.getMinutes()
//var semana = agora.getDate()
var diaSemana = agora.getDay()

//console.log(diaHora)
//console.log(diaMinuto)
//console.log(semana)

//console.log(semana)

switch (diaSemana) {
    case 0:
        console.log('Domingo')
        
        break;
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break

    default:
        break;
}
