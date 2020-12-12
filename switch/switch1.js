var ulang = true

while(ulang) {

    var angka = parseInt(prompt('Masukkan angka:'));

    switch( angka ) {
        case 1 :
            alert('Anda memasukkan angka 1');
        break;
        case 2 :
            alert('Anda memasukkan angka 2');
        break;
        case 3 :
            alert('Anda memasukkan angka 3');
        break;
        default:
            alert('Angka yang dimasukkan tidak sesuai.');
        break;
    }

    ulang = confirm('Ulangi lagi?');
}