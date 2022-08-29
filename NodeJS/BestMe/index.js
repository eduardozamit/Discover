const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar",
    "O que me deixou feliz hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}
 
ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
        Bacana Duds!

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu hoje foi:
        ${answers[1]}

        O que você poderia fazer para melhorar:
        ${answers[2]}

        O que te deixou feliz hoje foi:
        ${answers[3]}

        Volte amanhã para novas reflexões
        
    `)
})