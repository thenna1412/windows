
var element = document.getElementsByClassName("rightClick")[0];


var styles_applied = window.getComputedStyle(element);

// CSS "width" value 
// "600px"
console.log(styles_applied.width);





var screenSize = window.outerWidth;
var max = screenSize - 170;



var maxWidth=screenSize - 170;
var maxHeight=680;






function start() {

    document.getElementsByClassName('slide')[0].classList.toggle("show");
    document.getElementsByClassName('slide')[0].classList.toggle("hide");
}


function stop() {

    document.querySelector('.slide').className = "slide hide";

}




var click = document.querySelector(".Desktop");
console.log(click);

click.addEventListener("contextmenu", rightClick);




click.addEventListener("click", close);

function close() {

    document.querySelector(".rightClick").className = "rightClick small";

}


function rightClick(event) {


    event.preventDefault();
    var x = event.clientX;
    var y = event.clientY;

    console.log(x);
    console.log(y);

    document.getElementsByClassName('rightClick')[0].classList.toggle("small");

   



    
    
    
    // for width



    if (x < maxWidth) {

        event.preventDefault();
        var elem = document.querySelector(".rightClick");
        console.log(elem);
        elem.style.top = y + "px";
    
        elem.style.left = x + "px";

    }

    else if (x > maxWidth) {
       
    
      event.preventDefault();
      var elem = document.querySelector(".rightClick");
      console.log(elem);
      elem.style.top = y + "px";

      elem.style.left = 1500+ "px";
      console.log(tab);

    }


                           // for height       


    if (y < maxHeight) {

        event.preventDefault();
        var elem = document.querySelector(".rightClick");
        console.log(elem);
        elem.style.top = y + "px";
      
        elem.style.left = x + "px";

    }

   else  if (y > maxHeight) {
        event.preventDefault();
        var elem1 = document.querySelector(".rightClick");
        console.log(elem1);
        elem1.style.top = 680+ "px";
       
        elem.style.left = x + "px";
        console.log(x);
    }




  


   
}

