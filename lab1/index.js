var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var personName = 'John';
document.body.innerHTML = "<h1>Hello " + personName + "</h1>";
var Person = /** @class */ (function () {
    function Person(fn, ln, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }
    Person.prototype.show = function () {
        document.body.innerHTML = "<p>Witaj " + this.firstName + " " + this.lastName + " mam " + this.age + " lat</p>";
        //console.log(this.firstName + " " + this.lastName + " mam " + this.age + " lat.");
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.show();
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log(person.name + " " + person.surname + ", " + person.age + ", " + person.role);
}
function filterPersons(persons, criteria) {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    var filtered = persons.filter(function (person) {
        if (person.name === criteria.name)
            return person;
    });
    return filtered;
}
// TODO 1
console.log("TODO 1");
users.forEach(function (user) {
    logPerson(user);
});
admins.forEach(function (user) {
    logPerson(user);
});
// TODO 2
console.log("TODO 2");
var allUsers = __spreadArray(__spreadArray([], users), admins);
allUsers.forEach(function (user) {
    logPerson(user);
});
// TODO 3
console.log("TODO 3");
var filteredAge = allUsers.filter(function (person) {
    if (person.age > 25)
        return person;
});
filteredAge.forEach(function (person) {
    logPerson(person);
});
// TODO 4
console.log("TODO 4");
var filteredName = filterPersons(allUsers, { name: 'Adam' });
filteredName.forEach(function (person) {
    logPerson(person);
});
