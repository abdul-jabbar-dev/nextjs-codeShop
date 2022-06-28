import fs from 'fs';
export default async function handler(req, res) {
    const fileName = './public/store/products';
    if (req.method === 'GET') {
        const allFiles = []
        const folders = await fs.promises.readdir(fileName, (err, files) => files)
        for (let i = 0; i < folders.length; i++) {
            const gets = await fs.promises.readFile(fileName + '/' + folders[i], 'utf-8');
            const items = await JSON.parse(gets)
            items.map(item => {
                allFiles.push(item)
            })

        }
        res.status(200).json(allFiles)
    }
}
