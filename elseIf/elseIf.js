// for(var ulang = true ; ulang = false; ) {
    
//     var ulang = confirm('Ulangi lagi?')
// }
var ulang = true;

while(ulang) {
    var angka = prompt('Masukkan bilangan:');
    
    if(angka % 2 == 0) {
        alert(angka + ' Merupakan bilangan GENAP');
    } else if(angka % 2 == 1) {
        alert(angka + ' Merupakan bilangan GANJIL');
    } else {
        alert('Input yang diberikan bukan angka.');
    }
    var ulang = confirm('Ulangi lagi?');
}