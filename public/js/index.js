// 引入增加书目处理函数


// 过滤器处理date格式
Vue.filter('dateFormat', function(date, format) {
    return dateFormat(date, format)
});
// 自定义focus指令
Vue.directive('focus', {
    inserted: function(el) {
        el.focus()
    }
});
var vm = new Vue({
    el: '#app',
    data: {
        flag: false,
        books: [],
        bookName: '',
        bookNum: '',
        bookPosition: '',
        bookId: '',
        date: new Date()
    },
    methods: {
        // 增加书目事件处理函数
        addBook: function() {
            console.log(this.flag);
            var that = this;
            if (this.flag) {
                modifyBook(that)
            } else {
                addBook(that)
            }
        },

        modify_book: function(book) {
            // 此处的modify主要内容是将数据填充到input框
            var that = this
            modifyBook(book, that)
                // 根据书名获取到修改对象
            var targetBook = this.books.filter(function(item) {
                return item._id == book._id
            });
            // 将内容填充到input框
            this.bookName = targetBook[0].name;
            this.bookNum = targetBook[0].number;
            this.bookPosition = targetBook[0].position
            this.bookId = targetBook[0]._id
            this.flag = true
        },
        delete_book: function(book) {
            var that = this
            deleteBook(book, that)
        },
        searchbook: function(book) {
            var that = this
            searchBook(that)
        }
    },
    mounted() {
        var that = this;
        listBook(that)
    },


})