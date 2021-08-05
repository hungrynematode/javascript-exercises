const findTheOldest = function(people) {
    const today = new Date();
    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = today.getFullYear();
        };
    }); 
    console.log(people);
    const ordered = people.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > 
        (b.yearOfDeath  - b.yearOfBirth) ? -1 : 1);

    const oldest = ordered[0];
    return oldest;
};

module.exports = findTheOldest;
