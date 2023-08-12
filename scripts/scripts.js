
const addToBagBtn = document.querySelector('.shop-btn')
const itemImage = document.querySelectorAll('.shop-image')
const itemHeader = document.querySelector('.shop-header')
const shopCard = document.querySelector('.shop-wrap')

const bag = []

const items = [
  {
		id: 0,
		src: "../assets/images/dress_1.jpg",
		title: "Matilde Crystal Bow Rib-Knitted Mini Dress",
		price: "$700",
	},
	{
		id: 1,
		src: "../assets/images/dress_2.jpg",
		title: "Crystal-Embellished Wool Mini Blazer Dress",
		price: "$1745",
	},
	{
		id: 2,
		src: "../assets/images/dress_3.jpg",
		title: "Gaia Cutout Ribbed-Knitted Mini Dress",
		price: "$571",
	},
	{
		id: 3,
		src: "../assets/images/shoes_01.jpg",
		title: "Nicole Satin Sandals",
		price: "$756",
	},
	{
		id: 4,
		src: "../assets/images/dress_4.jpg",
		title: "Crystal-Trimmed Rib-Knitted Mini Dress",
		price: "$616",
	},
	{
		id: 5,
		src: "../assets/images/shoes_02.jpg",
		title: "Double Bow Crystal-Embellished Satin Pumps",
		price: "$1065",
	},
	{
		id: 6,
		src: "../assets/images/jacket_01.jpg",
		title: "Wavy Crystal Trimmed Wool Jacket",
		price: "$775",
	},
	{
		id: 7,
		src: "../assets/images/bag_01.jpg",
		title: "Heart-shaped satin top handle bag",
		price: "$500",
	},
]


  shopCard.addEventListener('click', el => {
  
    if (el.target.closest('.shop-btn')) {
      el.target.style.backgroundColor = '#FFBDD5'
      el.target.style.color = '#fffcfd'
      el.target.innerHTML = 'Item added to bag'
      bag.push(items[el.target.dataset.id])
      createOrderList()

    }

  },)

  function createOrderList () {
    localStorage.setItem("order", JSON.stringify(bag))
  }



 