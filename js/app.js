
let arrOfProduct = [];
let addProductToArray = (id, name, desc, price, img, category) => {
    const product = {
        id: id,
        name: name,
        desc: desc,
        price: price,
        img: img,
        category: category
    }

    arrOfProduct.push(product);

    return arrOfProduct;
}



module.exports = {
    addProductToArray
}