function tambah (a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}

// Bentuk Biasa-
// var hasil = tambah(5, 3);
// console.log(hasil);


// Bentuk Prompt-
// var a = parseInt(prompt('Masukkan nilai 1:'));
// var b = parseInt(prompt('Masukkan nilai 2:'));
// var hasil = tambah(a*2, b*2);
// alert('Hasilnya adalah: ' + hasil);

// Parameter berbentuk function-
var hasil = kali(tambah(1, 2), tambah(2,2));
console.log(hasil);