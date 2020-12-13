//Tulis pseudocode

//Alert rules, tebak 1-10, 3 kesempatan
alert('GAME TEBAK ANGKA \n\nTebak angka dari 1-10. Anda memiliki 3x kesempatan.');

//Get number dari player *[dipindahkan ke dalem looping]


//Get random number 1-10 dari computer
var comp = Math.floor(Math.random() * 10) + 1;
console.log(comp);


//Rules, kalau benar, kalau > dari angka comp, dan < dari angka comp
for(i = 2; i >= 0; i--) {

    //get numbernya dimasukin ke dalem looping
    var player = prompt('Masukkan angka yang anda tebak:');

    if(player == null || player == '') {
        break;
    } else if(player == comp) {
        alert('Selamat tebakan anda benar, angka-nya adalah: ' + comp);
        break;
    } else if (player < comp) {
        alert('Kekecilan, naikkan nilai angkanya.\nKesempatan anda tinggal ' + i + 'x');
    } else if (player > comp) {
        alert('Kebesaran, turunkan nilai angkanya.\nKesempatan anda tinggal ' + i + 'x')
    }

    if(i == 0) {
        alert('Kesempatan anda telah habis.\nAngka yang benar adalah: ' + comp);
    }
}
//Diloop selama 3x

//Alert kalau kemsempatan habis
//Alert angka yang benar itu berapa