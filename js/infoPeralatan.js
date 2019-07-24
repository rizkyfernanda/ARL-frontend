
$(document).ready(function(e){

    function hideAllDescriptions() {
		$( "#isi-fitur" ).hide();
		$( "#isi-aplikasi" ).hide();
		$( "#isi-kegunaan" ).hide();
	}


	//Buat tombol Jadwal------------
	$( "#jadwal" ).click(function(e) {
		$( this ).addClass("btn-primary");
		$( "#deskripsi" ).removeClass("btn-primary");

		$( "#buttonDeskripsi" ).hide();
		$( "#isi-deskripsi" ).hide();
		$( "#isi-jadwal" ).show();
	});

	//Buat tombol deskripsi------------
	$( "#deskripsi" ).click(function(e) {
		$( this ).addClass("btn-primary");
		$( "#jadwal" ).removeClass("btn-primary");

		$( "#isi-jadwal" ).hide();
		$( "#buttonDeskripsi" ).show();
		$( "#isi-deskripsi" ).show();
	});

	//Buat tombol fitur (deskripsi) ------------
	$('#fitur').click(function(e) {
		hideAllDescriptions();
		$('.btn-isi-deskripsi').removeClass("btn-light");

		$( this ).addClass("btn-light");
		$( "#isi-fitur" ).show();
	});

	//Buat tombol aplikasi  (deskripsi) ------------
	$('#aplikasi').click(function(e) {
		hideAllDescriptions();
		$('.btn-isi-deskripsi').removeClass("btn-light");

		$( this ).addClass("btn-light");
		$( "#isi-aplikasi" ).show();
	});

	//Buat tombol kegunaan  (deskripsi) ------------
	$('#kegunaan').click(function(e) {
		hideAllDescriptions();
		$('.btn-isi-deskripsi').removeClass("btn-light");

		$( this ).addClass("btn-light");
		$( "#isi-kegunaan" ).show();
	});

    //Saat html dibuka ------------------------
	$('#deskripsi').trigger('click');
	$('#deskripsi').trigger('target');
	$('#fitur').trigger('click');
	$('#fitur').trigger('focus');


});