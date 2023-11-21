const createSelectLicense = document.getElementById('createSelectLicense');
const createSelectCategory = document.getElementById('createSelectCategory');
const createPaymentSelect = document.getElementById('createPaymentSelect');

createSelectLicense.style.color ='#B9B9B9';
createSelectCategory.style.color ='#B9B9B9';
createPaymentSelect.style.color ='#B9B9B9';

createSelectLicense.addEventListener('change', (e) => changeColor(e.target.value, 'createSelectLicense'));
createSelectCategory.addEventListener('change', (e) => changeColor(e.target.value, 'createSelectCategory'));
createPaymentSelect.addEventListener('change', (e) => changeColor(e.target.value, 'createPaymentSelect'));



const changeColor = (a,b) => {

    let colorOption = a;
    let valueOption = document.getElementById(b);

    (colorOption === 'gray') 
        ? valueOption.style.color = '#B9B9B9'
        : valueOption.style.color = '#000000'; 
   
}

