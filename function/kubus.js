// Manual
var a = 3;
var b = 8;
var volumeA;
var volumeB;
var total;

volumeA = a * a * a;
volumeB = b * b * b;

total = volumeA + volumeB;


console.log(total);

// Dengan function

function jumlahVolumeDuaKubus (a, b) {
    var total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

console.log(jumlahVolumeDuaKubus(3, 8));