function renderCheckout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const checkoutItemsContainer = document.querySelector("#checkoutItems");
    const checkoutTotal = document.querySelector("#checkoutTotal");

    checkoutItemsContainer.innerHTML="";

    let total = 0;

    cart.forEach(item => {
        const row = document.createElement("div");
        row.classList.add("order");

        const picture = document.createElement("img");
        picture.src = item.image;
        picture.classList.add("order-img");

        const title = document.createElement("p");
        title.textContent = item.title;

        const price = document.createElement("p");
        price.textContent = `${item.price} dollar`;

        row.appendChild(picture);
        row.appendChild(title);
        row.appendChild(price);
        checkoutItemsContainer.appendChild(row);

        total+= item.price;
    });

    checkoutTotal.textContent = `$ ${total}`;
}

renderCheckout();

document.querySelector("#placeOrderBtn") .addEventListener("click", () => {
    localStorage.removeItem("cart");
    window.location.href = "confirmation/index.html";
});