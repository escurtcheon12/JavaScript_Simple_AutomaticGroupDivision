// declare variabel
const show = document.querySelector('h3');
const show1 = document.querySelector('.ok');
const spasi = document.write('<br>');
const show3 = document.querySelector('p');
let once = 0;

//buat array untuk menampung value
let save = [];

// function click ketika button yang kelas .ok di click
const input = document.getElementById("InputName");
show1.addEventListener('click', event => {

//untuk menghitung berapakah button .ok ini di klik
	++once;

// ketika button .ok di klik maka hasil inputan yang diisi bisa di tampung di array
	save.push(input.value);

// untuk menampilkan value dari hasil yang kita input	
	show.innerHTML = save;

// membuat kondisi jika inputan blm diisi maka akan terjadi ini
	if(input.value == "") {
		alert('Isi Dulu Cuk');

// jika di isi maka terjadi ..
	} else {

// fungsi ++once ini di pakai agar mencegah hasil element yang muncul jika di click
// beberapa kali
// maka saya membuat kondisi if
		if(once == 1) {
			//membuat input
			let inputan = document.createElement("input");
			const input1 = document.body.appendChild(inputan);
			input1.placeholder = "Mau di bagi brp kelompok?";
			input1.classList.add('BagiKelompok');

			//membuat button1
			let button = document.createElement("Button");
			button.innerHTML = "Bagi Kelompok";
			const b1 = document.body.appendChild(button);
			b1.classList.add('buttons')

			//membuat button2
			let button1 = document.createElement("Button");
			button1.innerHTML = "Pilih Salah Satu";
			const b2 = document.body.appendChild(button1);
			b2.classList.add('buttons')

		// jika button 1 di click maka akan terjadi ...
		button.addEventListener('click', function() {
			//declare variabel
			let inputan1 = inputan.value;

			// guna menampung value
			let output = '';
			
			// membuat loop jika di button 1 di klik maka akan membuat suatu
			// element yang mana element ini di buat beberapa kali dari hasil
			// inputan1
			for(let a = 1; a <= inputan1; a++) {
				let kelompok = document.createElement("h2");
				document.body.appendChild(kelompok);

				// declare variabel element h2 dan juga angka kelompok
				let output = `KELOMPOK ${a}`;


				let x = a - 1;

				//membuat loop untung menghitung array yang diisi guna untuk menampilkan
				// value dari array

				while(x < save.length) {

					//di berikan seperti ini agar hasil value dari array untuk di masukkan ke kelompok
					// jika kelompok sudah diisi di baris ke 1 maka value member ini akan berulang ke kelompok awal untuk diisi
					// guna untuk mengisi masing masing kelompok
					output += `<br> ${save[x]}`;

					x = x + parseInt(inputan1);
				}
					// menampilkan value dari array
					kelompok.innerHTML = output;
			}

	 });

		// jika button 2 di click maka akan terjadi ...
	 	button1.addEventListener('click', function() {

	 		//declare variabel
			const random = 	Math.floor(Math.random() * save.length);

			// membuat element h2
				let display = document.createElement("h2");
				document.body.appendChild(display);

					//menampilkan value random dari hasil inputan kita
					display.innerHTML = save[random];

		 });		
	 }
	}
});

console.log(save);
