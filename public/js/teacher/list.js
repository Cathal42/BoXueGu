define(['jquery', 'template', 'bootstrap'], function ($, template) {
  /*渲染讲师列表*/
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

  /*查看讲师信息*/
  $('#teacher_list').on('click', 'a.check-info', function () {
    var id = $(this).parent().data('id');
    console.log(id);
    // alert(123);
    $.ajax({
      type: 'get',
      url: '/api/teacher/view',
      data: {tc_id: id},
      success: function (data) {
        if (data.code === 200) {
          $('#teacherInfo').html(template('tpl_teacherInfo', data.result));
          $('#teacherModal').modal();
        }
      }
    });
  });

  /*注销与启用*/
  $('#teacher_list').on('click', 'a.btnHandle', function () {
    // alert(456);
    var id = $(this).parent().data('id');
    var status = $(this).data('status');
    var _this = $(this);
    $.ajax({
      type: 'post',
      url: '/api/teacher/handle',
      data: {
        tc_id: id,
        tc_status: status
      },
      success: function (data) {
        if (data.code === 200) {

          if(data.result.tc_status===0){
            _this.text('注 销');
          }
          else {
            _this.text('启 用');
          }
          _this.data('status',data.result.tc_status);
        }
      }
    });
  });
});