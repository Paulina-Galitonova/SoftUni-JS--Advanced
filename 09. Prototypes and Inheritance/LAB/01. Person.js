function createPerson(firstName, lsatName) {
    const person = {
        firstName: firstName,
        lastName: lsatName
    };
    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            const tokens = value.split(' ');
            if (tokens.length === 2) {
                [this.firstName, this.lastName] = tokens;
            }
        },
        enumerable: true,
        configurable: true
    })

    return person;
}