// Menggunakan prompt untuk input nama
var nama = prompt("Masukkan nama Anda:");

// Menggunakan prompt untuk input umur
var umur = parseInt(prompt("Masukkan umur Anda:"));

// Memeriksa apakah umur lebih besar dari 13
if (umur > 13) {
    // Memilih studio menggunakan prompt
    var pilihanStudio = prompt("Pilih studio (A/B/C):");

    // Memeriksa pilihan studio
    switch (pilihanStudio) {
        case 'A':
            alert("Tiket " + nama + ", Studio A, Umur " + umur);
            break;
        case 'B':
            alert("Tiket " + nama + ", Studio B, Umur " + umur);
            break;
        case 'C':
            alert("Tiket " + nama + ", Studio C, Umur " + umur);
            break;
        default:
            alert("Pilihan studio tidak valid.");
    }
} else {
    alert("Maaf, Anda tidak boleh masuk studio karena umur Anda kurang dari atau sama dengan 13 tahun.");
}
