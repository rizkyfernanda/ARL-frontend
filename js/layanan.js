$(document).ready(function(){


	//Untuk mengajukan disamping
	$("#andaAdalah").val(0);

	//Hide the unnecessaries-------------
	$(".tatacaraEksperimen").hide();
	$(".tatacaraAnalisis").hide();
	$("#tatacara").hide();
	$("#ajukanDisini").hide();

	$(".attention").hide();
	$(".dariIPB, .dariARLAB, .dariNonIPB").hide();
	$(".MahasiswaEksperimen").hide();

	//Saat klik tombol Layanan Eksperimen/Analisis--------
	$( "#eksperimen, #analisis" ).click(function() {
		$("#tatacara").show();
		$("#ajukanDisini").show();
	});

	//Buat tombol Eksperimen-------------
	$( "#eksperimen" ).click(function() {
		$(".tatacaraAnalisis").hide();
		$(".tatacaraEksperimen").show();
		untukEksperimenMahasiswa();
	});

	//Buat tombol Analisis-------------
	$( "#analisis" ).click(function() {
		$(".tatacaraEksperimen").hide();
	    $(".tatacaraAnalisis").show();
	    $(".MahasiswaEksperimen").hide();
	});

	//Buat identitas user, dengan id "andaAdalah--------------
	$("#andaAdalah")
	  .change(function() {

	  	var identitas = $(this).val();
		$(".attention").hide();
		$(".dariIPB, .dariARLAB, .dariNonIPB").hide();
		$(".MahasiswaEksperimen").hide();

	  	$( "select option:selected" ).each(function() {

	  		if (identitas != null) {
	  			$(".attention").show();
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

	  	$("#test").text(identitas);

	  })
	  .trigger( "change" );


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

});