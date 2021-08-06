const bodyParser = require('body-parser');
const { Books } = require('../model/book')
module.exports = async(req, res) => {
    const { name } = req.body;
    const targetBook = await Books.find({ name: name });
    if (targetBook.length == 0) {
        res.status(400).send('未查询到数据')
    } else {
        res.status(200).send(targetBook)
    }
}