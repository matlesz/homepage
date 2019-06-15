console.log('siema');
const name = "Mateusz";
const age = 29;
console.log(name);
console.log(age);

console.log(`Nazywam sie ${name} i mam ${age} lat🦁`);


const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = `<strong>Nazywam sie </strong> ${name} i mam ${age} lat🦁`

const paragaphs = document.querySelectorAll('p');

console.log(paragaphs);
console.log(paragaphs[1]);