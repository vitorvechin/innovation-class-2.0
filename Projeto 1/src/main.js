import './style.css'

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

    const menuTrigger = document.getElementById('menu-trigger')
    const megamenu = document.getElementById('megamenu')
    const megamenuContainer = document.getElementById('megamenu-container')
    const categoriesList = document.getElementById('categories-list')
    const subcategoriesContainer = document.getElementById(
        'subcategories-container',
    )
    let activeCategory = null
    let isMenuOpen = false

    // Initialize categories list
    renderCategories()

    // Show megamenu on hover
    menuTrigger.addEventListener('mouseenter', function () {
        showMenu()
    })

    // Add hover behavior to the entire megamenu container
    megamenuContainer.addEventListener('mouseleave', function () {
        hideMenu()
    })

    // Close megamenu when clicking outside, but not when clicking inside the megamenu
    document.addEventListener('click', function (event) {
        if (!megamenuContainer.contains(event.target)) {
            hideMenu()
        }
    })

    // Stop propagation when clicking inside the megamenu to prevent it from closing
    megamenu.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    function toggleMenu() {
        if (isMenuOpen) {
            hideMenu()
        } else {
            showMenu()
        }
    }

    function showMenu() {
        megamenu.classList.remove('hidden')
        isMenuOpen = true
        // Set first category as active by default if none is active
        if (!activeCategory) {
            setActiveCategory(categories[0])
        }
    }

    function hideMenu() {
        megamenu.classList.add('hidden')
        isMenuOpen = false
    }

    // Render all categories in the sidebar
    function renderCategories() {
        categoriesList.innerHTML = ''

        categories.forEach((category) => {
            const listItem = document.createElement('li')
            listItem.className = `flex items-center justify-between p-2 rounded-md cursor-pointer mb-1 ${
                activeCategory === category
                    ? 'bg-blue-100 text-[#005CFF]'
                    : 'hover:bg-gray-100'
            }`

            listItem.innerHTML = `
          ${category.name}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `

            listItem.addEventListener('click', function (event) {
                setActiveCategory(category)
                event.stopPropagation() // Stop event propagation to prevent menu from closing
            })

            categoriesList.appendChild(listItem)
        })
    }

    // Set active category and render its subcategories
    function setActiveCategory(category) {
        activeCategory = category
        renderCategories() // Re-render to update active state
        renderSubcategories(category)
    }

    // Render subcategories for active category
    function renderSubcategories(category) {
        subcategoriesContainer.innerHTML = ''

        category.subcategories.forEach((subcategory) => {
            const div = document.createElement('div')

            let itemsList = ''
            subcategory.items.forEach((item) => {
                itemsList += `<li class="py-1 text-sm hover:text-[#005CFF] cursor-pointer"><a href="#" class="block">${item}</a></li>`
            })

            div.innerHTML = `
          <h3 class="font-bold text-sm mb-2 text-[#005CFF]">${subcategory.name}</h3>
          <ul>${itemsList}</ul>
        `

            subcategoriesContainer.appendChild(div)
        })
    }

    // Set first category as active by default
    setActiveCategory(categories[0])

    // Seleciona todos os cabeçalhos de dropdown usando a classe específica
    const dropdownHeaders = document.querySelectorAll('.dropdown-header')

    // Adiciona event listener a cada cabeçalho
    dropdownHeaders.forEach((header) => {
        header.addEventListener('click', function () {
            // Seleciona o conteúdo do dropdown (próximo elemento após o cabeçalho)
            const content = this.nextElementSibling

            // Seleciona o ícone SVG dentro do cabeçalho
            const arrow = this.querySelector('.dropdown-arrow')

            // Alterna a classe para rotacionar a seta
            arrow.classList.toggle('rotate-180')

            // Alterna a altura máxima para abrir/fechar o dropdown
            if (content.style.maxHeight) {
                content.style.maxHeight = null
            } else {
                content.style.maxHeight = content.scrollHeight + 'px'
            }

            // Opcional: fechar outros dropdowns quando um é aberto
            dropdownHeaders.forEach((otherHeader) => {
                if (otherHeader !== this) {
                    const otherContent = otherHeader.nextElementSibling
                    const otherArrow =
                        otherHeader.querySelector('.dropdown-arrow')

                    if (otherContent.style.maxHeight) {
                        otherContent.style.maxHeight = null
                        otherArrow.classList.remove('rotate-180')
                    }
                }
            })
        })
    })
})
