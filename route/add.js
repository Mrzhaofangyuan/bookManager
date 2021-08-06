const bodyParser = require('body-parser');
const { Books } = require('../model/book')
module.exports = async(req, res) => {
    // 获取到数据在数据中中创建数据
    const { bookName, number, position } = req.body
    const isExit = await Books.findOne({ name: bookName });
    if (isExit == null) {
        await Books.create({
            name: bookName,
            number: number,
            position: position,
            inDate: new Date()
        });
        res.status(200)
    } else {
        res.status(400).send('书目已经存在，请检索后编辑...')
    }

    res.redirect('/index.html')
}