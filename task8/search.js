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

export default search;
