const currentYear = new Date().getFullYear();

const name_date = (name, birthYear = null) => {
    if (birthYear != null) {
        var age = currentYear - birthYear;
        return `Я ${name}, мені ${age} років.`;
    }
    return `Я ${name}.`;
};

console.log('2 завдання')
console.log(name_date('Саньок', 2006));
console.log(name_date('Мішаня'));

class Human {
    constructor(name, age, weight, gender) {
        this.name = name;     
        this.age = age;       
        this.weight = weight;
        this.gender = gender;
    }

    getInfo(prop = null) {
        if (prop === null) {
            return {
                name: this.name,
                age: this.age,
                weight: this.weight,
                gender: this.gender
            };
        }
        return this[prop];
    }

    greeting() {
        return "Hi!";
    }
}

var person1 = new Human('Саня', 18, 80, 'man');

console.log('4 завдання')
console.log(person1.getInfo());         
console.log(person1.getInfo('name'));   
console.log(person1.getInfo('age'));    
console.log(person1.greeting());

class Man extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'man');
    }

    greeting() {
        return `Привіт! Я ${this.name}, мені ${this.age} років.`;
    }
}

class Woman extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'woman');
    }

    greeting() {
        return `Привіт! Я ${this.name}.`;
    }
}

var man = new Man('Санічка', 18, 80);
var woman = new Woman('Стефанія', 27, 50);

console.log('5 завдання')
console.log(man.greeting());
console.log(woman.greeting());

var people = [
    new Man('Олександр', 20, 80),
    new Woman('Настя', 21, 79),
    new Man('Алекс', 22, 78),
    new Woman('Маша', 23, 77),
    new Man('Орест', 25, 76),
    new Woman('Катя', 25, 75),
    new Man('Анатолій', 26, 74),
    new Woman('Таня', 27, 73),
    new Man('Павлик', 28, 72),
    new Woman('Ганна', 29, 71),
    new Man('Сальвадор', 30, 70),
    new Woman('Юля', 31, 69),
    new Man('Вітя', 32, 68),
    new Woman('Дарина', 33, 67),
    new Man('Гріша', 34, 66)
];

console.log('6 завдання')
people.forEach(person => console.log(person.greeting()));

const DELAY_TIME = 2000;

const search = (list, searchField, searchValue) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = list.filter(person => person[searchField] === searchValue);
            if (results.length > 0) {
                resolve(results);
            } else {
                console.log(`За пошуком по ${searchField}:${searchValue} нічого не знайдено.`);
            }
        }, DELAY_TIME);
    });
};

console.log('7 завдання')
search(people, 'age', 40)
    .then(results => {
        console.log('Знайдені збіжності:')
        results.forEach(person => {
            console.log(person.greeting());
        });
    })
    .catch(error => {
        console.error(error);
    });