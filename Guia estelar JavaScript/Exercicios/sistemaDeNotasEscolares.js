

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreE = score >= 0 && score <= 59

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    }else if (scoreC) {
        scoreFinal = "C"
    }else if (scoreD) {
        scoreFinal = "D"
    }else if (scoreE) {
        scoreFinal = "E"
    }else {
        scoreFinal = "Nota inválida"
    }
    return scoreFinal
}

console.log(getScore(100))