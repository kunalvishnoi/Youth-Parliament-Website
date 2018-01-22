




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




$("#myNavbar a").on('click',smoothScroll);
$(".navbar-brand a").on('click',smoothScroll);


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date("february 17, 2018 09:00:00");
initializeClock('clockdiv', deadline);



