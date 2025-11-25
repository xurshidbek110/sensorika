document.addEventListener("DOMContentLoaded", () => {
    let products = JSON.parse(localStorage.getItem("Products")) || [];

    document.querySelector("#sendBtn").addEventListener("click", (e) => {
        e.preventDefault();

        let name = document.querySelector("#name").value.trim();
        let picture = document.querySelector("#picture").value.trim();
        let kurs = document.querySelector("#course").value;
        let upload = document.querySelector("#upload").files[0];

        if (!name || !kurs) {
            alert("❌ Ism va kursni to‘ldiring!");
            return;
        }

        // Funksiya: mahsulotni saqlash
        function saveProduct(finalImage) {
            let newProduct = {
                id: Date.now(),
                name: name,
                kurs: kurs,
                picture: finalImage
            };

            products.push(newProduct);
            localStorage.setItem("Products", JSON.stringify(products));

            alert("✅ Kurs muvaffaqiyatli qo‘shildi!");

            // Formani tozalash
            document.querySelector("#name").value = "";
            document.querySelector("#picture").value = "";
            document.querySelector("#upload").value = "";
            document.querySelector("#course").value = "";

            // Qo‘shilgandan keyin indexAdmin sahifasiga yo‘naltirish
            window.location.href = "indexAdmin.html";
        }

        // 1) Agar link kiritilgan bo‘lsa
        if (picture) {
            let imgPattern = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i;
            if (!imgPattern.test(picture)) {
                alert("❌ Noto‘g‘ri rasm manzili!");
                return;
            }
            saveProduct(picture);
        }

        // 2) Agar fayl tanlangan bo‘lsa → base64 ga o‘girib saqlaymiz
        else if (upload) {
            let reader = new FileReader();
            reader.onload = function(e) {
                saveProduct(e.target.result); // base64 string saqlanadi
            };
            reader.readAsDataURL(upload);
        }

        // 3) Agar ikkalasi ham bo‘sh bo‘lsa
        else {
            alert("❌ Rasm linkini kiriting yoki device’dan yuklang!");
            return;
        }
    });
});
