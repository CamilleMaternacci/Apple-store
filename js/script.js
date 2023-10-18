let currentProductsMac = productsMac
let currentProductsIphone = productsIphone
let currentProductsIpad = productsIpad
let currentProductsHeadphones = productsHeadphones

let foundProducts
let productFound
let addToBasketButtons

let $productMac
let $foundProducts
let $productFound
let $newProductSearch

const allProducts = [
	...currentProductsMac,
	...currentProductsIphone,
	...currentProductsIpad,
	...currentProductsHeadphones,
]

const productBox = document.querySelector('.product-box')
const productsBoxMac = document.querySelector('.products-box-mac')
const productsBoxIphone = document.querySelector('.products-box-iphone')
const productsBoxIpad = document.querySelector('.products-box-ipad')
const productsBoxMusic = document.querySelector('.products-box-music')
const productsBoxSearch = document.querySelector('.products-box-search')

const macSection = document.querySelector('.mac-section')
const iphoneSection = document.querySelector('.iphone-section')
const ipadSection = document.querySelector('.ipad-section')
const musicSection = document.querySelector('.music-section')
const searchSection = document.querySelector('.search-section')
const allSections = [macSection, iphoneSection, ipadSection, musicSection]

// basket operation

const addToBasketProduct = e => {
	const selectedId = e.target.dataset.id

	const key = allProducts.findIndex(product => product.id == selectedId)

	basket.push(allProducts.at(key))

	const basketTotal = basket.reduce((sum, product) => {
		if (product.sale == true) {
			return (sum += product.price - product.saleAmount)
		} else {
			return (sum += product.price)
		}
	}, 0)

	totalPrice.textContent = ` ${basketTotal} zł`

	$productMac = e.target

	const newLi = document.createElement('li')

	if ($productMac.parentElement.firstElementChild.classList.contains('sale')) {
		newLi.innerHTML = `
        <img src="${$productMac.parentElement.children[1].attributes[0].value}" alt="product-img"><p class="name-product">${$productMac.parentElement.children[2].innerHTML}</p><p class="price-product">${$productMac.parentElement.children[4].children[1].innerHTML}</p>
         `
		productList.append(newLi)
	} else {
		newLi.innerHTML = `
        <img src="${$productMac.parentElement.children[0].attributes[0].value}" alt="product-img"><p class="name-product">${$productMac.parentElement.children[1].innerHTML}</p><p class="price-product">${$productMac.parentElement.children[3].children[0].innerHTML}</p>
         `
		productList.append(newLi)
	}

	if (basket.length == []) {
		basketInfo.style.display = 'block'
	} else {
		basketInfo.style.display = 'none'
	}

	basketQuantity.textContent = basket.length
	if (basket.length !== 0) {
		basketQuantity.classList.add('active-quantity')
	}
}

const openBasket = () => {
	basketArea.classList.toggle('active-basket')
}

const closeBasket = () => {
	basketArea.classList.toggle('active-basket')
}

const clearBasket = () => {
	totalPrice.textContent = ''
	productList.innerHTML = ''
	basketInfo.style.display = 'block'
	basket = []
	basketQuantity.textContent = ''
	basketQuantity.classList.remove('active-quantity')
}

// render Produtcs

const renderProductsMac = items => {
	productsBoxMac.innerHTML = ''
	for (let i = 0; i < items.length; i++) {
		const newProduct = document.createElement('div')
		newProduct.classList.add('product')
		if (items[i].sale == false) {
			newProduct.innerHTML = `
        <img src="${items[i].image}" alt="product-image">
        <h3>${items[i].name}</h3>
        <p class="description">
           ${items[i].description}
        </p>
        <div class="prices-area">
            <p class="final-price">${items[i].price.toFixed(2)} zł</p>
        </div>
        <button data-id="${items[i].id}" class="basket-btn">Dodaj do koszyka</button>
        `
			macSection.append(productsBoxMac)
			productsBoxMac.append(newProduct)
		} else {
			newProduct.innerHTML = `
            <div class="sale"><i class="fa-brands fa-cc-apple-pay"></i>
            <p>Promocja</p>
        </div>
        <img src="${items[i].image}" alt="product-image">
        <h3>${items[i].name}</h3>
        <p class="description">
        ${items[i].description}
        </p>
        <div class="prices-area">
            <p class="before-price">${items[i].price.toFixed(2)} zł</p>
            <p class="final-price">${(items[i].price - items[i].saleAmount).toFixed(2)} zł</p>
        </div>
        <button data-id="${items[i].id}" class="basket-btn">Dodaj do koszyka</button>
            `
			macSection.append(productsBoxMac)
			productsBoxMac.append(newProduct)
		}
	}
}

