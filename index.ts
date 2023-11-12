const band = {
    members: {
        current: [
            {name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass']},
            {name: 'Lucia', age: 49, plays: ['vocals', 'synth']},
            {name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth']},
            {name: 'Steve', age: 55, plays: ['guitar']}
        ],
        past: [
            {name: 'Raymond', age: 57, plays: ['vocals', 'synth']},
            {name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth']},
            {name: 'Gunter', age: 57, plays: ['guitar', 'synth']}
        ]
    }
};

console.log(band.members)

// Add new prop `all` under `members`

function addPropertyAll() {

}

/** 5.1. `all`: type is Array of string, contains all the members' name (both current and past)

    5.2. *Lowercase* all the members' name in `all`

    5.3. Sort `all` by memebers' `age` **DESC**

    5.4. Then sort `all` by memebers'`name` **ASC** (Notice: "gunter" is before "raymond" in the result) */



// npm run start command