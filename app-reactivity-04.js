class Storage {
    constructor() {
        this.subscribers = []
    }
    subscribe() {
        if (target && !this.subscribers.includes(target)) {
            this.subscribers.push(target)
        }
    }
    notify() {
        this.subscribers.forEach(sub => sub())
    }
}

const storage = new Storage()

let price = 5
let quantity = 2
let total = 0

let target = () => { total = price * quantity }
storage.subscribe()
target()

console.log(total) // => 10 
price = 20
console.log(total) // => 10 
storage.notify()
console.log(total) // => 40