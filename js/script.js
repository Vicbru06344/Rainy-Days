console.log("Hei, JavaScript er koblet til");

async function hentData () {
    try {
        const response = await fetch("https://v2.api.noroff.dev/rainy-days");
        const data = await response.json();
        const productContainer = document.querySelector("#productlist");

        data.data. forEach((product) => {
            const short = document.createElement("div");
            short.classList.add("productshort");

            const picture = document.createElement("img");
            picture.src = product.image.url;
            picture.alt = product.image.alt;

            const title = document.createElement("h3");
            title.textContent = product.title;

            const price = document.createElement("p");
            price.textContent = `${product.price} dollar`;

            short.appendChild(picture);
            short.appendChild(title);
            short.appendChild(price);
            productContainer .appendChild(short);
        });

        } catch (error) {
            console.error ("Noe gikk galt", error);
        }
    }
    hentData();

