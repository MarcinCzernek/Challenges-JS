const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');

const left = document.querySelector('#next');
const right = document.querySelector('#prev');

let actualSliderNum = 1;

const show = (pic) => {
  
  const active = document.querySelector('.active');
       active.classList.remove('active');
       pic.classList.add('active')
       if(dot.innerHTML === "O"){
        dot.innerHTML = "X";
       }else if(dot.innerHTML === "X"){
        dot.innerHTML = "O"
       }
}

const nextSlide = () => {
  console.log(actualSliderNum);
  if(actualSliderNum < 3 && actualSliderNum > 0){
  actualSliderNum++;
   if(actualSliderNum == 1){
     show(pic1);
   }else if(actualSliderNum == 2){
     show(pic2);
   }else if(actualSliderNum == 3){
     show(pic3);
   }
  }
 }
 
 const previousSlide = () => {
  console.log(actualSliderNum);
  if(actualSliderNum <= 3 && actualSliderNum > 1){
  actualSliderNum--;
   if(actualSliderNum == 1){
     show(pic1);
   }else if(actualSliderNum == 2){
     show(pic2);
   }else if(actualSliderNum == 3){
     show(pic3);
   }
  }
}
 
dot1.addEventListener('click', () => {show(pic1);actualSliderNum = 1});
dot2.addEventListener('click', () => {show(pic2);actualSliderNum = 2});
dot3.addEventListener('click', () => {show(pic3);actualSliderNum = 3});

left.addEventListener('click', () => {(previousSlide())});
right.addEventListener('click', () => {nextSlide()});
