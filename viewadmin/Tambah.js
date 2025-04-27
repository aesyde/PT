document.getElementById("menuForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const menuName = document.getElementById("menuName").value;
    const menuCategory = document.getElementById("menuCategory").value;
    const menuDescription = document.getElementById("menuDescription").value;
    const menuPrice = document.getElementById("menuPrice").value;
    const menuPhoto = document.getElementById("menuPhoto").files[0];

    if (menuName && menuCategory && menuDescription && menuPrice) {
        alert(`Menu ${menuName} berhasil ditambahkan!`);
        console.log("Menu Data:");
        console.log("Nama:", menuName);
        console.log("Kategori:", menuCategory);
        console.log("Deskripsi:", menuDescription);
        console.log("Harga:", menuPrice);
        console.log("Foto:", menuPhoto ? menuPhoto.name : "Tidak ada foto");
    } else {
        alert("Harap isi semua field dengan benar.");
    }
});
