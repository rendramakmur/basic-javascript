// Refactoring itu seperti optimasi performance dan juga penulisan agar mudah dipahami, dibaca, dan dimaintain.

// Contoh function kubus:
function jumlahVolumeDuaKubus (a, b) {
    var total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

alert(jumlahVolumeDuaKubus(3, 8));


// Refactoring dengan mengurangi jumlah var-nya karena kita bisa menghemat pemakian memory
function jumlahVolumeDuaKubus (a, b) {
    return a * a * a + b * b * b;
}

// Jadi hanya 1 baris, sebenarnya kita bisa saja tanpa menggunakan variable di function
// Setelah membuat program coba untuk dicek apakah ada yang bisa diperbaiki lagi, seperti variable yang tak dibutuhkan, atau ada pengulangan yang tidak efektif.

alert(jumlahVolumeDuaKubus(3, 8));