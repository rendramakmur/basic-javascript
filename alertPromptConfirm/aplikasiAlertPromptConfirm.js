alert('Hello!');
var lagi = true;

while( lagi === true ) {
    var nama = prompt('Masukkan Nama:');
    alert('Hi ' + nama);

    lagi = confirm('Ulangi lagi?');
}

alert('Terima kasih!');