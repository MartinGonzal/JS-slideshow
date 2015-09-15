//Set images' src attribute every 5 seconds
function slide(totalSlides, Image){
  //If the current slide number is greater than total number of slides then
  //reset to first slide. Else if it's less than 1 reset to last slide
  if(slideNumber > totalSlides){
    slideNumber = 1;
  }else if(slideNumber < 1){
    slideNumber = totalSlides;
  }
  //Change the image's src value and Increment slideNumber after every change
  Image.src = 'img/slide' + slideNumber + '.jpg';
  slideNumber++;
}

//Set total number of slides, get image and pass them to slide() function
function init(){
  var totalSlides = 5;
  var Image = document.getElementById('slide_image');

  //Add event listener to navigation buttons
  document.getElementById('previous').addEventListener("click", function(){
    //When previous button is clicked subtract two from current slide number
    //then call slide() function
    slideNumber -= 2;
    slide(totalSlides, Image);
    //After displaying the current slide reset 5s timer
    clearInterval(timer);
    timer = setInterval(function(){
      slide(totalSlides, Image);
    }, 5000);
  });
  document.getElementById('next').addEventListener("click", function(){
    //When next button is clicked call slide() function and reset timer
    slide(totalSlides, Image);
    clearInterval(timer);
    timer = setInterval(function(){
      slide(totalSlides, Image);
    }, 5000);
  });

  //Start timer and call slide function every 5000 milliseconds
  timer = window.setInterval(function(){
    slide(totalSlides, Image);
  }, 5000);
}

var slideNumber = 1;
window.onload = init;
