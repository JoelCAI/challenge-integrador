const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const quantity = document.getElementById('quantity');
const addCart = document.getElementById('submit_addCart');

const addItemCart = {
    cantidad: 0
}

add.addEventListener ('click', () => {
    let quantityValue = parseFloat(quantity.value);
    quantityValue++;
    quantity.value = quantityValue;
    addItemCart.cantidad = quantity.value;
    if (quantity.value > 1000) {
        alert('La cantidad no puede superar los 1000 productos, volvera a 0')
        quantity.value = 0;
    }
})

subtract.addEventListener('click', ()=> {
    let quantityValue = parseFloat(quantity.value);
    if (quantityValue === 0) {
    } else {
        quantityValue--,
        console.log(quantityValue),
        quantity.value = quantityValue
        addItemCart.cantidad = quantity.value;
    }
    if (quantity.value > 1000) {
        alert('La cantidad no puede superar los 1000 productos, volvera a 0')
        quantity.value = 0;
    }
 })       

 addCart.addEventListener ('click', () => {
    let quantityValue = parseFloat(quantity.value);
    addItemCart.cantidad = quantityValue
    if (quantityValue < 0) {
        alert('El valor no puede ser menor a 0. Ingrese una cantidad mayor a 0')
        quantity.value = 0
    }
 })


