$(document).ready(function(e){


	//Untuk mengajukan disamping. Pilihan default: "Anda Adalah"
	$("#andaAdalah").val(0);
	$("#pilihanLayanan").val(0);

	//Hide the unnecessaries-------------
	$(".tatacaraEksperimen").hide();				//tata cara eksperimen
	$(".tatacaraAnalisis").hide();					//tata cara analisis
	$("#tatacara").hide();							//header "Tata Cara"
	$("#ajukanDisini").hide();						//sidebar "Ajukan Disini"

	$(".attention").hide();							//Catatan dibawah login, pakai border merah
	$(".dariIPB, .dariARLAB, .dariNonIPB").hide();	
	$(".MahasiswaEksperimen").hide();				//Catatan jika layanan eksperimen mahasiswa hanya bisa untuk s2&s3

	//Saat klik tombol Layanan Eksperimen/Analisis--------
	$( "#eksperimen, #analisis" ).click(function(e) {
		e.preventDefault();
		$("#tatacara").show();
		$("#ajukanDisini").show();
		$(this).css("opacity", "1.0");
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

	//Buat identitas user, dengan id "andaAdalah--------------
	$("#andaAdalah")
	  .change(function(e) {

	  	e.preventDefault();
	  	var identitas = $(this).val();
		$(".attention").hide();
		$(".dariIPB, .dariARLAB, .dariNonIPB").hide();
		$(".MahasiswaEksperimen").hide();

	  	$( "select option:selected" ).each(function() {

	  		if (identitas != null) {
	  			$(".attention").show();	
	  			hasBeenClicked();
	  		}

      		if (identitas == 1 || identitas == 2) {
      			$(".dariIPB").show();
      		}

      		else if (identitas == 3) {
      			$(".dariARLAB").show();
      		}

      		else if (identitas == 4 || identitas == 5) {
      			$(".dariNonIPB").show();
      		}

      		untukEksperimenMahasiswa();

    	});

	  })
	  .trigger( "change" );


	//Pilihan layanan di bawah "Anda Adalah" -------------------------
	$("#pilihanLayanan")
	  .change(function(e) {

	  	e.preventDefault;
	  	var pilihan = $(this).val();
	  	var selected = $( "#pilihanLayanan option:selected" );
	  	selected.each(function() {

	  		if (pilihan == 1) {
	  			$('#eksperimen').trigger('click');
	  		}

	  		else if (pilihan == 2) {
	  			$('#analisis').trigger('click');
	  		}

    	});

	  })
	  .trigger( "change" );


	 //Trigger untuk catatan eksperimen mahasiswa--------------------
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

	function hasBeenClicked() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	 	$("#ajukanDisini").css( {
	 		"position": "relative",
	 		"right": "0"
	 	});
	 }


	 //Buat index.html, saat klik button "Ajukan Layanan"-------------
	 $("#eksperimen.btn-layanan").click(function() {
		window.location='services.html?eksperimen=true';
	    e.preventDefault();

	 });

	 $("#analisis.btn-layanan").click(function() {
		window.location='services.html?analisis=true';
	    e.preventDefault();
	 });


	 if(getParameterByName('eksperimen') == 'true')
	 {
	    $('#eksperimen').trigger('click');
	 
	 }else if(getParameterByName('analisis') == 'true'){

	    $('#analisis').trigger('click');
	 }


	 function getParameterByName(name) 
	 {
	    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	 }

});