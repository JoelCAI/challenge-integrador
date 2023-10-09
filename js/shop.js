const form__QueryBuscar = document.getElementById('formQuery--buscar');
const form__Orden = document.getElementById('form__Orden');


const formShop = {
    valueforSearch: '',
    orderFor: '',
    filterOption: []
}

const productInStore = {
    name: 'Musica',
    
}

form__QueryBuscar.addEventListener('keyup', (e) => {
    if (e.target.value === productInStore.name) {
        formShop.valueforSearch = e.target.value
        console.log(formShop.valueforSearch + ' Ochentas')
        
    }
})

form__Orden.addEventListener('change', () => {
    formShop.orderFor = form__Orden.value
    console.log(formShop.orderFor + ' elegida')
})


const formQuery__checkbox__nuevos = document.getElementById('formQuery__checkbox__nuevos');
const checkbox__filter__nuevos__img = document.getElementById('checkbox__filter__nuevos__img');

const formQuery__checkbox__ofertas = document.getElementById('formQuery__checkbox__ofertas');
const checkbox__filter__ofertas__img = document.getElementById('checkbox__filter__ofertas__img');

const formQuery__checkbox__edicionEspecial = document.getElementById('formQuery__checkbox__edicionEspecial');
const checkbox__filter__edicionEspecial__img = document.getElementById('checkbox__filter__edicionEspecial__img');

const formQuery__checkbox__favoritos = document.getElementById('formQuery__checkbox__favoritos');
const checkbox__filter__favoritos__img = document.getElementById('checkbox__filter__favoritos__img');



formQuery__checkbox__nuevos.addEventListener('click', () => check__img('formQuery__checkbox__nuevos','checkbox__filter__nuevos__img'));
formQuery__checkbox__ofertas.addEventListener('click', () => check__img('formQuery__checkbox__ofertas','checkbox__filter__ofertas__img'));
formQuery__checkbox__edicionEspecial.addEventListener('click', () => check__img('formQuery__checkbox__edicionEspecial','checkbox__filter__edicionEspecial__img'));
formQuery__checkbox__favoritos.addEventListener('click', () => check__img('formQuery__checkbox__favoritos','checkbox__filter__favoritos__img'));



const check__img = (a,b) => {
    let check = document.getElementById(a);
    let imgCheck = document.getElementById(b);
    if (check.checked) {
        imgCheck.style.display = 'block'
    }
    else {
        imgCheck.style.display = 'none'
    }
}    


const form__Checkboxs = document.querySelectorAll('.formQuery__checkbox__input');

for (var i = 0; i < form__Checkboxs.length; i++) {
    form__Checkboxs[i].addEventListener("change", checkedOrNot);
}   

function checkedOrNot() {
  var isChecked = this.checked;

  if (isChecked) { 
    console.log('checked');
    
    form__Checkboxs.forEach( (formQuery__checkbox__input) => {
        if (formQuery__checkbox__input.checked){
            formQuery__checkbox__input.style.background = 'var(--secondary-500)';
            console.log(formQuery__checkbox__input.value);
        } 
    })
  } else { 
    console.log('unchecked');
    form__Checkboxs.forEach( (formQuery__checkbox__input) => {
        if (!formQuery__checkbox__input.checked){
            formQuery__checkbox__input.style.background = 'none';
     }
    })
  }
}



if (typeof(Storage) !== 'undefined') {
    console.log(Storage);
}
else {
    alert('No funciona el Storage')
}

const body = document.querySelector('body')

console.log(body.textContent)








/* Convertir NodeList a Array */ 
// const arrayCheckbox = [].slice.call(form__Checkboxs);

// const bg__arrayCheckbox = '';








/* Capturar los datos del checkbox en un array */

// const checks = document.querySelectorAll('.formQuery__checkbox__input');

// const botonPrueba = document.getElementById('3')

// botonPrueba.addEventListener('click', () => {
//     checks.forEach( (e) => {
//         if(e.checked) {
//             formShop.filterOption.push(e.value)
//         }
//     })
//     console.log(formShop.filterOption)
// })

// console.log(formShop.filterOption)















// const algo = document.getElementById('3');
// const algo2 = document.getElementById('4');



// const reuti = () => {
//     if (e.target.value === productInStore.name) {
//         formShop.valueforSearch = e.target.value
//         console.log(formShop.valueforSearch + ' Ochentas')
//     }
// }

// algo.addEventListener('click', () => saludar('Jon',productInStore))

// const saludar = (name, {cantidadprueba}) => {
//     cantidadprueba = sumar(formShop.a,formShop.b)
//     console.log(`${name} + ${cantidadprueba}`);
// }

// /* lleva llaves cuando son varias lineas de ejecución + la palabra return */ 
// const sumar = (a,b) => {
//     let c = 5;
//     return a+b+c;
// }  


// const suma = sumar(40,45)
// console.log(suma)

// /* lleva solo paréntesis cuando lleva solo una linea de ejecución */ 
// /* Sin la palabra return porque ya es implicita en la flecha */
// const restar = (a,b) => (a-b)

// const resta = restar(19,11)
// console.log(resta)

// botonShopy.addEventListener('click', () => {
//     tienda.valueforSearch = formQueryBuscar.value
// })


// const botonShopy = document.getElementById('pruebaShop');

// botonShopy.addEventListener('click', () => {

//     //tienda.valorBuscar = formQueryBuscar.value
//     if (formQueryBuscar.value === productInStore.name) {
//         console.log(formShop.valueforSearch)
//     }
// })