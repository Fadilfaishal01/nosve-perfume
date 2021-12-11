window.onscroll = () =>  {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "15px 5px";
        document.querySelector('#logo').style.display = 'none';
        $('.navbar').addClass('opColor');
    } else {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.querySelector('#logo').style.display = 'block';
        $('.navbar').removeClass('opColor');
    }
};

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })

  $(".nav-item a").on('click', function(event) {
    if (this.hash !== "") {          
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 10, function() {
        window.location.hash = hash;
      });
    }
  });
});
