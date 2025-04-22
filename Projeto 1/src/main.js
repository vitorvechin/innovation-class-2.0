import './style.css'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Cards de produtos
const products = [
    {
        image: '/src/assets/foto-carrossel.png',
        title: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        originalPrice: 'R$ 100,00',
        price: 'R$79,90',
        discount: '20% OFF',
        installment: '10x de R$ 7,90',
    },
    {
        image: '/src/assets/foto-carrossel.png',
        title: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        originalPrice: 'R$ 100,00',
        price: 'R$79,90',
        discount: '20% OFF',
        installment: '10x de R$ 7,90',
    },
    {
        image: '/src/assets/foto-carrossel.png',
        title: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        originalPrice: 'R$ 100,00',
        price: 'R$79,90',
        discount: '20% OFF',
        installment: '10x de R$ 7,90',
    },
    {
        image: '/src/assets/foto-carrossel.png',
        title: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        originalPrice: 'R$ 100,00',
        price: 'R$79,90',
        discount: '20% OFF',
        installment: '10x de R$ 7,90',
    },
    {
        image: '/src/assets/foto-carrossel.png',
        title: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        originalPrice: 'R$ 100,00',
        price: 'R$79,90',
        discount: '20% OFF',
        installment: '10x de R$ 7,90',
    },
    {
        image: '/src/assets/foto-carrossel.png',
        title: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
        originalPrice: 'R$ 100,00',
        price: 'R$79,90',
        discount: '20% OFF',
        installment: '10x de R$ 7,90',
    },
]

// Departamentos e categorias
const categories = [
    {
        name: 'Departamento',
        subcategories: [
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
        ],
    },
    {
        name: 'Departamento',
        subcategories: [
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
        ],
    },
    {
        name: 'Departamento',
        subcategories: [
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
        ],
    },
    {
        name: 'Departamento',
        subcategories: [
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
        ],
    },
    {
        name: 'Departamento',
        subcategories: [
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
        ],
    },
    {
        name: 'Departamento',
        subcategories: [
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
        ],
    },
    {
        name: 'Departamento',
        subcategories: [
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
        ],
    },
    {
        name: 'Departamento',
        subcategories: [
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
            {
                name: 'Categoria',
                items: ['Categoria', 'Categoria', 'Categoria'],
            },
        ],
    },
]

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed')

    // -------------------- DROPDOWN MENU ----------------

    // -------------------- CARROSSEL --------------------

    // Pega o template do card
    const template = document.getElementById('product-card')

    // Seleciona todos os carrosséis na página
    const allSwipers = document.querySelectorAll('.swiper')

    // Popula os carrosséis com os cards
    allSwipers.forEach((swiperContainer) => {
        const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper')

        products.forEach((product) => {
            const cardContent = document.importNode(template.content, true)
            const cardElement = cardContent.firstElementChild
            cardElement.classList.add('swiper-slide')

            // Preencher os dados
            cardElement.querySelector('.product-img').src = product.image
            cardElement.querySelector('.product-title').textContent =
                product.title
            cardElement.querySelector('.product-original-price').textContent =
                product.originalPrice
            cardElement.querySelector('.product-price').textContent =
                product.price
            cardElement.querySelector('.product-discount').textContent =
                product.discount
            cardElement.querySelector('.product-installment').textContent =
                product.installment

            swiperWrapper.appendChild(cardElement)
        })

        // Inicializa o Swiper individualmente
        new Swiper(swiperContainer, {
            modules: [Navigation, Pagination, Autoplay],
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: swiperContainer.querySelector(
                    '.custom-swiper-button-next',
                ),
                prevEl: swiperContainer.querySelector(
                    '.custom-swiper-button-prev',
                ),
            },
            pagination: {
                el: swiperContainer.querySelector('.swiper-pagination'),
                clickable: true,
            },
            slidesPerView: 'auto',
            spaceBetween: 16,
        })
    })

    // -------------------- DROPDOWN FOOTER -----------------

    // Seleciona todos os cabeçalhos de dropdown
    const dropdownHeaders = document.querySelectorAll('.dropdown-header')

    dropdownHeaders.forEach((header) => {
        header.addEventListener('click', function () {
            // Encontra o elemento de conteúdo do dropdown
            const content = this.nextElementSibling

            const arrow = this.querySelector('.dropdown-arrow')

            const isOpen = content.classList.contains('active')

            closeAllDropdowns()

            // Se estiver fechado, abre o dropdown
            if (!isOpen) {
                content.classList.add('active')

                content.style.maxHeight = content.scrollHeight + 'px'

                arrow.style.transform = 'rotate(180deg)'
            }
        })
    })

    // Função para fechar todos os dropdowns
    function closeAllDropdowns() {
        const allContents = document.querySelectorAll('.dropdown-content')
        const allArrows = document.querySelectorAll('.dropdown-arrow')

        allContents.forEach((content) => {
            content.classList.remove('active')
            content.style.maxHeight = '0'
        })

        allArrows.forEach((arrow) => {
            arrow.style.transform = 'rotate(0)'
        })
    }
})
