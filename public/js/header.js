const navbar__icon__arrowDown = document.getElementById('navbar__icon__arrowDown');
const submenu = document.getElementById('submenu');

let display = 1;

navbar__icon__arrowDown.addEventListener ('click', () => {
    console.log('hola');
    hideShowElement();
})

const hideShowElement = () => {

    if ( display === 1) {
        submenu.style.display = 'block';
        display = 0;
    } else {
        submenu.style.display = 'none';
        display = 1;
    }
}

let cartItem = [1];
 
const iconQuantityCart = document.getElementById('iconQuantityCart');

if (cartItem.length === 0 )
{
    iconQuantityCart.style.display = 'none';
} else{
    iconQuantityCart.style.display = 'block';
    iconQuantityCart.innerText = cartItem.length;
}

