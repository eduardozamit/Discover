//Neste comando ocorre de o texto (Mostrar!) ser lançado antes do (Done!) pois o nodeJS é assincrono!

const timeOut = 3000
const finished = () => console.log("done!")

setTimeout(finished, timeOut)
console.log("mostrar!")