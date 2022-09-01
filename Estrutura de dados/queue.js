class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da pila!`)
    }
}
// 2: Utilizando
const fila = new Queue()

fila.enqueue("Duds")
fila.enqueue("Yasmin")
fila.enqueue("Pinho")

fila.dequeue()
fila.dequeue()
fila.dequeue()