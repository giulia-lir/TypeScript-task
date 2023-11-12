import { Band } from './interfaces';

// Add new prop `all` under `members`
export function addPropertiesToObject(existingObject: Band): Band {
  // 5.1. `all`: type is Array of string, contains all the members' name (both current and past)
  const all: string[] = [];
  
  // 6.1.  `plays` contains all the unique plays in the `bands` object
  // Array.from() transforms into an array the newly created set of values mapped from members.current|past.plays
  const allThePlays: string[] = Array.from(
    // New set of unique values is created
    new Set(
      existingObject.members.current
        .concat(existingObject.members.past)
        .flatMap((member: any) => member.plays)
    )
  );

  // Type definition for 'plays' key-value pairs
  type PlaysMapping = {
    [K: string]: string[];
  };

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

  // 6.2.  For each play, it should list all the members' name in lowercase
  // The result is an object where each play is a key, and the corresponding value is an array of names (in lowercase) of members who had the value in their "play" prop.
  const playsMapping: PlaysMapping = allThePlays.reduce((playsMapping: PlaysMapping, play: string) => {
    playsMapping[play] = existingObject.members.current
      .concat(existingObject.members.past)
      .filter((member: any) => member.plays.includes(play))
      .map((member: any) => member.name.toLowerCase());

    return playsMapping;
  }, {});

  const bandRevised: Band = {
    members: {
      ...existingObject.members,
      all,
    },
    plays: playsMapping,
  };
  return bandRevised;
}
