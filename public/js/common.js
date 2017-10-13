//
// NProgress.start();
//
// NProgress.done();
//
// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

/*判断登录状态*/
//通过判断cookie中是否存在服务器返回的PHPSESSID判断登录状态
//当前页面不是login页面时才需要跳转
if (!$.cookie('PHPSESSID') && location.pathname.indexOf('/login') < 0) {
//  未登录跳转到登录页面
  location.href = 'login';
}

/*渲染aside的用户头像及用户名*/
//当前页面不是login页面才有aside
if(location.pathname.indexOf('/login') < 0){
  // 从cookie取得当前登录用户的用户名及头像，通过模板引擎渲染到aside中
  $('.aside .profile').html(template('tpl_userInfo',JSON.parse($.cookie('userInfo'))));
}