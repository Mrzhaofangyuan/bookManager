const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const { Books } = require('./model/book')

const app = express();
// 引入数据库连接程序
require('./model/connection')

// 引入静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
// 设置默认模板地址
app.set('view', path.join(__dirname, 'view'));
// 采用bodyParser解析json数据内容
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 处理路由
app.post('/add', require('./route/add'));
app.get('/list', require('./route/list'));
app.get('/delete', require('./route/delete'));
app.post('/modify', require('./route/modify'));
app.post('/search', require('./route/search'))


app.listen(3000);
console.log('服务器连接成功');