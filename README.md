# dom2

const firstP = document.querySelectorAll ("p")[1];
const secondP = document.querySelectorAll ("p")[2];

const section1 = document.querySelectorAll ("section")[1];
const section2 = document.querySelectorAll ("section")[2];
const firstH2 = document.querySelectorAll ("h2")[1];
const secondH2 = document.querySelectorAll ("h2")[2];

console.log(section1);
console.log(section2 );
console.log(firstH2);
console.log(secondH2);

const replace = section1.insertBefore(secondH2, firstH2)
