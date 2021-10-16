//es6 Object property Shorthand

const name = 'Bhavuk'
const age = 27

const user = {
    name,
    // userAge,
    userAge: age,
    location: 'Australia'
}
// console.log(user)


//object destructuring
const product = {
    label: 'Red notebook',
    stock: 202,
    price: 3,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock
// console.log(label, stock)


        //v-- this is how you rename    v---this is how you give default value
const {price:costPrice, label, rating = 5} = product
console.log(label, costPrice, rating)


//destructuring as function argument GIVEN: it is known that function argument is an object

transaction = (type, {stock, label} = product) => {
    console.log('Item name = '+label+', stock = '+stock+ ' and type of order = '+type)
}

transaction('buy', product)