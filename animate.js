$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 650) {
        $("#navbar").slideDown('slow');
      } else {
        $("#navbar").slideUp('slow');
      }

      if ($(document).scrollTop() > 100) {
        $("#aboutme").fadeOut(1000);
      } else {
        $("#aboutme").fadeIn(1000);
      }

      if ($(document).scrollTop() > 1300) {
        $(".skillset2").show(800);
        $(".skillset1").show(1000);
        $('.inbar div').delay(750).show(1000);
      } else {
        $(".skillset2").hide(800);
        $(".skillset1").hide(1000);
        $('.inbar div').hide();
      }
    });
  });
  