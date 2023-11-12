import { Band } from './interfaces';

// Add new prop `all` under `members`
export function addPropertiesToObject(existingObject: Band): Band {
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

  const bandRevised: Band = {
    members: {
      ...existingObject.members,
      all,
    },
  };
  return bandRevised;
}
