let products = [
    {
        name: "chair",
        inventory: 5,
        unit_price: 45.99,
        room: 'kitchen',
    },
    {
        name: "table",
        inventory: 10,
        unit_price: 123.75,
        room: 'dining',

    },
    {
        name: "sofa",
        inventory: 2,
        unit_price: 399.50,
        room: 'dining',
    },
    {
        name: "bookshelf",
        inventory: 2,
        unit_price: 199.50,
        room: 'dining'
    }
];

const roomDin = products.filter(product => product.room === 'dining')
const roomDinCost = roomDin.map(roomDin => roomDin.unit_price)

console.log(roomDin);
console.log(roomDinCost);

const totalCost = roomDinCost.reduce((acc, x) => acc + x, 0);
const aveCost = totalCost / roomDinCost.length;
console.log(aveCost)