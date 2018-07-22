class Storage {
    constructor() {
        this.subscribers = []
    }
    record() {
        if (target && !this.subscribers.includes(target)) {
            this.subscribers.push(target)
        }
    }
    replay() {
        this.subscribers.forEach(sub => sub())
    }
}

const storage = new Storage()

let price = 5
let quantity = 2
let total = 0

let target = () => { total = price * quantity }
storage.record()
target()

console.log(total) // => 10 
price = 20
console.log(total) // => 10 
storage.replay()
console.log(total) // => 40