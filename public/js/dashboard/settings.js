define(['jquery', 'template', 'uploadify', 'datepicker', 'datepicker-zh', 'region', 'ckeditor','form'], function ($, template, uploadify, datepicker, zh, region, ckeditor,form) {
  /*渲染页面*/
  $.ajax({
    type: 'get',
    url: '/api/teacher/profile',
    success: function (data) {
      if (data.code === 200) {
        $('.teacher-profile .settings').html(template('tpl_profile', data.result));

        /*使用图片上传插件*/
        $('#upfile').uploadify({
          'swf': '/public/assets/uploadify/uploadify.swf',
          'uploader': '/api/uploader/avatar',
          'width': 120,
          'height': 120,
          'buttonText': '',
          'fileObjName': 'tc_avatar',
          'itemTemplate': '<span></span>',
          onUploadSuccess: function (file, data, response) {
            $('.preview img').attr('src', JSON.parse(data).result.path);
          }
        });

        /*使用日期插件*/
        $('input[name="tc_birthday"],input[name="tc_join_date"]').datepicker({
          format: 'yyyy-mm-dd',
          language: 'zh-CN'
        });

        /*使用三级联动插件*/
        $('#region').region({
          url: '/public/assets/jquery-region/region.json'
        });

        /*使用富文本插件*/
        CKEDITOR.replace('introduce', {
          toolbarGroups: [
            {name: 'clipboard', groups: ['clipboard', 'undo']},
            {name: 'links'},
            {name: 'document', groups: ['mode', 'document', 'doctools']},
            {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
            {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']}
          ]
        })
      }
    }
  });

  /*提交保存*/
  $('.settings').on('click', '.btnSave', function () {
    //  先要获取富文本编辑器的内容
    $('#introduce').val(CKEDITOR.instances.introduce.getData());
    $('form').ajaxSubmit({
      url: '/api/teacher/modify',
      type: 'post',
      success: function (data) {
        if (data.code === 200) {
          alert('保存成功');
          location.href = '/settings';
        }
      }
    });
    return false;
  });
});