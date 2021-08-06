function ajax(option) {

    // 定义一个默认的参数
    var defaults = {
        type: 'get',
        url: '',
        async: true,
        application: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {},
        success: function() {},
        error: function() {}
    }

    Object.assign(defaults, option)
    var xhr = new XMLHttpRequest();
    //指定请求方式和请求路径

    var params = '';

    // 拼接参数
    for (var attr in defaults.data) {
        params += attr + '=' + defaults.data[attr] + '&'
    };
    params = params.substr(0, params.length - 1);

    if (defaults.type == 'get') {
        defaults.url = defaults.url + '?' + params
    }
    xhr.open(defaults.type, defaults.url, defaults.async);
    // 发送请求
    var application = defaults.application['Content-Type'];
    console.log(application);
    if (defaults.type == 'post') {
        xhr.setRequestHeader('Content-Type', application);
        console.log(application);
        if (application == 'application/json') {
            xhr.send(JSON.stringify(defaults.data))
        } else {
            xhr.send(params)
        };
    } else {
        xhr.send()
    }
    // 接受服务器相应内容
    xhr.onload = function() {
        // 将服务器返回的json格式在客户端显示为对象
        var dataStyle = xhr.getResponseHeader('Content-Type');
        console.log(dataStyle);
        var responseText = xhr.responseText;
        if (dataStyle.includes('application/json')) {
            responseText = JSON.parse(responseText)
        };
        // 服务器正常相应
        if (xhr.status == 200 || xhr.status == 304) {
            defaults.success(responseText, xhr);
        } else {
            defaults.error(responseText, xhr);
        }
    }
}

// ajax({
//     url: 'http://localhost:3000/second',
//     data: {
//         name: 'zhaofangyuan',
//         age: 20
//     },
//     success: function(data, xhr) {
//         console.log(data);
//         console.log(xhr);
//     }
// })