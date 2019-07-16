@extends('layouts.site')

@section('content')
<!-- Content -->
<div class="container">

	<!-- Content menjadi 2 bagian -->
	<div class="row">

		<!-- Content bagian kiri -->
		<div class="col-md-8 mb-md-0 mb-3">

			<h3>Anda Memilih ....</h3>

			<div class="row">

				<!-- Content kiri atas button 1-->
				<div class="col-md-4 mb-md-0 mb-3">
					<button type="button" class="btn btn-primary mt-3">
						<b>Layanan Eksperimen</b><br>
						<p>Klik untuk mengajukan kegiatan penelitian Anda dengan mengunjungi laboratorium kami</p>
					</button>
				</div>
				<!-- End Content kiri atas button 1-->

				<!-- Content kiri atas button 2-->
				<div class="col-md-4 mb-md-0 mb-3">
					<button type="button" class="btn btn-success mt-3">
						<b>Layanan Analisis</b><br>
						<p>Kirimkan sampel Anda untuk kami analisis dengan teknologi riset kami</p>
					</button>
				</div>
				<!-- End Content kiri atas button 2-->

			</div><br>

			<!-- Content kiri bawah Alur-->
			<!-- jika yang dipilih Eksperimen -->
			<div>
				<h3>Tata Cara Pelayanan Eksperimen</h3>
				<div class="row">

					<div class="col-md-8 mb-md-0 mb-3">
						<div class="card-deck">
							<div class="card">
								<div class="card-title">Step 1</div>
								<p class="card-text">Isi formulir pada samping kanan web ini</p>
							</div>
							<div class="card">
								<div class="card-title">Step 2</div>
								<p class="card-text">Tunggu konformasi Email dari kami</p>
							</div>
						</div>
					</div>
				</div>
<br>
				<div class="row">
					<div class="col-md-8 mb-md-0 mb-3">
						<div class="card">
							<div class="card-title">Step 3</div>
							<p class="card-text">Jika kami menerima, anda akan mendapatkan balasan email dengan informasi berupa:<br>
							Jadwal Penelitian<br>
							Biaya Layanan<br>
							Pesan Tambahan</p>
						</div>
					</div>
				</div>
<br>
				<div class="row">
					<div class="col-md-8 mb-md-0 mb-3">
						<div class="card-deck">
							<div class="card">
								<div class="card-title">Step 4</div>
								<p class="card-text">Transfer biaya layanan dan kirim bukti pembayaran</p>
							</div>
							<div class="card">
								<div class="card-title">Step 5</div>
								<p class="card-text">Kunjungi laboratorium kami:<br> Unit Lab Riset Unggulan, Jl. Palem Kampus IPB Dramaga, Bogor 16680</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end jika yang dipilih Eksperimen -->
<br>
			<!-- jika yang dipilih Analisis -->
			<div>
				<h3>Tata Cara Pelayanan Analisis</h3>
				<div class="row">

					<div class="col-md-8 mb-md-0 mb-3">
						<div class="card-deck">
							<div class="card">
								<div class="card-title">Step 1</div>
								<p class="card-text">Isi formulir pada samping kanan web ini</p>
							</div>
							<div class="card">
								<div class="card-title">Step 2</div>
								<p class="card-text">Tunggu konfirmasi Email dari kami</p>
							</div>
						</div>
					</div>
				</div>
<br>
				<div class="row">
					<div class="col-md-8 mb-md-0 mb-3">
						<div class="card">
							<div class="card-title">Step 3</div>
							<p class="card-text">Jika kami menerima, anda akan mendapatkan balasan email dengan informasi berupa:<br>
							Jadwal Analisis<br>
							Biaya Layanan<br>
							Jadwal Pengiriman sampel<br>
							Pesan Tambahan</p>
						</div>
					</div>
				</div>
<br>
				<div class="row">
					<div class="col-md-8 mb-md-0 mb-3">
						<div class="card-deck">
							<div class="card">
								<div class="card-title">Step 4</div>
								<p class="card-text">Transfer biaya layanan dan kirim bukti pembayaran</p>
							</div>
							<div class="card">
								<div class="card-title">Step 5</div>
								<p class="card-text">Kirim sampel Anda sesuai jadwal ke:<br>
								Unit Lab Riset Unggulan, Jl. Palem Kampus IPB Dramaga, Bogor 16680</p>
							</div>
						</div>
					</div>
				</div>
<br>
				<div class="row">
					<div class="col-md-8 mb-md-0 mb-3">
						<div class="card-deck">
							<div class="card">
								<div class="card-title">Step 6</div>
								<p class="card-text">Sampel akan kami analisis sesuai jadwal</p>
							</div>
							<div class="card">
								<div class="card-title">Step 7</div>
								<p class="card-text">Analisis Selesai! Data hasil akan dikirim melalui Email</p>
							</div>
						</div>
					</div>
				</div>

			</div>
			<!-- end jika yang dipilih Analisis -->
			<!-- End Content kiri bawah Alur-->

		</div>
		<!-- End Content bagian kiri -->


		<!-- Content bagian kanan -->
		<div class="col-md-4 mb-md-0 mb-3">
			<h3>Ajukan disini</h3>
			<select id="person_types" class="custom-select">
				<option value="">Anda sebagai ....</option>
				<option value="mahasiswa">Mahasiswa IPB</option>
				<option value="dosen">Dosen IPB</option>
				<option value="peneliti">Peneliti AR Lab</option>
				<option value="mitra">Peneliti Lainnya - Mitra IPB</option>
				<option value="nonmitra">Peneliti Lainnya - Non Mitra IPB</option>
			</select>
<br><br>
			<!-- Membuat Form login/register-->
			<div>

				<!-- jika penduduk IPB -->
				<div>
					<h4>Log in dengan akun IPB Anda</h4>
					<div class="form-group">
						<input type="text" name="username" class="form-control" placeholder="username">
					</div>

					<div class="form-group">
						<input type="text" name="password" class="form-control" placeholder="password">
					</div>
					<input type="submit" value="Log In" class="btn btn-primary">
				</div>
				<!-- End jika penduduk IPB -->
<br><br>
				<!-- jika non IPB -->
				<div>
					<h4>Identitas Diri</h4>
					<div class="form-group">
						<input type="text" name="name" class="form-control" placeholder="Nama Lengkap">
					</div>

					<div class="form-group">
						<input type="text" name="email" class="form-control" placeholder="Email">
					</div>

					<div class="form-group">
						<input type="text" name="phone" class="form-control" placeholder="Nomor HP">
					</div>

					<div class="form-group">
						<input type="text" name="nama_institusi" class="form-control" placeholder="Nama Institusi">
					</div>

					<div class="form-group">
						<input type="text" name="jenis_institusi" class="form-control" placeholder="Jenis Institusi">
					</div>

					<input type="submit" value="Lanjutkan" class="btn btn-primary">

				</div>
				<!-- End jika non IPB -->
				
			</div>
			<!-- Membuat Form login/register-->
<br>
<br>
			<!-- jika Eksperimen -->
			<div class="card text-white bg-danger mb-3">
				<div class="card-body">
					Setelah Log In, Anda akan diarahkan ke halaman form penelitian. Siapkan :<br>
					- Softcopy proposal penelitian<br>
					- Softcopy Surat pengantar Ketua Departemen (jika mahasiswa)
				</div>
			</div>
			<!-- End jika Eksperimen -->
		</div>
		<!-- End Content bagian kanan -->

	</div>
	<!-- End Content menjadi 2 bagian -->

</div>
<!-- End Content -->

@endsection