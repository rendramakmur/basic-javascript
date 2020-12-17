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
var arr = ['Galuh', 'Faiz', 'Mekel', 'Yuli', 'Ferry'];

// Mulainya di Index 2, Delete 0 array, tambah Acis Rendra
// arr.splice(2, 0, 'Acis', 'Rendra')

// Mulainya di Index 2, Delete 2 array ('Mekel' dan 'Yuli'), insert 'Acis' 'Rendra'
// arr.splice(2, 2, 'Acis', 'Rendra')

// console.log(arr.join(', '));

// 5. Slice (Memotong untuk dibuat array baru)
// slice(awal, akhir) || akhir disini ga diambil, jadi range indexnya antara awal sampai (akhir - 1).
// var arr2 = arr.slice(3, 5);
var arr2 = arr.slice(1, 4);


console.log(arr2.join(', '));
