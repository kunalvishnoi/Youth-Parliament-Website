$(document).scroll(function(){
  $(".navbar").toggleClass("nav-small",$(this).scrollTop()>100);
  $(".logo-image").toggleClass("logo-image2",$(this).scrollTop()>100);
  $(".a1").toggleClass("a2",$(this).scrollTop()>100);
});

function smoothScroll(e){
    e.preventDefault();    
    // $()outside to capture the dom element
    const target = $($(this).attr('href'));
    $('html,body').animate({
        scrollTop:target.offset().top
    },700,function() {
          // Callback after animation
          // Must change focus!
          target.focus();
          if (target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            target.focus(); // Set focus again
          };
        });
}

$("#contact-form").on('submit',function(e){
  e.preventDefault();
  const inputs = $("#contact-form :input");
  let values={};
  inputs.each(function() {
    values[this.name] = this.value;
  });
  
  $.post(' https://us-central1-rightcust-website.cloudfunctions.net/sendEmail',
          values,
          (data)=>{
              console.log('done');
              $("#contact-form").reset();
          },
          'application/json');
});


$("#myNavbar a").on('click',smoothScroll);
$(".navbar-brand a").on('click',smoothScroll);




