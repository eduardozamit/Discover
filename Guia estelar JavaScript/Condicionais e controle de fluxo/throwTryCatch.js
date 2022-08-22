// Throw (disparar/lançar)

function sayMyName(name = '') {
    if (name === '') {
        throw("Nome é obrigatório")
    }

    console.log('depois do erro')
}

// Try...catch (tentar...pegar)
try {
    sayMyName()
} catch(e) {
    console.log(e)
}
