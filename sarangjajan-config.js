// Menu
var jumlahSiHitamManis = document.getElementById("jumlah_si_hitam_manis");
var jumlahPeriStroberi = document.getElementById("jumlah_peri_stroberi");
var jumlahBobakuDanBobamu = document.getElementById("jumlah_bobaku_dan_bobamu");
var jumlahEsKelapaMesrah = document.getElementById("jumlah_es_kelapa_mesrah");

// Total Belanja
var totalHargaMakanan = document.getElementById("total_harga_makanan");
var totalHargaMinuman = document.getElementById("total_harga_minuman");
var totalSiHitamManis = document.getElementById("total_si_hitam_manis");
var totalPeriStroberi = document.getElementById("total_peri_stroberi");
var totalBobakuDanBobamu = document.getElementById("total_bobaku_dan_bobamu");
var totalEsKelapaMesrah = document.getElementById("total_es_kelapa_mesrah");

var totalHargaSiHitamManis;
var totalHargaPeriStroberi;
var totalHargaBobakuDanBobamu;
var totalHargaEsKelapaMesrah;

function tambahMakanan(jenisMakanan) {
    switch (jenisMakanan) {
        case "siHitamManis":
            var currentTotal = jumlahSiHitamManis.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahSiHitamManis.innerHTML = currentTotal;
            totalSiHitamManis.innerHTML = currentTotal;
            break;
        case "periStroberi":
            var currentTotal = jumlahPeriStroberi.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahPeriStroberi.innerHTML = currentTotal;
            totalPeriStroberi.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBelanja();
}

function kurangiMakanan(jenisMakanan) {
    switch (jenisMakanan) {
        case "siHitamManis":
            var currentTotal = jumlahSiHitamManis.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahSiHitamManis.innerHTML = currentTotal;
            totalSiHitamManis.innerHTML = currentTotal;
            break;
        case "periStroberi":
            var currentTotal = jumlahPeriStroberi.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahPeriStroberi.innerHTML = currentTotal;
            totalPeriStroberi.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBelanja();
}

function tambahMinuman(jenisMinuman) {
    switch (jenisMinuman) {
        case "bobakuDanBobamu":
            var currentTotal = jumlahBobakuDanBobamu.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahBobakuDanBobamu.innerHTML = currentTotal;
            totalBobakuDanBobamu.innerHTML = currentTotal;
            break;
        case "esKelapaMesrah":
            var currentTotal = jumlahEsKelapaMesrah.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahEsKelapaMesrah.innerHTML = currentTotal;
            totalEsKelapaMesrah.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBelanja();
}

function kurangiMinuman(jenisMinuman) {
    switch (jenisMinuman) {
        case "bobakuDanBobamu":
            var currentTotal = jumlahBobakuDanBobamu.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahBobakuDanBobamu.innerHTML = currentTotal;
            totalBobakuDanBobamu.innerHTML = currentTotal;
            break;
        case "esKelapaMesrah":
            var currentTotal = jumlahEsKelapaMesrah.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahEsKelapaMesrah.innerHTML = currentTotal;
            totalEsKelapaMesrah.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBelanja();
}

function hitungTotalBelanja() {
    totalHargaSiHitamManis = parseInt(totalSiHitamManis.innerHTML) * 3500;
    totalHargaPeriStroberi = parseInt(totalPeriStroberi.innerHTML) * 4000;
    totalHargaBobakuDanBobamu = parseInt(totalBobakuDanBobamu.innerHTML) * 9500;
    totalHargaEsKelapaMesrah = parseInt(totalEsKelapaMesrah.innerHTML) * 11500;

    totalHargaMakanan.innerHTML = totalHargaSiHitamManis + totalHargaPeriStroberi;
    totalHargaMinuman.innerHTML = totalHargaBobakuDanBobamu + totalHargaEsKelapaMesrah;

    statusButtonJajan();
}

function jajan() {
    var namaUser = document.getElementById("card_nama_user");
    var strukBelanja = "Hai, " + namaUser.innerHTML + "\n\n" +
        "Terimakasih telah memesan makanan dan minuman di Sarang Jajan! \n" +
        "Berikut adalah rincian pesanan anda: \n\n" +
        totalSiHitamManis.innerHTML + " item Si Hitam Manis: Rp. " + totalHargaSiHitamManis + "\n" +
        totalPeriStroberi.innerHTML + " item Peri Stroberi: Rp. " + totalHargaPeriStroberi + "\n" +
        totalBobakuDanBobamu.innerHTML + " item Bobaku dan Bobamu: Rp. " + totalHargaBobakuDanBobamu + "\n" +
        totalEsKelapaMesrah.innerHTML + " item Es Kelapa Mesrah: Rp. " + totalHargaEsKelapaMesrah + "\n\n" +
        "Maka,\n" +
        "Total harga makanan: Rp. " + totalHargaMakanan.innerHTML + "\n" +
        "Total harga minuman: Rp. " + totalHargaMinuman.innerHTML + "\n\n" +
        "Silahkan lakukan proses pembayaran di kasir ya :D";

    return strukBelanja;
}

function statusButtonJajan() {
    if (
        totalHargaSiHitamManis == 0 &&
        totalHargaPeriStroberi == 0 &&
        totalHargaBobakuDanBobamu == 0 &&
        totalHargaEsKelapaMesrah == 0
    ) {
        document.getElementById("button_jajan").disabled = true;
    } else {
        document.getElementById("button_jajan").disabled = false;
    }
}