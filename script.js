
function cekNilai() {
    let input = document.getElementById("Nilai").value;
    let Nilai = Number(input);
    let hasil = document.getElementById("hasil");

    if (input === "" || Nilai < 0 || Nilai > 100) {
        hasil.innerHTML = "Masukkan nilai antara 0 sampai 100!";
        return;
    }

    let grade;
    if (Nilai >= 90) {
        grade = "A";
    } else if (Nilai >= 80) {
        grade = "B";
    } else if (Nilai >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    let keterangan;
    switch (grade) {
        case "A":
            keterangan = "Sangat Baik";
            break;
        case "B":
            keterangan = "Baik";
            break;
        case "C":
            keterangan = "Cukup";
            break;
        default:
            keterangan = "Perlu belajar lagi";
    }

    hasil.innerHTML = "Nilai kamu: " + grade + " (" + keterangan + ")";
} 

