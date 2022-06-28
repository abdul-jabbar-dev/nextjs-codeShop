
export default async function handler(req, res) {
    let products = []
    const data = await fetch('http://localhost:3000/api/products/');
    const response = await data.json()
    for (let i = 0; i < response.length; i++) {
        const element = response[i];
        element.category === req.query.category && products.push(element)
    }
    if (req.query.uid) {
        let oneproduct = products.find(product => product.uid === parseInt(req.query.uid))//[prblems]
        res.status(200).json(oneproduct)
    } else {
        res.status(200).json(products)
    }
}
