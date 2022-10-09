window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var message = document.getElementById("message");

function mostraMensagem(){
  if(!message.classList.contains("visible")){
    message.classList.add("visible");
  } else {
    message.classList.remove("visible");
  }
}