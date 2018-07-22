const { BehaviorSubject, from } = require('rxjs');

let data = { price: 5, quantity: 2 };

let storage = [];
storage.push(() => console.log('Change happened, recalculating total...'))
storage.push(() => console.log('Total: ', data.price * data.quantity))
const changeDetection = from(storage);

Object.keys(data).forEach(key => {
    const subject = new BehaviorSubject(data[key]);
    Object.defineProperty(data, key, {
        get() {
            return subject.getValue()
        },
        set(newVal) {
            subject.next(newVal)
            changeDetection.subscribe(f => f());

        }
    })
    subject.subscribe(val => console.log(val))
})



data.price = 20
data.quantity = 3