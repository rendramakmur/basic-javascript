// Manipulasi Array (Manual)

// 1. Menambah isi array
// var arr = [];
// arr[0] = 'Galuh';
// arr[1] = 1;
// arr[2] = true;

// console.log(arr);

// 2. Mengurangi isi array
// var arr = ['Galuh','Faiz','Mekel']
// arr[1] = undefined;

// console.log(arr);

// 3. Menampilkan isi array
// var arr = ['Galuh','Faiz','Mekel'];

// for( var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ': ' + arr[i]);
// }

// Manuplasi Mengguanakn METHOD
// 1. join = untuk menampilkan 1 baris pada console. Jadi di join semua arraynya.
// var arr = ['Galuh', 'Faiz', 'Mekel'];

// console.log(arr.join(', '));

// 2. Unshift & Shift. Unshift untuk insert element di awal array (insert bisa multiple). Shift untuk hilangin element di awal array (ga bisa multiple).
// arr.unshift('Yuli', 'Ferry');
// arr.shift();
// console.log(arr.join(', '));

// 3. Push & Pop. Push untuk insert element di akhir array (insert bisa multiple). Pop untuk hilangin element di akhir array (ga bisa multiple).
// arr.push('Yuli', 'Ferry');
// arr.pop();
// console.log(arr.join(', '));

// 4. Splice (Menyatukan) atau menginsert di tengah2 array.
// splice(indexStartnyaDiBerapa, mauDiHapusBerapa, elemenBaru1, elemenBaru2, ...)
// var arr = ['Galuh', 'Faiz', 'Mekel', 'Yuli', 'Ferry'];

// Mulainya di Index 2, Delete 0 array, tambah Acis Rendra
// arr.splice(2, 0, 'Acis', 'Rendra')

// Mulainya di Index 2, Delete 2 array ('Mekel' dan 'Yuli'), insert 'Acis' 'Rendra'
// arr.splice(2, 2, 'Acis', 'Rendra')

// console.log(arr.join(', '));

// 5. Slice (Memotong untuk dibuat array baru)
// slice(awal, akhir) || akhir disini ga diambil, jadi range indexnya antara awal sampai (akhir - 1).
// var arr2 = arr.slice(3, 5);
// var arr2 = arr.slice(1, 4);


// console.log(arr2.join(', '));

// 6. forEach
var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// *function expression
// e sebagai element pada array
// var cetak = function(e) {
//     console.log(e);
// };

// angka.forEach(cetak);

// *function declaration
// angka.forEach(function(e) {
//     console.log(e);
// });

// Kita juga bisa pake index (i)
// var nama = ['Galuh', 'Faiz', 'Mekel', 'Yuli', 'Ferry'];

// var cetak = function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + e);
// };

// nama.forEach(cetak);

// 7. map (Hampir sama dengan forEach tapi dia mengembalikan nilainya array juga yg mana ga bisa kalau pake forEach)
// var angka = [1, 3, 4, 5, 7, 8, 9];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// })

// console.log(angka2.join(', '));

// 8. sort
// *mengurutkan dari karakter utamanya dulu
// var angka = [1, 5, 4, 2, 7, 9, 23, 2];
// angka.sort();

// *untuk mengurutkan dengan benar gunakan function berikut
// angka.sort(function(a,b) {
//     return a-b;
// })

// console.log(angka.join(', '));

// 9. filter (Mengembalikan banyak nilai) (Mengembalikan dalam bentuk array)
var angka = [1, 5, 4, 2, 7, 9, 23, 2];
// var angka2 = angka.filter(function(e) {
//     // return e == 5;
//     return e > 5;
// });

// console.log(angka2);


// 10. find (Mengembalikan satu nilai)
var angka2 = angka.find(function(e) {
    return e > 5;
})

console.log(angka2); // hanya mengembalikan 1 nilai
