
const section = document.querySelector('ol')
const a = section.children[0]
const b = section.children[4]


var insertion = section.insertBefore(b, a)
// second exo

const firstH2 = document.querySelectorAll ("h2")[1];
const secondH2 = document.querySelectorAll ("h2")[2];

const section1 = document.querySelectorAll ("section")[1];

section1.insertBefore(secondH2, firstH2);

const div = document.querySelector ("div");
const para = div.lastElementChild;

div.insertBefore(firstH2, para);




//third exo

const section3 = document.querySelectorAll ("section")[2]
section3.remove()









