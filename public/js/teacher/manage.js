define(['jquery', 'template','form'], function ($, template) {
  var s_id = {};
  s_id.tc_id = location.search.slice(1).split('=')[1];
  // console.log(location.search);
  console.log(s_id.tc_id);

  /*页面渲染*/
  if(s_id.tc_id){
    $.ajax({
      type: 'get',
      url: '/api/teacher/edit',
      data: s_id,
      success: function (data) {
        if(data.code===200){
          data.result.title='讲师编辑';
          data.result.saveBtnText='保存';
          $('.body.teacher').html(template('tpl_teacherEdit',data.result));
        }
      }
    });

    /*保存编辑*/
    $('.body.teacher').on('click','.btnSave',function () {
      $('form').ajaxSubmit({
        type: 'post',
        url: '/api/teacher/update',
        success: function () {
          alert('提交成功');
          location.href='/teacher/list';
        },
      });
      return false;
    });
  }
  else{
    $('.body.teacher').html(template('tpl_teacherEdit',{
      title:'讲师添加',
      saveBtnText:'添 加',
      tc_gender: 0  // 默认给一个1,让男被选中
    }));

    $('.body.teacher').on('click','.btnSave',function () {
      $('form').ajaxSubmit({
        type: 'post',
        url: '/api/teacher/add',
        success: function () {
          alert('添加成功');
          location.href='/teacher/list';
        },
      });
      return false;
    });
  }


});