import Human from './Human.js';

class Man extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'man');
    }

    greeting() {
        return `Привіт! Я ${this.name}, мені ${this.age} років.`;
    }
}

export default Man;
