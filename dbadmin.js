// Admin ro‘yxati
Admin = [
    {
        id: 1,
        username: "admin",
        password: "admin",
        role: "admin"
    }
];

// Mahsulotlar (kurslar)
let Products = JSON.parse(localStorage.getItem("Products")) || [];

// Agar hali bo‘sh bo‘lsa, boshlang‘ich bitta kurs qo‘shamiz
if (Products.length === 0) {
    Products.push({
        id: 1,
        name: "MUHIDDINOVA LAYLO",
        kurs: "Kompyuter savodxonligi",
        picture: "https://sensorika.uz/uploads/posts/2023-10/medium/1697083986_photo_2023-10-12_08-50-03-2.jpg",
        category: "student"
    });

    localStorage.setItem("Products", JSON.stringify(Products));
}
