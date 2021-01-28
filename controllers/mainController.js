let menu = [
    {
        id: 1,
        nombre : 'Carpaccio fresco',
        descripcion : 'Entrada Carpaccio de salmón con cítricos',
        precio : 65.50,
        imagen : '/images/Carpaccio-de-salmon.jpg',
    }, 
    {
        id: 2,
        nombre : 'Risotto de berenjena',
        descripcion : 'Risotto de berenjena y queso de cabra',
        precio : 47.00,
        imagen : '/images/Risotto-berenjena-queso-cabra.jpg',
    }, 
    {
        id: 3,
        nombre : 'Mousse de arroz',
        descripcion : 'Mousse de arroz con leche y aroma de azahar',
        precio : 27.50,
        imagen : '/images/Mousse-de-arroz-con-leche.jpg',
    }, 
    {
        id: 4,
        nombre : 'Espárragos blancos',
        descripcion : 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio : 37.50,
        imagen : '/images/esparragos.png',
    }, 
    {
        id: 5,
        nombre : 'Empanadas',
        descripcion : undefined,
        precio : 2.50,
        imagen : undefined,
    }, 
];


const controller = {
    index: (req, res) => {

        return res.render('index', {'menu': menu});

    },

    detalles: (req, res) => {
        nID = req.params.id
        plato = menu.find(platillo => platillo.id == nID)

        return res.render('detalleMenu', {'plato': plato});

    },
    
}

module.exports = controller;