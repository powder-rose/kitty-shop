const shoppinglist = document.querySelector('.bag-list')


window.onload = function () {
   showItems()
}

const order = JSON.parse(localStorage.getItem('order'))

const showItems = () => {
    
    if (order === null){
        shoppinglist.innerHTML = 'Your shopping bag is empty'
    } else {
        shoppinglist.innerHTML = ''
        order.forEach((el, i) => {
            shoppinglist.innerHTML += `<div class="shopping-bag_items"><img class = "item-img"src = "${el['src']}">
            <p class="item-title">${el['title']}</p>
            <p class="item-price">${el['price']}</p>
            <button data-id="${i}" class = "remove-item_btn">remove item</button>
            </div>
            `
            const removeBtn = document.querySelectorAll('.remove-item_btn')
            removeBtn.forEach( btn => btn.addEventListener('click', removeItems))
        })
        
    }
}

function removeItems (e) {
   order.splice(e.currentTarget.dataset.id, 1)
   showItems()
}

