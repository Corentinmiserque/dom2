
// permet de mettre la date du console.log

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}


const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
//exo 1
  section=document.getElementsByTagName('section')[0];
  let div=document.createElement('div');
  div.classList.add("displayedsquare", e.target.classList[1]);
  section.appendChild(div);




//exo 2
  
  ul =document.getElementsByTagName('ul')[0];
  let li =document.createElement('li');
  ul.appendChild(li);
  li.textContent = "[" + getElapsedTime() + "]" + " Create a new " + e.target.classList[1] + " square";
 
}
// exo 3

//random color
var rand_bkg_color = (function() {

    // return rand from min included to max included
    var rand = function(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min);
    }
    
    return function(){
    return 'rgb('+rand(0,255)+','+rand(0,255)+','+rand(0,255)+')';
    };
    
    })();
    // 
    const actionSquares = document.querySelectorAll('.actionsquare')
    for (let actionSquare of actionSquares) {
      actionSquare.addEventListener('click', clickOnSquare)
    }
    var size = 5;
    var i = 0;

// event = keyup or keydown


    document .addEventListener('keyup', event => {
        if (event.code === 'Space') {
          document.body.style.background =rand_bkg_color();

       ul=  document.getElementsByTagName('ul')[0];
        let li =document.createElement('li');
        ul.appendChild(li);
         li.textContent = "[" + getElapsedTime() + "]" + " Create a new  background color " + rand_bkg_color();
     
        }
      })

//ex 4 =

let li = document.querySelectorAll('li').length;





document .addEventListener('keypress', (i) => {
    if (!i.repeat)
    while (li.querySelectorAll('li').length){
    li.querySelector('li').remove();
}
     {
      li.remove();
    }
  })
  