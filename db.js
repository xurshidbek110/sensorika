// Foydalanuvchilar ro‘yxati
Users = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        role: "admin"
    },
    {
        id: 2,
        username: "xurshid",
        password: "xurshid",
        role: "user"
    }
];

// Dastlabki Studentlar ro‘yxati
let DefaultStudents = [
    // Kompyuter savodxonligi
    {
        id: 1,
        name: "MUHIDDINOVA LAYLO",
        kurs: "Kompyuter savodxonligi",
        rasm: "https://sensorika.uz/uploads/posts/2023-10/medium/1697083986_photo_2023-10-12_08-50-03-2.jpg"
    },
    {
        id: 2,
        name: "SOYIBOV SARDORBEK",
        kurs: "Kompyuter savodxonligi",
        rasm: "https://sensorika.uz/uploads/posts/2024-05/1716373978_photo_37_2024-05-22_14-45-36.jpg"
    },
    {
        id: 3,
        name: "KARIMOV SHOHJAXON",
        kurs: "Kompyuter savodxonligi",
        rasm: "https://sensorika.uz/uploads/posts/2023-04/medium/1680875922_photo_2023-04-06_20-14-41-2.jpg"
    },
    {
        id: 4,
        name: "TOSHOVA NAVRUZOY",
        kurs: "Kompyuter savodxonligi",
        rasm: "https://sensorika.uz/uploads/posts/2022-01/medium/1643461066_toshova1.jpg"
    },
    {
        id: 5,
        name: "ESHMURODOV AMIRBEK",
        kurs: "Kompyuter savodxonligi",
        rasm: "https://sensorika.uz/uploads/posts/2024-04/1713930271_photo_57_2024-04-24_08-15-51.jpg"
    },
    // Front-End
    {
        id: 6,
        name: "USMONOV SARDORJON",
        kurs: "Front-End dasturlash",
        rasm: "https://sensorika.uz/uploads/posts/2024-10/1729738136_img_e3366-kopirovat.jpg"
    },
    {
        id: 7,
        name: "ERGASHEV ASADBEK",
        kurs: "Front-End dasturlash",
        rasm: "https://sensorika.uz/templates/Default/dleimages/no_image.jpg"
    },
    {
        id: 8,
        name: "SAMATOV AKOBIR",
        kurs: "Front-End dasturlash",
        rasm: "https://sensorika.uz/templates/Default/dleimages/no_image.jpg"
    },
    {
        id: 9,
        name: "NORMUXAMMADOV AVAZBEK",
        kurs: "Front-End dasturlash",
        rasm: "https://sensorika.uz/templates/Default/dleimages/no_image.jpg"
    },
    {
        id: 10,
        name: "MUXITDINOVA LOLAXON",
        kurs: "Front-End dasturlash",
        rasm: "https://sensorika.uz/templates/Default/dleimages/no_image.jpg"
    },
    // Back-End
    {
        id: 11,
        name: "ESHMURODOV AMIRBEK",
        kurs: "Back-End dasturlash",
        rasm: "https://sensorika.uz/uploads/posts/2025-08/1755144915_photo_10_2025-08-14_09-11-29.jpg"
    },
    {
        id: 12,
        name: "SHAVKATOV RO'ZIBEK",
        kurs: "Back-End dasturlash",
        rasm: "https://sensorika.uz/uploads/posts/2025-08/1755352790_photo_4_2025-08-16_18-57-00.jpg"
    },
    {
        id: 13,
        name: "O'KTAMOVA MUQADDAS",
        kurs: "Back-End dasturlash",
        rasm: "https://sensorika.uz/uploads/posts/2025-09/1756879096_photo_3_2025-09-03_10-52-32.jpg"
    },
    {
        id: 14,
        name: "SAYDULLAEV ASADBEK",
        kurs: "Back-End dasturlash",
        rasm: "https://sensorika.uz/uploads/posts/2025-08/1755155097_photo_4_2025-08-14_12-02-06.jpg"
    },
    {
        id: 15,
        name: "RASHIDOVA DIYORA",
        kurs: "Back-End dasturlash",
        rasm: "https://sensorika.uz/uploads/posts/2025-08/1755144825_photo_3_2025-08-14_09-11-29.jpg"
    },
    // Grafik dizayn
    {
        id: 16,
        name: "JO'RAQULOV FAYZULLO",
        kurs: "Grafik dizayn",
        rasm: "https://sensorika.uz/uploads/posts/2025-07/1752204430_photo_1_2025-07-11_08-24-37.jpg"
    },
    {
        id: 17,
        name: "HAQNAZAROV SANJAR",
        kurs: "Grafik dizayn",
        rasm: "https://sensorika.uz/uploads/posts/2025-08/1756358144_photo_5_2025-08-28_10-12-26.jpg"
    },
    {
        id: 18,
        name: "SHAKIROV JASURBEK",
        kurs: "Grafik dizayn",
        rasm: "https://sensorika.uz/uploads/posts/2025-09/1756783429_photo_3_2025-09-02_08-20-29.jpg"
    },
    {
        id: 19,
        name: "USMANOVA HANIFA",
        kurs: "Grafik dizayn",
        rasm: "https://sensorika.uz/uploads/posts/2025-08/1754547039_photo_35_2025-08-07_10-58-37.jpg"
    },
    {
        id: 20,
        name: "XVALCHEVA ZARINA",
        kurs: "Grafik dizayn",
        rasm: "https://sensorika.uz/uploads/posts/2025-07/1752204528_photo_5_2025-07-11_08-24-37.jpg"
    }
];

// LocalStorage bilan birlashtirish
let ExtraProducts = JSON.parse(localStorage.getItem("Products")) || [];

// Students = Default + Admin qo‘shganlar
Students = [...DefaultStudents, ...ExtraProducts];
