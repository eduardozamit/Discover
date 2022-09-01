/*
# Tradução de stack é pilha ( como uma pilha de livros)

* linear, um após o outro
* o último a entrar na pilha é o primeiro a sair

## Métodos fundamentais

* push(): adicionar um elemento a pilha
* pop(): remover o elemento do topo da pilha
* peek(): obter o elemento do topo da pilha

Outros métodos poderão ser implementados como size() para mostrar o tamanho da pilha
*/

// Passo 1: Modelagem:
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }
    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop 
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

// Passo 2: Utilizando
const stack = new Stack()

// Adicionar dados
stack.push("learning")
stack.push("data")
console.log(stack.push("structures"))