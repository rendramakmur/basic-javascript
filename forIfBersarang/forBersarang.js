var s = '';

// // Cetak * 5 baris
// // var i digunakan untuk berapa kali pengulangan
// for(var i = 0; i <= 5; i++) {
//     s += '*';
//     // Setelah cetak * lalu turun ke bawah
//     s += '\n';
// }

// // Cetak ***** 10 baris
// for(var i = 0; i <= 10; i++) {
//     for(var j = 0; j <= 5; j++) {
//         s += '*';
//     }
//     s += '\n';
// }

// // Cetak * ** *** **** ***** tiap baris tambah 1 bintang
// for(var i = 0; i < 5; i++) {
//     for (var j = 0; j <= i; j++) {
//         s += '*'
//     }
//     s += '\n'
// }

// // Cetak ***** tiap baris kurang 1 bintang
// for(var i = 5; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         s += '*'
//     }
//     s += '\n'
// }

// // Cetak setengah ketupat
// for(var i = 0; i < 5; i++) {
//     for(var j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// for(var i = 4; i > 0; i--) {
//     for(var j = 0; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }

// Buat pyramid *
for(var i = 1; i <= 5; i++) {
    for(var j = 1; j <= (5 - i); j++) {
        s += ' ';
    }
    for(var k = 1; k <= i; k++) {
        // Kuncinya di space setelah bintang
        s += '* ';
    }
    s += '\n';
}



// // # # # selang seling, masih error *infinite loop
// for(var i = 0; i < 6; i++) {
// if(i % 2 == 0) {
//     for(var j = 0; j < 6; j++) {
//         if(j % 2 == 0) {
//             s += '#';
//         } else {
//             s += ' ';
//         }
//     }
// } else {
//     for(var j = 0; j < 6; j++) {
//         if(j % 2 == 0) {
//             s += ' ';
//         } else {
//         s += '#';
//         }
//         }
//     }
//     s += '\n';
// }


console.log(s);