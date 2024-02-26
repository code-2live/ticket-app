alert("Masukkan informasi berikut:\n\n" + "Nama Anda:");

alert("Umur Anda:");

alert("Studio (A, B, atau C):");


if (umur < 13) {
    alert("Maaf, Anda belum cukup umur untuk mengakses studio.");
} else {
    if (studio === 'A' || studio === 'B' || studio === 'C') {
        alert("Selamat datang, " + nama + "! Anda dapat mengakses Studio " + studio + ".");
    } else {
        alert("Maaf, studio yang Anda masukkan tidak valid.");
    }
}
