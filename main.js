function tampilpromo() {
  alert(
    "🎉 PROMO SPESIAL! 🎉\n\nRemap stage 3 hanya Rp 1.499.000! \nService AC Mobil hanya Rp 99.000!\n\nHubungi kami sekarang:\nWA: 0812-3456-7890"
  );
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  alert(
    "Terima kasih " +
      nama +
      "!\n\nPesan Anda telah diterima.\nKami akan menghubungi Anda segera."
  );

  document.getElementById("contactForm").reset();
});

function cetakForm() {
  var nama = document.getElementById("namaAffiliate").value;
  var email = document.getElementById("emailAffiliate").value;
  var telp = document.getElementById("telpAffiliate").value;
  var alamat = document.getElementById("alamatAffiliate").value;
  var kode = document.getElementById("kodeReferral").value;

  if (!nama || !email || !telp || !alamat) {
    alert("Data belum lengkap, Harap Isi semua data sebelum mencetak!");
    return;
  }

  var printWindow = window.open("", "height=600,width=800");

  printWindow.document.write(`
  <html>
  <head>
    <title>Form Pendaftaran Affiliate</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 40px;
      }
      h1 {
        color: #ff2121;
        text-align: center;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 30px;
      }
      td {
        padding: 10px;
        border: 1px solid #ccc;
      }
      .label {
        font-weight: bold;
        width: 200px;
        background-color: #ffd9d9;
      }
      .header {
        margin-top: 50px;
        text-align: center;
        font-size: 12px;
      }
      .tandatangan{
        position: relative;
        width: 100%;

      }
      
      .tandatangan p{
        margin-left: 80%;
        margin-top: 50% ;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>NHI Performance Garage</h1>
    <div class="header">
      <p>NHI Performance Garage - Bengkel AC & Tune Up Terpercaya</p>
      <p>Hubungi: 0812-3456-7890 | Email: info@NHIperfgarage.com</p>
    </div>
    <table>
      <tr>
        <td class="label">Nama Lengkap</td>
        <td>${nama}</td>
      </tr>
      <tr>
        <td class="label">Email</td>
        <td>${email}</td>
      </tr>
      <tr>
        <td class="label">No. Telepon</td>
        <td>${telp}</td>
      </tr>
      <tr>
        <td class="label">Alamat</td>
        <td>${alamat}</td>
      </tr>

      <tr>
        <td class="label">Kode Referral</td>
        <td> ${kode || "-"}</td>
      </tr>
    </table>

    <div class="tandatangan">
      <p>
        ______________<br><br>Tanda Tangan
      </p>
    </div>
  </body>
</html>
`);

  printWindow.document.close();
  printWindow.print();
}
