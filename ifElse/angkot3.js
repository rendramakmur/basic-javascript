var jmlAngkot = prompt('Berapa jumlah angkot yang ingin dicek?');
var angkotBeroperasi = prompt('Berapa jumlah angkot yang beroperasi?');

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
}