$(document).ready(function () {
  /*
   * Tampilkan tabel laporan harian
   * Di Load menggunakan ajax via jquery
   * Di tempatkan di div dengan id laporanHarian
   * Mengambil dari root/ajax/printed.html
   */
  $("#laporanHarian").load("../ajax/printed.html");
});

function printNewTab() {
  window.open("../ajax/printed.html", "_blank").print();
}