//Buat pseudocode dulu:

var ulang = true;

while(ulang) {
    //Menangkap pilihan player
    var player = prompt('Masukkan pilihan anda: \n [Gajah, Orang, atau Semut]').toLowerCase();

    //Menangkap pilihan komputer
    //Membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    console.log(comp);

    //Menentukan rules
    var hasil = '';


    // if(player == comp) {
    //     hasil = 'Anda seri!';
    // } else if (player == 'gajah') {
    //     if(comp == 'orang') {
    //         hasil = 'Anda menang!';
    //     } else {
    //         hasil = 'Anda kalah!';
    //     }
    // } else if (player == 'orang') {
    //     if(comp == 'semut') {
    //         hasil = 'Anda menang!';
    //     } else {
    //         hasil = 'Anda kalah!';
    //     }
    // } else if (player == 'semut') {
    //     if(comp == 'gajah') {
    //         hasil = 'Anda menang!';
    //     } else {
    //         hasil = 'Anda kalah!';
    //     }
    // } else {
    //     alert('Input yang anda masukkan salah!');
    // }


    //-- Rumus if dengan operator ternary
    if(player == comp) {
        hasil = 'Anda seri!';
    } else if (player == 'gajah') {
        hasil = (comp == 'orang') ? 'Anda menang!' : 'Anda kalah!';
    } else if (player == 'orang') {
        hasil = (comp == 'semut') ? 'Anda menang!' : 'Anda kalah!';
    } else if (player == 'semut') {
        hasil = (comp == 'gajah') ? 'Anda menang!' : 'Anda kalah!';
    } else {
        hasil = 'Input yang anda masukkan tidak sesuai!'
    }

    //Tampilkan hasil
    alert('Anda memilih: ' + player + ' dan computer memilih: ' + comp + '\n' + hasil);

    ulang = confirm('Apakah anda ingin mencoba lagi?');
}