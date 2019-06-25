console.log('siema');
const name = "Mateusz";
const age = 29;
console.log(name);
console.log(age);

//console.log(`Nazywam się ${name} i mam ${age} lat🦁`);


const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = `<strong> Nazywam sie </strong> ${name} i mam ${age} lat🦁`

const paragaphs = document.querySelectorAll('p');

console.log(paragaphs);
console.log(paragaphs[1]);


if ('javascript' != 'java') {
    console.log('to prawda');
}

if (age < 20) {
    console.log('masz mniej niż 20 lat');
} else if ((age >= 20) && (age <= 30)) {
    console.log('masz więcej niż 20 lat ale mniej niż 30');
} else {
    console.log('jesteś 31+');
}

switch (age) {
    case 20:
        console.log('masz równo 20 lat');
    break;
    case 30:
        console.log('masz równo 30 lat');
    break; 
    default:
        console.log(`masz ${age} lat`);
    break;
}

const amIold = (age > 70) ? 'yes' : 'no';
console.log(amIold);

function calculate(x) {
    x = x + 3;
    console.log(`tradycyjnie ${x}`);
    return x*7
}

console.log(calculate(2));


const calculateFat = (x) => (x+3)*7;

console.log(calculateFat(2));

const welcome = (name, age) => {
    console.log(`Nazywam się ${name} i mam ${age} lat🦁`);
} 

//welcome('mateusz', 29);

welcome(name ,age);