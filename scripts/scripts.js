const addToBagBtn = document.querySelector('.shop-btn')
const itemImage = document.querySelector('.shop-image')

const addToBag = (a) => {
   addToBagBtn.style.backgroundColor = '#FFBDD5'
   addToBagBtn.style.color = '#fffcfd'
   addToBagBtn.innerHTML = 'Item added to bag'
   itemImage.style.opacity = 0.6
   addToBagBtn.removeEventListener("click", addToBag)
 }

addToBagBtn.addEventListener("click", addToBag)

