let price = 5
let quantity = 2
let total = 0

let storage = []

function record() {
    storage.push(target)
}

function replay() {
    storage.forEach(run => run())
}

let target = () => { total = price * quantity }
record()
target()

price = 20
console.log(total) // => 10
replay()
console.log(total) // => 40