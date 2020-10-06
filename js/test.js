const getData = async (url) =>{ //асинхронная функция/ она всегда возвращает promise
    const response = await fetch(url);//т.к. только получаем данные, никаких доп параметров не надо
    //"await" значит что дальше код не будет выполняться пока строчка выше не выполниться/ даже присвоение выше не произойдет пока не выполниться
    if(!response.ok){
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();
};
//https://jsonplaceholder.typicode.com/todos/1
//getResource('database/database.json').then( (data) =>console.log(data));
//console.log(data);


//async function getData(){} //пример создания асинхронной функции типа function declaration
//const getDb = async function (){} //пример создания асинхронной функции типа function expression

const sendData = async(url, data) => {
    const response = await fetch(url,{
     method: 'POST',
        //body: JSON.stringify(data) //если известно что данные всегда будут в json тогда делам так иначе эта строка "body: data,"
        body: data,
    });

    if(!response.ok){
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();
};