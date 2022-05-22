const ld = require('lodash');

const userNames = ['Melvin', 'Grace', 'Liam', 'Leni', 'Sara', 'Ferdinand'];
let id = 0;

userNames.forEach(userName => {
    id++;
    console.log(`${userName} - Id: ${id}`);
});
