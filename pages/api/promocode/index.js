
export default function handler(req, res) {
    if (req.method === 'POST') {
    }
    res.status(200).json([
        { code: 'HELLO1', discount: '15%', expireDate: '10-jul-2022' },
        { code: 'JABBAR', discount: '10%', expireDate: '12-jul-2022' },
        { code: '15JAVA', discount: '3%', expireDate: '05-jul-2022' },
        { code: 'CODE11', discount: '5%', expireDate: '01-jul-2022' },
        { code: 'CODESH', discount: '4%', expireDate: '06-jul-2022' },
        { code: 'DISCOU', discount: '5%', expireDate: '10-jul-2022' },
        { code: 'MEINCD', discount: '2%', expireDate: '10-jun-2022' },
        { code: 'SDF543', discount: '6%', expireDate: '01-jul-2022' },
        { code: '78DFEE', discount: '8%', expireDate: '01-jul-2022' },
        { code: 'SSRRE0', discount: '6%', expireDate: '03-jul-2022' },
        { code: 'DF4455', discount: '5%', expireDate: '05-jul-2022' },
        { code: 'DF4445', discount: '5%', expireDate: '05-jan-2022' },
    ])
}
