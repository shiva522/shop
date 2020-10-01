import { getData } from './getData.js';

const wishList = ['idd005','idd100','idd077','idd033'],
    cartList = [{
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

export const loadData = ()=>{
   if(location.search){
       const search = decodeURI(location.search);
       //const prop = search.split('=')[0].slice(1);
       const prop = search.split('=')[0].substring(1); //аналог строки выше
       const value = search.split('=')[1];
       if(prop === 's'){
           getData.search(value, (data)=> console.log(data));
       }
       else
       if(prop === 'wishlist'){
           getData.wishList(wishList,(data)=> console.dir({wishlist: data}));
       }
       else
       {
           if(prop === 'cat' || prop === 'subcat')//аля защита что бы реагировали только на наши категории cat subcat если в строке браузера (url)ввели левую
           getData.category(prop,value,(data)=> console.log(data));
       }

   }

    if(location.hash){
        getData.item(location.hash.substring(1),(data)=> console.log(data));
    }

    if(location.pathname.includes('cart')){ //если сождержит cart
    getData.cart(cartList, (data) => console.log(data));
    }

    getData.catalog((data) => console.log(data));
    getData.subCatalog("Декор",(data) => console.log(data));
};

