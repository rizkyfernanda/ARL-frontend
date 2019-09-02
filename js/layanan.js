$(document).ready(function(){

	var bool = false;
	scrolling(bool);

	//Untuk mengajukan disamping. Pilihan default: "Anda Adalah" dan pilihan layanan kosong
	$("#andaAdalah").val(0);
	$("#pilihanLayanan").val(0);

	//Hide the unnecessaries-------------
	$(".tatacaraEksperimen").hide();				//tata cara eksperimen
	$(".tatacaraAnalisis").hide();					//tata cara analisis
	$("#tatacara").hide();							//header "Tata Cara"
	$("#ajukanDisini").hide();						//sidebar "Ajukan Disini"

	$(".dariIPB, .dariARLAB, .dariNonIPB").hide();	
	$(".MahasiswaEksperimen").hide();				//Catatan jika layanan eksperimen mahasiswa hanya bisa untuk s2&s3

	//Saat klik tombol Layanan Eksperimen/Analisis--------
	$( "#eksperimen, #analisis" ).click(function(e) {
		e.preventDefault();
		$("#tatacara").show();
		$("#ajukanDisini").show();
		$(this).css("opacity", "1.0");
		scrolling(true);
	});

	//Buat tombol Eksperimen-------------
	$( "#eksperimen" ).click(function(e) {
		e.preventDefault();
		$(".tatacaraAnalisis").hide();
		$(".tatacaraEksperimen").show();
		$("#pilihanLayanan").val(1);

		$("#analisis").css("opacity"," 0.45");

		untukEksperimenMahasiswa();
	});

	//Buat test redirect form penelitian-------------
	$( "#redirFormPenelitian" ).click(function() {
		window.location.href = "formPenelitian.html";
	});

	//Buat tombol Analisis-------------
	$( "#analisis" ).click(function(e) {
		e.preventDefault();
		$(".tatacaraEksperimen").hide();
	    $(".tatacaraAnalisis").show();
	    $("#pilihanLayanan").val(2);

	    $("#eksperimen").css("opacity", "0.6");

	    $(".MahasiswaEksperimen").hide();
	});

	//Buat identitas user, dengan id "andaAdalah"---------------------------
	$("#andaAdalah")
	  .change(function(e) {

	  	e.preventDefault();
	  	var identitas = $(this).val();
	  	var flag = true;
		$(".dariIPB, .dariARLAB, .dariNonIPB").hide();
		$(".MahasiswaEksperimen").hide();
		

	  	$( "select option:selected" ).each(function() {

	  		if (identitas != null) {

				if (identitas == 1 || identitas == 2) {
	      			$(".dariIPB").show();
	      		}

	      		else if (identitas == 3) {
	      			$(".dariARLAB").show();
	      		}

	      		else if (identitas == 4 || identitas == 5) {
	      			$(".dariNonIPB").show();
	      		}

	  		}

	  		//Trigger untuk show catatan eksperimen mahasiswa-------
      		untukEksperimenMahasiswa(); 

    	});

	  	//Trigger untuk ganti style kolom "Ajukan Disini"---------------
    	if (identitas >= 1 && identitas <= 5) { 
    		hasBeenClicked(flag);
    		bool = false;
    		scrolling(bool);
    	}


	  })
	  .trigger( "change" );


	 //Function untuk show catatan eksperimen mahasiswa--------------------
	 function untukEksperimenMahasiswa() {
	 	var eksperimen = $(".tatacaraEksperimen").is(":visible");
	 	var identitas = $("#andaAdalah").val();

	 	if (eksperimen && identitas == 1) {
	 		$(".MahasiswaEksperimen").show();
	 	}
	 	else {
	 		$(".MahasiswaEksperimen").hide();
	 	}
	 }

	//Function untuk ganti style "Ajukan Disini"-----------------------------
	function hasBeenClicked(flag) 
	{
		if (flag)
		{
			$("#ajukanDisini").css( {
		 		"position": "relative",
		 		"right":"0"
		 	});

		 	//Scroll ke halaman paling atas------------------
			$("html, body").animate({ scrollTop: 0 }, "slow");
		}
	}

 	//Behavior kolom "Ajukan Disini" saat scrolling -------------------------
 	function scrolling(bool)
 	{
 	if (bool == true)
 		{
			$(window).scroll(function() {
			   if ( $(".dariIPB, .dariNonIPB").is(':visible') == false ) {

				   if( $(window).scrollTop() >= 710 )
				   {
						$("#ajukanDisini").css( {
					 		"position": "absolute",
					 		"bottom":"0"
					 	});
				   }else{
				   		$("#ajukanDisini").css( {
					 		"position": "fixed",
					 		"bottom":"auto"
					 	});
				   }

				}
			});
		}
	}

});