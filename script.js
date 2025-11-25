document.addEventListener("DOMContentLoaded", () => {
    // Students massivini ham, Products massivini ham chiqaramiz
    let students = Students; 
    let products = JSON.parse(localStorage.getItem("Products")) || [];

    // Ikkala massivni bitta qilib qo‘shamiz
    let allData = [...students, ...products];

    allData.forEach((item) => {
        let col3 = document.createElement("div");
        col3.classList.add("col-3");
        col3.innerHTML = `
        <div class="card">
            <a href="singlepage.html?id=${item.id}"><div class="img-back">
            <img src="${item.rasm || item.picture}" class="card-img-top" alt="..."">
            </div></a>
            <div class="card-body">
                <h6 class="card-title">${item.name}</h6>
                <p class="card-text">${item.kurs} <br> O'quv kursi bitiruvchisi</p>
                <a href="singlepage.html?id=${item.id}" class="btn btn-primary">About Student</a>
            </div>
        </div>
        `;

        document.querySelector(".row").append(col3);
    });
});
