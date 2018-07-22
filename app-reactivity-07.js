const { from } = require('rxjs');

let data = { price: 5, quantity: 2 };

let storage = [];
storage.push(() => console.log('Change happened, recalculating total...'))
storage.push(() => console.log('Total: ', data.price * data.quantity))
const changeDetection = from(storage);

Object.keys(data).forEach(key => {
    let value = data[key];
    Object.defineProperty(data, key, {
        get() {
            return value;
        },
        set(newVal) {
            value = newVal;
            changeDetection.subscribe(f => f());

        }
    })
})

data.price = 20
data.quantity = 3


