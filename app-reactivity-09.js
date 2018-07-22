const { BehaviorSubject, from } = require('rxjs');

let data = { price: 5, quantity: 2 };

let storage = [];
storage.push(() => console.log('Change happened, recalculating total...'))
storage.push(() => console.log('Total: ', data.price * data.quantity))
const changeDetection = from(storage);

data = new Proxy(data, {
    get(obj, key) {
        return obj[key];
    },
    set(obj, key, newVal) {
        obj[key] = newVal;
        changeDetection.subscribe(f => f());
        return true;
    }
});


data.price = 20
data.quantity = 3