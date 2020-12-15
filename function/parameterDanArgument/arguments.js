// Arguments variable as sudo variable.
// Arguments ada lah variable yang menampung argument dari suatu function, dalam bentuk Array.


// tidak perlu ditentukan pramaternya, jadi kita pake pengulangan dengan variable Arguments
function tambah () {
    var hasil = 0;

    for( i = 0 ; i < arguments.length; i++) {
        hasil += arguments[i];
    }

    return hasil;
}

var coba = tambah(2, 4, 5, 7, 2, 1);

console.log(coba);