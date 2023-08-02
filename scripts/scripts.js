
const addToBagBtn = document.querySelector('.shop-btn')
const itemImage = document.querySelectorAll('.shop-image')
const itemHeader = document.querySelector('.shop-header')
const shoppinglist = document.querySelector('.shopping-list')
const shopCard = document.querySelector('.shop-wrap')

const bag = []

const items = [
  {
		id: 0,
		src: "./pages/desc_dress_01.html",
		title: "Matilde Crystal Bow Rib-Knitted Mini Dress",
		price: "$700",
	},
	{
		id: 1,
		src: "./pages/desc_dress_01.html",
		title: "Matilde Crystal Bow Rib-Knitted Mini Dress",
		price: "$700",
	},
	{
		id: 2,
		src: "./pages/desc_dress_01.html",
		title: "Matilde Crystal Bow Rib-Knitted Mini Dress",
		price: "$700",
	},
	{
		id: 3,
		src: "./pages/desc_dress_01.html",
		title: "Matilde Crystal Bow Rib-Knitted Mini Dress",
		price: "$700",
	},
	{
		id: 4,
		src: "./pages/desc_dress_01.html",
		title: "Matilde Crystal Bow Rib-Knitted Mini Dress",
		price: "$700",
	},
	{
		id: 5,
		src: "./pages/desc_dress_01.html",
		title: "Matilde Crystal Bow Rib-Knitted Mini Dress",
		price: "$700",
	},
	{
		id: 6,
		src: "./pages/desc_dress_01.html",
		title: "Matilde Crystal Bow Rib-Knitted Mini Dress",
		price: "$700",
	},
	{
		id: 7,
		src: "./pages/desc_dress_01.html",
		title: "Matilde Crystal Bow Rib-Knitted Mini Dress",
		price: "$700",
	},
	{
		id: 8,
		src: "./pages/desc_dress_01.html",
		title: "Matilde Crystal Bow Rib-Knitted Mini Dress",
		price: "$700",
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



 