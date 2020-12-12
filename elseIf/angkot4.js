var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkotLembur = 8;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik.');
    } else if (noAngkot == angkotLembur) {
        console.log('Angkot no. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot no. ' + noAngkot + ' sedang tidak beroperasi');
    }
}