const mongoose = require('mongoose');
// 创建书目实例规则
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '请填写书目名称']
    },
    number: {
        type: Number,
        required: [true, '请填写书目数量']
    },
    position: {
        type: String,
        required: [true, '请填写存放位置']
    },
    inDate: {
        type: Date
    }
});


// 根据规则创建实例对象
const Books = mongoose.model('Books', bookSchema);

module.exports = {
    Books
}