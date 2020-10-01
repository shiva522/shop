const PARAM = {
  cat: 'category',
  subcat: 'subcategory',
    search: ['name','description','category', 'subcategory']
};

export const getData = {
  url:  'database/dataBase.json',
    get(process){ //get: function(process){ - раньше так было //
    fetch(this.url)
        .then((response) => response.json()) //из а зпроса данные переводим в json
        .then(process) //и преедаем эти данные в process
    },
    wishList(list,callback){
        this.get((data)=>{
            const result = data.filter((item)=> list.includes(item.id));
            callback(result);
        })
    },
    item(value,callback){
        this.get((data)=>{
            const result = data.find(item => item.id === value) ;
            callback(result);
        })
    },
    cart(list,callback){
        this.get((data)=>{
            const result = data.filter(item => list
                .some(obj => obj.id === item.id));
            callback(result);
        })
    },
    category(prop,value,callback){
        this.get((data)=>{
            const result = data.filter(item => item[PARAM[prop]].toLowerCase()=== value.toLowerCase());
            callback(result);
        })
    },
    search(value,callback){
        this.get((data)=>{
            const result = data.filter(item => {
                for(const prop in item){ //переборка названий полей а не их значений
                    if(PARAM.search.includes(prop) && item[prop].toLowerCase().includes(value.toLowerCase())){
                        return true;
                    }
                }
            });
            callback(result);
        })
    },

    catalog(callback){
        this.get((data)=>{

        callback(result);
        })
    },
    subCatalog(value,callback){
        this.get((data)=>{

        callback(result);
        })
    },

};

