const express = require('express');
const router = express.Router();

const items = [
    {
        id: 1,
        name: 'Tony',
        alias: 'Ironman',
        license: 'marvel'
    },
    {
        id: 2,
        name: 'Bruce',
        alias: 'Batman',
        license: 'dc'
    },
    {
        id: 3,
        name: 'Peter',
        alias: 'spiderman',
        license: 'marvel'
    },
    {
        id: 4,
        name: 'clark',
        alias: 'superman',
        license: 'dc'
    },
]; 

router.get('/items' , (req,res) => {

    const {license} = req.query;

    const licenseFiltered = items.filter( item  => item.license === license)

    if (licenseFiltered.length === 0) {
        res.send(items);
    }

    res.send(licenseFiltered)
    //const {search} = req.query;
    //res.send(search);

    //res.send('Ruta para obtener todos los items');
});

router.get('/items/:item' , (req,res) => {

    const itemId = req.params.item;
    const itemNum = Number(itemId);

    const itemResponse = items.find( el => el.id === itemNum)
    res.send(itemResponse);   

});

router.post('/items/create' , (req,res) => {
    const data = req.body;
    res.send(data);
});

router.put('/items/edit' , (req,res) => {
    res.send('Ruta para editar un item');
});

router.delete('/items/delete' , (req,res) => {
    res.send('Ruta para eliminar item');
});

module.exports = router;