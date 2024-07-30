
function getQueryParameters(url) {
    const urlParams = new URLSearchParams(url);
    const params = {};

    for (const [key,value] of urlParams.entries()){
        params[key] = value;
    }
    return params;
}

const data = getQueryParameters(window.location.href);
console.log(data);
console.log("memek");

document.getElementById('invoiceName').innerText = data.nama;
document.getElementById('invoiceEmail').innerText = data.email;
document.getElementById('invoiceAddress').innerText = data.alamat;
document.getElementById('invoicePhone').innerText = data.telepon;

if (data.produk == 1 ) {
    document.getElementById('invoiceProduct').innerText = 'Vest Pria';
    document.getElementById('invoiceTotal').innerText = 'Rp.100,000';
} else if (data.produk == 2) {
    document.getElementById('invoiceProduct').innerText = 'Iphone 15 Pro Max';
    document.getElementById('invoiceTotal').innerText = 'Rp.100,000';
} else if (data.produk == 3) {
    document.getElementById('invoiceProduct').innerText = 'Sneaker Putih';
    document.getElementById('invoiceTotal').innerText = 'Rp.100,000';
} else if (data.produk == 4) {
    document.getElementById('invoiceProduct').innerText = 'Keyboard';
    document.getElementById('invoiceTotal').innerText = 'Rp.100,000';
} else if (data.produk == 5) {
    document.getElementById('invoiceProduct').innerText = 'Korean Dress';
    document.getElementById('invoiceTotal').innerText = 'Rp.100,000';
} else if (data.produk == 6) {
    document.getElementById('invoiceProduct').innerText = 'Loosing Pants';
    document.getElementById('invoiceTotal').innerText = 'Rp.100,000';
} else if (data.produk == 7) {
    document.getElementById('invoiceProduct').innerText = 'Headset';
    document.getElementById('invoiceTotal').innerText = 'Rp.100,000';
}



