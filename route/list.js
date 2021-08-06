const bodyParser = require('body-parser');
const { Books } = require('../model/book')
module.exports = async(req, res) => {
    books = await Books.find();
    res.send(Array(books))
}