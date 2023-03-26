let instance;
let counter = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instance!");
        }
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

const singletonCounter = Object.freeze(new Counter());
// const counter2 = new Counter(); // Error: You can only create one instance!

export default singletonCounter;
