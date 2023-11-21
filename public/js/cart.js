const addCart = document.getElementById('addCart');
const subtractCart = document.getElementById('subtractCart');
const quantityCart = document.getElementById('quantityCart');


const addItemCartList = {
    cantidad: 0
}

addCart.addEventListener ('click', () => {
    let quantityValue = parseFloat(quantityCart.value);
    quantityValue++;
    quantityCart.value = quantityValue;
    addItemCartList.cantidad = quantityCart.value;
    if (quantityCart.value > 1000 ) {
        alert('La cantidad no puede superar los 1000 productos, volvera a 0')
        quantityCart.value = 0;
    }
    else if (quantityCart.value < 0 ) {
        alert('La cantidad no puede ser negativa, volvera a 0')
        quantityCart.value = 0;
    }
})

subtractCart.addEventListener('click', ()=> {
    let quantityValue = parseFloat(quantityCart.value);
    if (quantityValue === 0) {
    } else {
        quantityValue--,
        console.log(quantityValue),
        quantityCart.value = quantityValue
        addItemCartList.cantidad = quantityCart.value;
    }
    if (quantityCart.value > 1000) {
        alert('La cantidad no puede superar los 1000 productos, volvera a 0')
        quantityCart.value = 0;
    }
    else if (quantityCart.value < 0 ) {
        alert('La cantidad no puede ser negativa, volvera a 0')
        quantityCart.value = 0;
    }
 })       
