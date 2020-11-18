$(document).ready(function () {
  /*
   * Tampilkan tabel laporan harian
   * Di Load menggunakan ajax via jquery
   * Di tempatkan di div dengan id laporanHarian
   * Mengambil dari root/ajax/printed.html
   * Masih belum tau apakah ini bisa kalau udah dinamis menggunakan PHP
   */
  $("#laporanHarian").load("../ajax/printed.html");
  /*
   * Set nilai default pada tanggal menjadi hari ini
   */
  $("#tanggal").val(new Date().toDateInputValue());
});

/*
 * Membuka tab baru yang berisi dokumen laporan
 * harian dan mentrigger print
 */
function printNewTab() {
  window.open("../ajax/printed.html", "_blank").print();
}

/*
 * Untuk memberikan dukungan timezone
 * dapet dari stackoverflow
 */
Date.prototype.toDateInputValue = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};
