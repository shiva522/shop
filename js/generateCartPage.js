import {getData} from './getData.js';


const generateCartPage = () =>{
    let cartList2 = [{
        id: 'idd015',
        count:3
    },
        {
            id: 'idd045',
            count:1
        },
        {
            id: 'idd095',
            count:2
        }
    ];

    if(location.pathname.includes('cart')){ //если сождержит cart
        const cartList = document.querySelector('.cart-list');

        cartList.textContent = '';

        const renderCartList = (data) => {
            data.forEach(({name: itemName, id, img,price, description, count}) => {
                let options = '';
                let countUser = cartList2.find(item => item.id === id).count;
                if(countUser > count){
                    countUser = count;
                }
                for(let i = 1; i <= count; i++){
                    options +=`<option value=${i}${countUser === i ? ' selected' : ''}>${i}</option>`;
                }


                cartList.insertAdjacentHTML('beforeend',`
                <li class="cart-item">
				<div class="product">
					<div class="product__image-container">
						<img src="${img[0]}" alt="${itemName} - ${description}" >
					</div>
					<div class="product__description">
						<h3 class="product__name">
							<a href="card.html#${id}">${itemName}</a></h3>
						<p class="product_description-text">${description}</p>
					</div>
					<div class="product__prices">
						<div class="product__price-type product__price-type-regular">
							<div>
								<div class="product__total product__total-regular">${price*countUser}.-</div>
								${countUser > 1 ? `<div class="product__price-regular">${price}</div>` : ``}
							</div>
						</div>
					</div>
					<div class="product__controls">

						<div class="product-controls__remove">
							<button type="button" class="btn btn-remove" data-idd="${id}">
								<img src="image/remove-thin-24.16c1cc7a.svg" alt="Удалить товар">
							</button>
						</div>
						<div class="product-controls__quantity">
							<select title="Выберите количество" aria-label="Выберите количество" data-idd="${id}">
	                        ${options}
							</select>
						</div>
					</div>
				</div>
			</li>
                `);
            });
        };

        getData.cart(cartList2, renderCartList);
        cartList.addEventListener('change', (e)=>{
            console.log(e.target.value);//какой элемент вызвал это событие.значение элемента
            console.log(e.target.dataset.idd);//какой элемент вызвал это событие
        })
    }

};

export default generateCartPage;