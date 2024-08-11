Document.onkeydown = function(e){
   console.log("key code is: ", e.keycode)
   if(e.keycode==38){
     doremon = document.querySelector('.doremon')
     doremon.classList.add('animatedDoremon')
    }
}
