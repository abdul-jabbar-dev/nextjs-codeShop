import fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'GET') {
        const fileName = './public/tshird.json';
        fs.promises.readFile(fileName, 'utf-8')
        .then((data) => res.status(200).json(JSON.parse(data)))
        .catch((err) => res.status(500).json(err.message));
    }
}
