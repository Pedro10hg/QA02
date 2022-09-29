function verificarmaioidade(idade) {
    var maior = ""
    if (idade >= 18) {
        maior = "sim"
    } else {
        maior = "nao"
    }
    return maior
}

function verificardia(dia) {
    var xd = ""
    if (dia != 28) {
        xd = "dia nao atual"
    } else {
        xd = "dia atual"
    }
    return xd
}

function reprovado(n1,n2,n3,n4) {
    var media = ((n1+n2+n3+n4)/4)
    var aprov = ""
    if (media >= 7) {
        aprov = "aprovado"
    } else {
        aprov = "reprovado"
    }
    return aprov
}

module.exports = {verificarmaioidade, verificardia, reprovado}