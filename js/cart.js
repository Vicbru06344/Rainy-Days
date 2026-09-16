function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.querySelector("#cartItems");
    const cartTotal = document.querySelector("#cartTotal");  //må ha # foran query selector

    cartItemsContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement("div");
        row.classList.add("cartRow");

        const picture = document.createElement("img"); //løkkevariabelen
        picture.src = item.image;

        const title = document.createElement("h3");
        title.textContent = item.title;

        const price = document.createElement("p");
        price.textContent = `${item.price} dollar`;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
         });  

         row.appendChild(picture)
         row.appendChild(title);
         row.appendChild(price);
         row.appendChild(removeBtn);
         cartItemsContainer.appendChild(row);

         total += item.price;
        });

        cartTotal.textContent = `Subtotal: ${total} dollar`;
    }
    
    renderCart();