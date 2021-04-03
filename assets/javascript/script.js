// counter section
$(document).ready(function() {
$('.counter').each(function () {
$(this).prop('Counter',0).animate({
Counter: $(this).text()
}, {
duration: 4000,
easing: 'swing',
step: function (now) {
$(this).text(Math.ceil(now));
}
});
});
});

// testimonial section
$(document).ready(function(){
    $('.testi1').hide();
    $('.first_content').show();
   });
   
   $(document).on("click",".testimonial_imagesAll", function(){
      var myid= $(this).attr('data-id');
      $('.testi1').hide();
      $('#'+myid).show();
   });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
