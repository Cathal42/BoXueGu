define(['jquery', 'template', 'form','datepicker','datepicker-zh'], function ($, template,form,datepicker,zh) {
  var s_id = {};
  s_id.tc_id = location.search.slice(1).split('=')[1];

  /*页面渲染*/
  if (s_id.tc_id) {
    $.ajax({
      type: 'get',
      url: '/api/teacher/edit',
      data: s_id,
      success: function (data) {
        if (data.code === 200) {
          data.result.title = '讲师编辑';
          data.result.saveBtnText = '保存';
          $('.body.teacher').html(template('tpl_teacherEdit', data.result));
          $('input[name=tc_join_date]').datepicker({
            format: 'yyyy-mm-dd',
            language: 'zh-CN'
          });
        }
      }
    });

    /*保存编辑*/
    $('.body.teacher').on('click', '.btnSave', function () {
      propose('/api/teacher/update');
      return false;
    });
  }
  else {
    $('.body.teacher').html(template('tpl_teacherEdit', {
      title: '讲师添加',
      saveBtnText: '添 加',
      tc_gender: 0  // 默认给一个1,让男被选中
    }));
    $('input[name=tc_join_date]').datepicker({
      format: 'yyyy-mm-dd',
      language: 'zh-CN'
    });

    $('.body.teacher').on('click', '.btnSave', function () {
      propose('/api/teacher/add');
      return false;
    });
  }

  function propose(url) {
    $('form').ajaxSubmit({
      type: 'post',
      url: url,
      success: function (data) {
        if (data.code === 200) {
          if (url.indexOf('updata') > 0) {
            alert('编辑成功')
          }
          else {
            alert('添加成功');
          }
          location.href = '/teacher/list';
        }
      }
    });
  }


});