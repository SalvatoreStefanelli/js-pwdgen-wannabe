const user_name = prompt('What\'s your name?'); 
console.log(user_name);

const last_name = prompt('What\s your surname?');
console.log(last_name);

const favourite_color = prompt('What\'s your favourite color?');
console.log(favourite_color);

const password = user_name + last_name + favourite_color + '23'
console.log('password');

const passwordElement = document.getElementById('password');

passwordElement.innerHTML = `${password}`;