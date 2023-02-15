// Write a message to the console.
console.log('hello world!');

//navlink//
function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
       //for trap //
       $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimout:2000,
        autoplayHoverPause:true,
        responsive:{
                0:{items:1},
                600:{items:3},
                1000:{items:3}
                    }  
    });

  //for anchor hover//
  


$("#triphere").click(function() {
href = "";
});