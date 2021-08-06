const bodyParser = require('body-parser');
const { Books } = require('../model/book')
module.exports = async(req, res) => {
    const { name, number, position, id } = req.body;
    await Books.updateOne({ _id: id }, { name: name, number: number, position: position, inDate: new Date() });
    res.redirect('/index.html')
}