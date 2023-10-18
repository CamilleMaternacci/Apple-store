const productsMac = [
	{
		id: 0,
		name: 'Apple iMac 24" Retina 4.5K - 2021 Zielony',
		description: 'M1 8-core GPU 7-core 8GB 256GB SSD',
		category: 'mac',
		price: 7499.0,
		image: 'img/mac-1.webp',
		sale: false,
	},

	{
		id: 1,
		name: 'Apple iMac 24" Retina 4.5K - 2021 Różowy',
		description: 'M1 8-core GPU 8-core 8GB 512GB SSD',
		category: 'mac',
		price: 9899.0,
		image: 'img/mac-2.webp',
		sale: true,
		saleAmount: 200,
	},

	{
		id: 2,
		name: 'Apple MacBook Air 13,6" - 2022 Poświata',
		description: 'M2 8-core GPU 10-core 8GB 512GB SSD',
		category: 'mac',
		price: 7999.0,
		image: 'img/mac-3.webp',
		sale: false,
	},

	{
		id: 3,
		name: 'Apple MacBook Air 13,6" - 2022 Gwiezdny',
		description: 'M2 8-core GPU 10-core 16GB 1TB SSD',
		category: 'mac',
		price: 10399.0,
		image: 'img/mac-4.webp',
		sale: true,
		saleAmount: 400,
	},

	{
		id: 4,
		name: 'Apple MacBook Pro 16" - 2023 Srebrny',
		description: 'M2 Pro 12-core CPU 19-core GPU 16GB 512GB SSD',
		category: 'mac',
		price: 14999.0,
		image: 'img/mac-5.webp',
		sale: false,
	},

	{
		id: 5,
		name: 'Apple MacBook Pro 16" - 2023 Gwiezdny',
		description: 'M2 Pro 12-core CPU 19-core GPU 16GB 1TB SSD',
		category: 'mac',
		price: 16199.0,
		image: 'img/mac-6.png',
		sale: true,
		saleAmount: 200,
	},
]

const productsIphone = [
	
    {
		id: 6,
		name: 'Apple iPhone 11 - Czarny',
		description: 'LCD Multi-Touch 6,1" 64GB',
		category: 'iphone',
		price: 2499.0,
		image: 'img/iphone-1.webp',
		sale: false,
	},

    {
		id: 7,
		name: 'Apple iPhone 12 - Niebieski',
		description: 'OLED Multi-Touch 6,1" 64GB',
		category: 'iphone',
		price: 2899.0,
		image: 'img/iphone-2.webp',
		sale: true,
		saleAmount: 100,
	},

    {
		id: 8,
		name: 'Apple iPhone 13 - Zielony',
		description: 'OLED Multi-Touch 6,1" 128GB',
		category: 'iphone',
		price: 3499.0,
		image: 'img/iphone-3.webp',
		sale: false,
	},

    {
		id: 9,
		name: 'Apple iPhone 14 - Żółty',
		description: 'OLED Multi-Touch 6,1" 128GB',
		category: 'iphone',
		price: 3999.0,
		image: 'img/iphone-4.webp',
		sale: true,
		saleAmount: 200,
	},

    {
		id: 10,
		name: 'Apple iPhone 15 - Różowy',
		description: 'OLED Multi-Touch 6,1" 256GB',
		category: 'iphone',
		price: 5299.0,
		image: 'img/iphone-5.webp',
		sale: false,
	},

    {
		id: 11,
		name: 'Apple iPhone 15 Pro - Tytan',
		description: 'OLED 6,1" 1TB',
		category: 'iphone',
		price: 8999.0,
		image: 'img/iphone-6.webp',
		sale: true,
		saleAmount: 400,
	},
]

const productsIpad = [
	{
		id: 12,
		name: 'Apple iPad Pro 11" - 2021 Gwiezdność',
		description: 'M1 2TB Liquid Retina Wi-Fi',
		category: 'ipad',
		price: 7999.0,
		image: 'img/ipad-1.webp',
		sale: false,
	},

    {
		id: 13,
		name: 'Apple iPad Air 10.9" - 2022 Niebieski',
		description: '64GB Liquid Retina Wi-Fi (5.gen)',
		category: 'ipad',
		price: 3699.0,
		image: 'img/ipad-2.webp',
		sale: true,
		saleAmount: 300,
	},

    {
		id: 14,
		name: 'Apple iPad 10,9" - 2022 Żółty',
		description: '64GB Liquid Retina Wi-Fi + Cellular (10.gen)',
		category: 'ipad',
		price: 3899.0,
		image: 'img/ipad-3.webp',
		sale: false,
	},

    {
		id: 15,
		name: 'Apple iPad mini - 2022 Fioletowy',
		description: '64GB Liquid Retina Wi-Fi',
		category: 'ipad',
		price: 3199.0,
		image: 'img/ipad-4.webp',
		sale: true,
		saleAmount: 200,
	},
]

const productsHeadphones = [
	{
		id: 16,
		name: 'Apple AirPods Max - Space Grey',
		description: 'Apple H1 Bluetooth 5.0',
		category: 'headphones',
		price: 2699.0,
		image: 'img/headphones-1.webp',
		sale: false,
	},

    {
		id: 17,
		name: 'Słuchawki bezprzewodowe Apple AirPods',
		description: 'Apple AirPods 2 Bluetooth 5.0',
		category: 'headphones',
		price: 699.0,
		image: 'img/headphones-2.webp',
		sale: true,
		saleAmount: 100,
	},

	{
		id: 18,
		name: 'Apple AirPods Max - Green',
		description: 'Apple H1 Bluetooth 5.0',
		category: 'headphones',
		price: 2699.0,
		image: 'img/headphones-3.webp',
		sale: false,
	},

	{
		id: 19,
		name: 'Słuchawki douszne Apple EarPods USB-C',
		description: 'Apple EarPods 2 Bluetooth 5.0',
		category: 'headphones',
		price: 119.0,
		image: 'img/headphones-4.webp',
		sale: true,
		saleAmount: 20,
	}
]