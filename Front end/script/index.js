let images_arr = [
  

  "https://rukminim1.flixcart.com/flap/1500/500/image/889ddf7dbb72351f.jpeg?q=50",
  "https://rukminim1.flixcart.com/flap/1500/500/image/80c3e6054c1db1b1.jpeg?q=50",
  "https://rukminim2.flixcart.com/flap/1500/500/image/0582eaa382f0ea01.jpg?q=50",
  "https://rukminim2.flixcart.com/flap/1500/500/image/951df9700e7e72ec.jpg?q=50",
  "https://rukminim2.flixcart.com/flap/1500/500/image/13663a8300d0c5b6.jpg?q=50"
  
];

let i = 0;

let slideShow = setInterval(function () {
  if (i === images_arr.length) {
    i = 0;
  }

  // let slideShow_div = document.querySelector('#slideshow')
  let img = document.querySelector("#slideshowimg");
  img.className = 'slides'
  img.src = images_arr[i];
  i++;
  // console.log(i);
}, 2000);
