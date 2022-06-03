"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const triLingual = users.filter(user => user.languages.length >= 3);
console.log(triLingual);

const emails = users.map(user => user.email);
console.log(emails);

let totalXP = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0)
console.log(totalXP);

let longestEmail = users.reduce((longEmail, user) => {
    return longEmail.length > user.email.length ? longEmail : user.email;
}, '');
console.log(longestEmail);

let instructorList = users.reduce((string, user) => {
    return string.concat(user.name + ', ')
}, 'Your instructors are: ');
console.log(instructorList);

let uniqueLanguages = users.reduce((langList, user) => {
    for (let language of user.languages) {
        if (langList.includes(language)) {
            return langList;
        } else {
            langList.push(language);
        }
    }
    return langList;
}, []);
console.log(uniqueLanguages);