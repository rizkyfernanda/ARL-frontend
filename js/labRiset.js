$(document).ready(function(){

	//----------------For responsive mobile--------------------
	var viewMode = getCookie("view-mode");
	if(viewMode == "desktop"){
	    viewport.setAttribute('content', 'width=1024');
	}else if (viewMode == "mobile"){
	    viewport.setAttribute('content', 'width=1024,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
	}

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
	$('#formPenelitian , #formKontak').on('submit', function(e){
	  $('#confirmModal').modal({backdrop: true, keyboard: true});
	  $('#confirmModal').modal('show');
	  e.preventDefault();
	});

	//--2. Harap tunggu
	$("#send-ok").click(function(e){
		$('#confirmModal').modal('hide');
		$('#waitModal').modal({backdrop: "static", keyboard: false});
		setTimeout(
 			function() 
		  {
		    $('#waitModal').show();
		  }, 5000);

	//--3. Success
	    $('#waitModal').hide();
		$('#successModal').modal({backdrop: "static", keyboard: false});
   		$("#successModal").modal('show');
   		e.preventDefault();
  	});

  	//-4. To Home
  	$("#toHome").click(function(e){
		window.location.href = "index.html";
  	});


});
