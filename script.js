
function submitForm(event) {
    event.preventDefault();
    alert("Formulir berhasil dikirim! Terima kasih atas pesan Anda.");
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
function hitungHarga() {
    const harga = document.getElementById('tempatWisata').value;
    const jumlah = document.getElementById('jumlahTiket').value;
    if (jumlah > 0) {
        const total = harga * jumlah;
        document.getElementById('output').innerText = `Total Harga: Rp ${total.toLocaleString('id-ID')}`;
    } else {
        alert('Masukkan jumlah tiket yang valid!');
    }
}
