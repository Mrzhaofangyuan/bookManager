// 删除书目
function deleteBook(book, that) {
    ajax({
        type: 'get',
        url: '/delete',
        async: true,
        application: {
            'Content-Type': 'application/x-www-urlencoded'
        },
        data: {
            id: book._id
        },
        success: function(books) {
            listBook(that)
        }
    })
};
// 增加书目
function addBook(that) {
    ajax({
        type: 'post',
        url: '/add',
        async: true,
        application: {
            // 注意Content-Type的书写
            'Content-Type': 'application/json'
        },
        data: {
            bookName: that.bookName,
            number: that.bookNum,
            position: that.bookPosition
        },
        success: function() {
            listBook(that)
        },
        error: function(res) {
            alert(res)
        }
    });
    that.bookPosition = '';
    that.bookNum = '';
    that.bookName = '';
};
// 获取所有书目
function listBook(that) {
    ajax({
        type: 'get',
        url: '/list',
        async: true,
        application: {
            'Content-Type': 'application/x-www-urlencoded'
        },
        success: function(books) {
            that.books = books[0]
            console.log(that);
        }
    })

};
// 修改书目
function modifyBook(that) {
    ajax({
        type: 'post',
        url: '/modify',
        data: {
            name: that.bookName,
            number: that.bookNum,
            position: that.bookPosition,
            id: that.bookId
        },
        success: function() {
            listBook(that);
            that.flag = false;
            that.bookPosition = '';
            that.bookNum = '';
            that.bookName = '';
        }
    });

};
// 查询指定书目
function searchBook(that) {
    ajax({
        type: 'post',
        url: '/search',
        async: true,
        application: {
            'Content-Type': 'application/json'
        },
        data: {
            name: that.bookName
        },
        success: function(targetBook) {
            that.books = targetBook
        },
        error: function(res) {
            alert(res)
        }
    });
    that.bookPosition = '';
    that.bookNum = '';
    that.bookName = '';
}