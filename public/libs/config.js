require.config({
  baseUrl: '/public',
  paths: {
    'jquery': 'assets/jquery/jquery.min',
    'cookie': 'assets/jquery-cookie/jquery.cookie',
    'template': 'assets/artTemplate/template',
    'bootstrap': 'assets/bootstrap/js/bootstrap.min',
    'nprogress': 'assets/nprogress/nprogress',
//      'common': 'js/common'
    'common': 'js/dashboard/common',
    'login': 'js/dashboard/login',
    'echarts': 'assets/echarts/echarts.min',
    'form': 'assets/jquery-form/jquery.form',
    'uploadify': 'assets/uploadify/jquery.uploadify.min',
    'datepicker': 'assets/bootstrap-datepicker/js/bootstrap-datepicker.min',
    'datepicker-zh': 'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    'region': 'assets/jquery-region/jquery.region',
    'ckeditor': 'assets/ckeditor/ckeditor'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    },
    'echarts': {
      deps: ['jquery']
    },
    'uploadify': {
      deps: ['jquery']
    },
    'datepicker-zh': {
      deps: ['jquery', 'datepicker']
    },
    'ckeditor': {
      exports: 'CKEDITOR'
    }
  }
});

require(['common']);

// <!--<script src="/public/assets/jquery/jquery.min.js"></script>-->
//   <!--<script src="/public/assets/jquery-cookie/jquery.cookie.js"></script>-->
//   <!--<script src="/public/assets/artTemplate/template.js"></script>-->
//   <!--<script src="/public/assets/bootstrap/js/bootstrap.min.js"></script>-->
//   <!--<script src="/public/assets/nprogress/nprogress.js"></script>-->
//   <!--<script src="/public/assets/echarts/echarts.min.js"></script>-->
//   <!--<script src="/public/js/common.js"></script>-->