alert("Masukkan informasi berikut:\n\n" +
      "Nama Anda:");
var nama = prompt();
alert("Umur Anda:");
var umur = parseInt(prompt());
alert("Studio (A, B, atau C):");
var studio = prompt().toUpperCase();

if (umur < 13) {
    alert("Maaf, Anda belum cukup umur untuk mengakses studio.");
} else {
    if (studio === 'A' || studio === 'B' || studio === 'C') {
        alert("Selamat datang, " + nama + "! Anda dapat mengakses Studio " + studio + ".");
    } else {
        alert("Maaf, studio yang Anda masukkan tidak valid.");
    }
}
