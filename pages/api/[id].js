const products = [
    {id: '1', name: 'Shoe', price: '3000'},
    {id: '2', name: 'Watch', price: '2000'},
    {id: '3', name: 'Cloth', price: '6000'},
    {id: '4', name: 'Phone', price: '4000'},
    {id: '5', name: 'Car', price: '10000'},
]
export default function handler(req, res){
    console.log(req);
    const id = req.query.id
    let good = products.find((item)=>item.id == id)
    res.json(good)
}