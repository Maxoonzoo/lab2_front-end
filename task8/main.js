import search from './search.js';
import people from './peopleArray.js';


console.log("Пошук за віком 25");
search(people, 'age', 25)
    .then(results => {
        console.log('Знайдені збіжності:');
        results.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => console.error(error));

console.log("Пошук за ім'ям 'Алекс'");
search(people, 'name', 'Алекс')
    .then(results => {
        console.log('Знайдені збіжності:');
        results.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => console.error(error));

console.log("Пошук за віком 40");
search(people, 'age', 40)
    .then(results => {
        console.log('Знайдені збіжності:');
        results.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => console.error(error));
