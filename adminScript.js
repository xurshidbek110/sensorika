document.addEventListener("DOMContentLoaded", () => {
    // LocalStorage dan Productlarni olish
    let Products = JSON.parse(localStorage.getItem("Products")) || [];

    // Har bir Productni chiqarish
    Products.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("col-3", "mt-2");
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${product.picture}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.kurs}</p>
            </div>
        </div>
        `;

        // Stil qo‘shish
        let img = div.querySelector("img");
        img.style.height = "200px";
        img.style.objectFit = "cover";

        document.querySelector(".row").append(div);
    });
});
