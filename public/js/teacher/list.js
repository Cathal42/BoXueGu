define(['jquery','template'], function ($,template) {
  $.ajax({
    type: 'get',
    url: '/api/teacher',
    data: null,
    success: function (data) {
      if (data.code === 200) {
        $('#teacher_list').html(template('tpl_teaherList', {items: data.result}));
      }
    }
  });
});