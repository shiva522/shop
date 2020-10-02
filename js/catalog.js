export const catalog = ()=>{
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
//const overlay = document.querySelector('.overlay');
    const btnClose = document.querySelector('.btn-close');
    const catalogList = document.querySelector('.catalog-list');
    const subCatalog = document.querySelector('.subcatalog');
    const subCatalogHeader = document.querySelector('.subcatalog-header');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('beforeend',overlay);

    const openMenu =  () =>{
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    const closeMenu =  () =>{
        closeSubMenu();
        catalog.classList.remove('open');
        overlay.classList.remove('active');
    };

    const openSubMenu = event =>{ //handlerCatalog
        event.preventDefault();
        const target = event.target;
        const itemList = target.closest('.catalog-list__item');
        if(itemList){
            subCatalogHeader.innerHTML = target.innerHTML;
            subCatalog.classList.add('subopen')
        }

        if(event.target.classList.contains('.btn-close')){
            closeMenu();
        }

    };

    const closeSubMenu = () =>{
        subCatalog.classList.remove('subopen');
    };

    btnBurger.addEventListener('click',openMenu);
    btnClose.addEventListener('click',closeMenu);
    overlay.addEventListener('click',closeMenu);
    catalogList.addEventListener('click',openSubMenu);

    document.addEventListener('keydown',(event) =>{
        if(event.code === 'Escape'){
            closeMenu();
        }
    });

};

//export default catalog;