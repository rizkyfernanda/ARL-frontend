$(document).ready(function(){

	//----------------For Smooth Scrolling--------------------
  	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('.header')
	  .not('.carousel-control-next')
	  .not('.carousel-control-prev')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {

	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {

	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        },10000, function() {

	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });
	
    //----------------For Confirmation--------------------

    //--1. Open confirmation modal
	$('#validated-form').on('submit', function(e){
	  $('#myModal').modal('show');
	  $("#send-success").hide();
	  e.preventDefault();
	});

	//--2. Success
	$("#send-ok").click(function(){
	 	$("#send").hide();
   		$("#send-success").show();
   		e.preventDefault();
  	});

});
