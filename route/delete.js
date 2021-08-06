const bodyParser = require('body-parser');
const { Books } = require('../model/book')
module.exports = async(req, res) => {
    const id = req.query.id;
    await Books.findByIdAndDelete({ _id: id })
    res.redirect('/index.html')
}