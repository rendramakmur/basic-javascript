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

// // Buat pyramid *
// for(var i = 1; i <= 5; i++) {
//     for(var j = 1; j <= (5 - i); j++) {
//         s += ' ';
//     }
//     for(var k = 1; k <= i; k++) {
//         s += '* ';
//     }
//     s += '\n';
// }



// // # # # selang seling, masih error *infinite loop -- Percobaan pertama
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


// // Bikin ketupat selang seling. # # # # *Berhasil! -- Ini percobaan ke dua
// for(i = 1; i <= 6; i++) {
//     if(i % 2 == 0) {
//         for(j = 1; j <= 6; j++) {
//             if(j % 2 == 0) {
//                 s += ' ';
//             } else {
//                 s += '#';
//             }
//         }
//     } else {
//         for(k = 1; k <= 6; k++) {
//             if(k % 2 == 1) {
//                 s += ' ';
//             } else {
//                 s += '#';
//             }
//         }
//     }

//     s += '\n';

// }


//Buat ketupat
//Buat pyramid ke atas dulu

// for(i = 1; i <= 5; i++) {
//     for(j = 1; j <= (5 - i); j++) {
//         s += ' ';
//     }
//     for(k = 1; k <= i; k++) {
//         s += '* ';
//     }
    
//     s += '\n';
// }

// //Buat pyramid ke bawah kemudian
// for(i = 1; i <= 5; i++) {
//     for(j = 1; j <= i; j++) {
//         s += ' ';
//     }
//     for(k = 1; k <= (5 - i); k++) {
//         s += '* ';
//     }

//     s += '\n';
// }

// Latihan 28/12/2020 - Buat ketupat

// for(i = 0; i <= 5; i++) {
//     if (i % 2 !== 0) {
//         for(j = 0; j <= 5; j++) {
//             if(j % 2 == 0) {
//                 s += ' ';
//             } else {
//                 s += '#';
//             }
//         }
//     } else {
//         for(j = 0; j <= 5; j++) {
//             if(j % 2 !==0) {
//                 s += ' ';
//             } else {
//                 s += '#';
//             }
//         }
//     }
    
//     s += '\n';

// }

// Latihan 28/12/2020 - Buat pyramid

for(i = 0; i <= 4; i++) {
    for(j = 0; j <= (4-i); j++) {
        s += ' ';
    }
    for(j = 0; j <= i; j++) {
        s += '* ';
    }

    s += '\n';
}

for(i = 0; i <= 3; i++) {
    for(j = 0; j <= i; j++) {
        s += ' ';
    }
    for(j = 0; j <= (3-i); j++) {
        s += ' *';
    }

    s += '\n';

}

console.log(s);