//
// NProgress.start();
//
// NProgress.done();
//
// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

define(['jquery', 'cookie', 'template'], function ($, cookie, template) {
  /*判断登录状态*/
  //  通过判断cookie中是否存在服务器返回的PHPSESSID判断登录状态
  //  当前页面不是login页面时才需要跳转
  if (!$.cookie('PHPSESSID') && location.pathname.indexOf('/login') < 0) {
    //  未登录跳转到登录页面
    location.href = 'login';
  }

  /*渲染aside的用户头像及用户名*/
  //  当前页面不是login页面才有aside
  if (location.pathname.indexOf('/login') < 0) {
    // 从cookie取得当前登录用户的用户名及头像，通过模板引擎渲染到aside中
    $('.aside .profile').html(template('tpl_userInfo', JSON.parse($.cookie('userInfo'))));
  }

  /*退出功能*/
  $('#logout').on('click', function () {
    $.ajax({
      type: 'post',
      url: '/api/logout',
      data: null,
      beforeSend: function () {
        if (!confirm('您确定要退出吗?')) {
          return false;
        }
      },
      success: function (result) {
        if (result.code === '200') {
          alert('退出成功');
          location.href = '/login';
        }
      }
    });
  });

  /*侧边栏交互功能*/
  //  给navs下具有同级ul标签的a标签被选中，使用相邻兄弟选择器选中该ul，再通过prev()方法选中该a标签
  $('.navs a+ul').prev().on('click', function () {
    //  给其兄弟ul添加slideToggle方法
    $(this).next().slideToggle();
  });

  /*侧边栏的选中效果*/
  var pathname = location.pathname;
  /*侧边栏链接页面的所有根路径*/
  var fname = ['teacher', 'category', 'course/add', 'course/list', 'index'];

  for (var i = 0; i < fname.length; i++) {
    /*若pathname匹配中某一根路径*/
    if (pathname.indexOf(fname[i]) > 0) {
      /*去除所有a标签active属性*/
      $('.navs a').removeClass('active');
      /*若位于course下的网页，则展开*/
      if (i >= 2 && i <= 3) $('#course-list').show();
      /*使对应的栏目active*/
      $('.navs a[href*="' + fname[i] + '"]').addClass('active');
      return;
    }
    /*都没匹配中，则是直接访问域名的，使主页栏active*/
    $('.navs a[href="/index"]').addClass('active');
  }

});


