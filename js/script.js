
let allProducts = [];

async function hentData () {
    try {
        document.querySelector("#productlist").innerHTML = "<p>Loading products...</p>";
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        const data = await response.json();
       allProducts = data.data;


        showProducts(allProducts);
    } catch (error) {
        console.error("something went wrong", error);
        document.querySelector("#productlist").innerHTML = "<p>Something went wrong while loading products. Please try again later.</p>";
    }
}
function showProducts(productlist) {
    const productContainer = document.querySelector("#productlist");
    productContainer.innerHTML = "";
    
    productlist.forEach((product) => {   //foreach gjør noe med hver element
        
            const short = document.createElement("div");
            short.classList.add("productshort");

            const lenke = document.createElement("a");
            lenke.href = `product/index.html?id=${product.id}`;

            const picture = document.createElement("img");
            picture.src = product.image.url;
            picture.alt = product.image.alt;

            const title = document.createElement("h3");
            title.textContent = product.title;

            const price = document.createElement("p");
            price.textContent = `${product.price} dollar`;

            lenke.appendChild(picture);
            lenke.appendChild(title);
            lenke.appendChild(price);
            short.appendChild(lenke)
            productContainer .appendChild(short);
        });
    }

hentData();

document.querySelector("#filterAll").addEventListener("click", () => {
    showProducts(allProducts);
});

document.querySelector("#filterWoman").addEventListener("click", () => {
    const filtered = allProducts.filter((product) => product.gender === "Female");
    showProducts(filtered);
});

document.querySelector("#filterMen").addEventListener("click", () => {
    const filtered = allProducts.filter((product) => product.gender === "Male");
    showProducts(filtered);
});
