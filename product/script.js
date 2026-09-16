const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

async function getOneproduct() {
    try {
    document.querySelector("#productlist").innerHTML = "<p>Loading...</p>";
    const response = await fetch(`https://v2.api.noroff.dev/rainy-days/${productId}`);
    const data = await response.json();
    const product = data.data;

    

    document.querySelector("#producttitle").textContent = product.title;
    document.querySelector("#productpicture") .src = product.image.url;
    document.querySelector("#productprice").textContent = `price: ${product.price} dollar`;
    document.querySelector("#productdescription") .textContent= product.description;


    document.querySelector("#addToCartBtn") .addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image.url,
    };   

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("The product has been added to the shopping cart!");
   });
    } catch (error) {
        document.querySelector("#producttitle").textContent = "Something went wrong. Please try again later.";
        console.error("something went wrong", error);
    }
}

getOneproduct();
