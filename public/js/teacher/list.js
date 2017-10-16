define(['jquery', 'template', 'bootstrap'], function ($, template) {
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

  $('#teacher_list').on('click', 'a.check-info', function () {
    var id = $(this).parent().data('id');
    console.log(id);
    // alert(123);
    $.ajax({
      type: 'get',
      url: '/api/teacher/view',
      data: {tc_id: id},
      success: function (data) {
        $('#teacherInfo').html(template('tpl_teacherInfo', data.result));
        $('#teacherModal').modal();
      }
    });
  });
});