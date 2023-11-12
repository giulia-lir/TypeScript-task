import {Band, BandMembers, BandMember} from './interfaces';

const band : Band = {
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

console.log(band)

// Add new prop `all` under `members`
function addPropertiesToObject(existingObject : Band) : Band {
    // 5.1. `all`: type is Array of string, contains all the members' name (both current and past)
    const all: string[] = [];
    
    existingObject.members.current
      .concat(existingObject.members.past)
      // 5.4. Sort `all` by members'`name` **ASC** 
      .sort((a, b) => a.name.localeCompare(b.name))
      // 5.3. Sort `all` by members' `age` **DESC**
      .sort((a, b) => b.age - a.age)
      .forEach((member) => {
        // 5.2. *Lowercase* all the members' name in `all`
        all.push(member.name.toLowerCase());
      });
  
    const bandRevised : Band = {
      members: {
        ...existingObject.members,
        all,
      },
    };
    return bandRevised;
}

const objectWithNewProp = addPropertiesToObject(band);
console.log(objectWithNewProp);

// npm run start command