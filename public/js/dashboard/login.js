define(['jquery','cookie'],function ($,cookie) {
  $('#formLogin').on('click', function () {
    var data = $(this).serializeArray();
    $.ajax({
      type: 'post',
      url: '/api/login',
      data: data,
      beforeSend: function () {
        if (data[0].value === '' || data[1].value === '') {
          return false;
        }
      },
      success: function (data) {
        if (data.code === 200) {
          // 将服务器返回的用户头像及用户名信息存入cookie,cookie只存储字符串,故需将传回的json对象转换成字符串
          // 默认cookie有效路径为创建cookie的网页所在的路径，在这里为'/index.php'，为使在整个网站中有效，将其设置为'/'
          $.cookie('userInfo', JSON.stringify(data.result), {path: '/'});
          //登录成功,跳转到主页
          window.location.href = '/index.php';
        }
      },
      error: function () {
        alert('登录失败');
      }
    });
    return false;
  });
});
