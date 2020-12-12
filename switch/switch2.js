// Pake .toLowerCase() supaya case insensitive.
var makanan = prompt('Masukkan nama makanan: \n Ex: Nasi, Daging, Susu, Pizza, Hamburger').toLowerCase();

// Ekspresi di switch diubah semua jadi lower case supaya match sama inputnya.
switch(makanan) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('Merupakan makanan sehat');
    break;
    case 'pizza':
    case 'hamburger':
        alert('Merupakan makanan tidak sehat');
    break;
    default:
        alert('Nama makanan yang anda masukkan salah!');
}