const renderProductsIphone = items => {
	productsBoxIphone.innerHTML = ''
	for (let i = 0; i < items.length; i++) {
		const newProduct = document.createElement('div')
		newProduct.classList.add('product')
		if (items[i].sale == false) {
			newProduct.innerHTML = `
        <img src="${items[i].image}" alt="product-image">
        <h3>${items[i].name}</h3>
        <p class="description">
           ${items[i].description}
        </p>
        <div class="prices-area">
            <p class="final-price">${items[i].price.toFixed(2)} zł</p>
        </div>
        <button data-id="${items[i].id}" class="basket-btn">Dodaj do koszyka</button>
        `
			iphoneSection.append(productsBoxIphone)
			productsBoxIphone.append(newProduct)
		} else {
			newProduct.innerHTML = `
            <div class="sale"><i class="fa-brands fa-cc-apple-pay"></i>
            <p>Promocja</p>
        </div>
        <img src="${items[i].image}" alt="product-image">
        <h3>${items[i].name}</h3>
        <p class="description">
        ${items[i].description}
        </p>
        <div class="prices-area">
            <p class="before-price">${items[i].price.toFixed(2)} zł</p>
            <p class="final-price">${(items[i].price - items[i].saleAmount).toFixed(2)} zł</p>
        </div>
        <button data-id="${items[i].id}" class="basket-btn">Dodaj do koszyka</button>
            `
			iphoneSection.append(productsBoxIphone)
			productsBoxIphone.append(newProduct)
		}
	}
}

const renderProductsIpad = items => {
	productsBoxIpad.innerHTML = ''
	for (let i = 0; i < items.length; i++) {
		const newProduct = document.createElement('div')
		newProduct.classList.add('product')
		if (items[i].sale == false) {
			newProduct.innerHTML = `
        <img src="${items[i].image}" alt="product-image">
        <h3>${items[i].name}</h3>
        <p class="description">
           ${items[i].description}
        </p>
        <div class="prices-area">
            <p class="final-price">${items[i].price.toFixed(2)} zł</p>
        </div>
        <button data-id="${items[i].id}" class="basket-btn">Dodaj do koszyka</button>
        `
			ipadSection.append(productsBoxIpad)
			productsBoxIpad.append(newProduct)
		} else {
			newProduct.innerHTML = `
            <div class="sale"><i class="fa-brands fa-cc-apple-pay"></i>
            <p>Promocja</p>
        </div>
        <img src="${items[i].image}" alt="product-image">
        <h3>${items[i].name}</h3>
        <p class="description">
        ${items[i].description}
        </p>
        <div class="prices-area">
            <p class="before-price">${items[i].price.toFixed(2)} zł</p>
            <p class="final-price">${(items[i].price - items[i].saleAmount).toFixed(2)} zł</p>
        </div>
        <button data-id="${items[i].id}" class="basket-btn">Dodaj do koszyka</button>
            `
			ipadSection.append(productsBoxIpad)
			productsBoxIpad.append(newProduct)
		}
	}
}

const renderProductsHeadphones = items => {
	productsBoxMusic.innerHTML = ''
	for (let i = 0; i < items.length; i++) {
		const newProduct = document.createElement('div')
		newProduct.classList.add('product')
		if (items[i].sale == false) {
			newProduct.innerHTML = `
        <img src="${items[i].image}" alt="product-image">
        <h3>${items[i].name}</h3>
        <p class="description">
           ${items[i].description}
        </p>
        <div class="prices-area">
            <p class="final-price">${items[i].price.toFixed(2)} zł</p>
        </div>
        <button data-id="${items[i].id}" class="basket-btn">Dodaj do koszyka</button>
        `
			musicSection.append(productsBoxMusic)
			productsBoxMusic.append(newProduct)
		} else {
			newProduct.innerHTML = `
            <div class="sale"><i class="fa-brands fa-cc-apple-pay"></i>
            <p>Promocja</p>
        </div>
        <img src="${items[i].image}" alt="product-image">
        <h3>${items[i].name}</h3>
        <p class="description">
        ${items[i].description}
        </p>
        <div class="prices-area">
            <p class="before-price">${items[i].price.toFixed(2)} zł</p>
            <p class="final-price">${(items[i].price - items[i].saleAmount).toFixed(2)} zł</p>
        </div>
        <button data-id="${items[i].id}" class="basket-btn">Dodaj do koszyka</button>
            `
			musicSection.append(productsBoxMusic)
			productsBoxMusic.append(newProduct)
		}
	}
}

