define(['jquery', 'template', 'uploadify', 'datepicker', 'datepicker-zh'], function ($, template, uploadify, datepicker, zh) {
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
      }
    }
  });


});