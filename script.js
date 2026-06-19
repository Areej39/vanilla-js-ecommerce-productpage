//script.js ecommerce-productpage

const products = [

    {
        productName: "Smart Watch",
        price: 2000,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        description: "Modern smartwatch with fitness tracking features.",
        rating: 5
    },


    {
        productName: "AirPods",
        price: 2080,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434",
        description: "Wireless earbuds with high quality sound.",
        rating: 4
    },


    {
        productName: "Gaming Mouse",
        price: 3500,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        description: "RGB gaming mouse with fast response.",
        rating: 5
    },


    {
        productName: "Keyboard",
        price: 4500,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        description: "Mechanical keyboard for gaming and work.",
        rating: 4
    },


    {
        productName: "Bluetooth Speaker",
        price: 3200,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        description: "Portable Bluetooth speaker with deep bass and long battery life.",
        rating: 4
    },


    {
        productName: "Laptop Stand",
        price: 1800,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        description: "Ergonomic aluminum laptop stand for improved comfort and airflow.",
        rating: 5
    },


    {
        productName: "Wireless Keyboard",
        price: 3900,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
        description: "Slim wireless keyboard with responsive keys and long battery life.",
        rating: 4
    }

];

const productContainer = document.getElementById('products');
const cartCount = document.getElementById("cart-count");
const cart = [];

function renderProducts() {
    products.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add('product-card');
        card.innerHTML = `
        <img src="${product.image}" alt="${product.productName}">

        <div class="product-content">
            <h2>${product.productName}</h2>

            <div class="rating">
                ${"★".repeat(product.rating)}
            </div>

            <p class="description">
                ${product.description}
            </p>

            <div class="price">
                $ ${product.price}
            </div>

            <button class="add-cart" data-id="${index}">
                Add to Cart
            </button>
        </div>

        `;
        productContainer.appendChild(card);
    })

}

function addToCart(productIndex) {
    const selectedProduct = products[productIndex];

    cart.push({ ...selectedProduct, quantity: 1 });
    console.log(cart);
    cartCount.textContent = cart.length;
    alert(`${selectedProduct.productName} added to cart`);
}

productContainer.addEventListener('click', (event) => {
    if (!event.target.classList.contains("add-cart")) return;

    const productIndex = event.target.dataset.id;

    addToCart(productIndex);
})

renderProducts();