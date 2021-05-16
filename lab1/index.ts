const personName = 'John';
document.body.innerHTML = `<h1>Hello ${personName}</h1>`

// class Person
// {
//     firstName: string;
//     lastName: string;
//     age: number;

//     constructor(fn, ln, age)
//     {
//         this.firstName = fn;
//         this.lastName = ln;
//         this.age = age;
//     }

//     show()
//     {
//         document.body.innerHTML = `<p>Witaj ${this.firstName} ${this.lastName} mam ${this.age} lat</p>`
//         //console.log(this.firstName + " " + this.lastName + " mam " + this.age + " lat.");
//     }
// }

// let p = new Person("John", "Blake", 11);
// p.show();

// interface IPerson
// {
//     name: string;
//     surname: string;
//     age: number;
//     role: string;
// }
    
// const users: IPerson[] =
// [
//     { name: 'John', surname: 'Smith', age: 25, role: 'user'},
//     { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
//     { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
// ]

// const admins: IPerson[] =
// [
//     { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
//     { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
// ]

// function logPerson(person: IPerson)
// {
//     console.log(person.name + " " + person.surname + ", " + person.age + ", " + person.role);
// }

// function filterPersons(persons: IPerson[], criteria: any): IPerson[]
// {
//     // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
//     const filtered = persons.filter(person => {
//         if (person.name === criteria.name) return person;
//     });

//     return filtered;
// }

// // TODO 1
// console.log("TODO 1");
// users.forEach(user => {
//     logPerson(user);
// });

// admins.forEach(user => {
//     logPerson(user);
// });

// // TODO 2
// console.log("TODO 2");
// const allUsers: IPerson[] = [...users, ...admins];
// allUsers.forEach(user => {
//     logPerson(user);
// });

// // TODO 3
// console.log("TODO 3");
// const filteredAge = allUsers.filter(person => {
//     if (person.age > 25) return person;
// });
// filteredAge.forEach(person => {
//     logPerson(person);
// });

// // TODO 4
// console.log("TODO 4");
// const filteredName = filterPersons(allUsers, { name: 'Adam' });
// filteredName.forEach(person => {
//     logPerson(person);
// });