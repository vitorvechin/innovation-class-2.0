import "./style.css";

const products = [
    {
        img: "/src/assets/foto-carrossel.png",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        originalPrice: "R$100,00",
        price: "R$79,90",
        discount: "10% OFF",
        installment: "10x de R$7,90",
    },
    {
        img: "/src/assets/foto-carrossel.png",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        originalPrice: "R$100,00",
        price: "R$79,90",
        discount: "10% OFF",
        installment: "10x de R$7,90",
    },
    {
        img: "/src/assets/foto-carrossel.png",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        originalPrice: "R$100,00",
        price: "R$79,90",
        discount: "10% OFF",
        installment: "10x de R$7,90",
    },
    {
        img: "/src/assets/foto-carrossel.png",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        originalPrice: "R$100,00",
        price: "R$79,90",
        discount: "10% OFF",
        installment: "10x de R$7,90",
    },
    {
        img: "/src/assets/foto-carrossel.png",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        originalPrice: "R$100,00",
        price: "R$79,90",
        discount: "10% OFF",
        installment: "10x de R$7,90",
    },
];

const template = document.getElementById("product-card");
const container = document.getElementById("product-carousel");

products.forEach((product) => { 
    const card = template.content.cloneNode(true);

    card.querySelector(".product-img").src = product.img;
    card.querySelector(".product-title").textContent = product.title;
    card.querySelector(".product-original-price").textContent = product.originalPrice;
    card.querySelector(".product-price").textContent = product.price;
    card.querySelector(".product-discount").textContent = product.discount;
    card.querySelector(".product-installment").textContent = product.installment;

    container.appendChild(card);
});
