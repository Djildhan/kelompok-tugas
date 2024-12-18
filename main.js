// Array to hold borrowed data
let peminjamanArray = [];

document.getElementById('formPeminjaman').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    
    // Get form input values
    const nama = document.getElementById('nama').value;
    const tanggalPinjam = document.getElementById('tanggalPinjam').value;
    const tanggalKembali = document.getElementById('tanggalKembali').value;

    // Create an object to hold the input data
    const peminjamanData = {
        nama: nama,
        tanggalPinjam: tanggalPinjam,
        tanggalKembali: tanggalKembali
    };

    // Add the data to the array
    peminjamanArray.push(peminjamanData);

    // Display the updated list of borrowed data
    displayPeminjamanList();
    
    // Clear the form
    document.getElementById('formPeminjaman').reset();
});

// Function to display the list of borrowed books
function displayPeminjamanList() {
    const listPeminjaman = document.getElementById('listPeminjaman');
    listPeminjaman.innerHTML = ''; // Clear the list before adding new data

    peminjamanArray.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nama} meminjam pada ${item.tanggalPinjam} dan harus mengembalikan pada ${item.tanggalKembali}`;
        listPeminjaman.appendChild(listItem);
    });
}
