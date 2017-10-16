define(['jquery', 'template'], function ($,template) {
  $.ajax({
    type: 'get',
    url: '/api/teacher/profile',
    success: function (data) {
      if (data.code === 200) {
        $('.teacher-profile .settings').html(template('tpl_profile',data.result));
      }
    }
  });
});