const renderSearchProducts = items => {
	searchSection.style.display = 'block'
	productsBoxSearch.innerHTML = ''
	for (let i = 0; i < items.length; i++) {
		$newProductSearch = document.createElement('div')
		$newProductSearch.classList.add('product')
		if (items[i].sale == false) {
			$newProductSearch.innerHTML = `
        <img src="${items[i].image}" alt="product-image">
        <h3>${items[i].name}</h3>
        <p class="description">
           ${items[i].description}
        </p>
        <div class="prices-area">
            <p class="final-price">${items[i].price.toFixed(2)} zł</p>
        </div>
        <button data-id="${items[i].id}" class="basket-btn">Dodaj do koszyka</button>
        `
			searchSection.append(productsBoxSearch)
			productsBoxSearch.append($newProductSearch)
		} else {
			$newProductSearch.innerHTML = `
            <div class="sale"><i class="fa-brands fa-cc-apple-pay"></i>
            <p>Promocja</p>
        </div>
        <img src="${items[i].image}" alt="product-image">
        <h3>${items[i].name}</h3>
        <p class="description">
        ${items[i].description}
        </p>
        <div class="prices-area">
            <p class="before-price">${items[i].price.toFixed(2)} zł</p>
            <p class="final-price">${(items[i].price - items[i].saleAmount).toFixed(2)} zł</p>
        </div>
        <button data-id="${items[i].id}" class="basket-btn">Dodaj do koszyka</button>
            `
			searchSection.append(productsBoxSearch)
			productsBoxSearch.append($newProductSearch)

			addToBasketButtons = document.querySelectorAll('.basket-btn')
			addToBasketButtons.forEach(btn => {
				btn.addEventListener('click', addToBasketProduct)
			})
		}
	}
}

const renderAllProducts = () => {
	renderProductsMac(currentProductsMac)
	renderProductsIphone(currentProductsIphone)
	renderProductsIpad(currentProductsIpad)
	renderProductsHeadphones(currentProductsHeadphones)
}

document.onload = renderAllProducts()

// search Products

const input = document.querySelector('#input-search')
const searchInfo = document.querySelector('.empty-search')

const searchInInput = e => {
	const search = e.target.value

	$foundProducts = allProducts.filter(product => {
		if (product.name.toLowerCase().includes(search.toLowerCase())) {
			$productFound = product
			return $productFound
		}
	})

	if (input.value !== '') {
		renderSearchProducts($foundProducts)
		allSections.forEach(section => {
			section.style.display = 'none'
		})
		return
	} else {
		searchSection.style.display = 'none'
		allSections.forEach(section => {
			section.style.display = 'block'
		})
	}

	if ($foundProducts.length == 0) {
		searchInfo.style.display = 'block'
	} else {
		searchInfo.style.display = 'none'
	}
}

const startClearInput = () => {
	input.value = ''
}

input.addEventListener('input', searchInInput)
document.onload = startClearInput()

const basketIcon = document.querySelector('.basket-logo')
const closeBasketBtn = document.querySelector('.close-basket')
const cashBtn = document.querySelector('.btn-cash')
const addBasketBtn = document.querySelectorAll('.basket-btn')
const deleteAllBtn = document.querySelector('.delete-all-btn')
const basketArea = document.querySelector('.basket-area')
const totalPrice = document.querySelector('.total-price')
const productList = document.querySelector('.product-list')
const basketInfo = document.querySelector('.basket-empty-info')
let basketQuantity = document.querySelector('.basket-quantity')
let basket = []

basketIcon.addEventListener('click', openBasket)
closeBasketBtn.addEventListener('click', closeBasket)
deleteAllBtn.addEventListener('click', clearBasket)
addBasketBtn.forEach(btn => {
	btn.addEventListener('click', addToBasketProduct)
})

// year

const year = document.querySelector('.year')

const generateYear = () => {
	const currentYear = new Date()
	let date = currentYear.getFullYear()

	year.textContent = date
}

document.onload = generateYear()
