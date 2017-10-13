<?php
    // include './dashboard/index.html';
    // var_dump($_SERVER);
    // echo $_SERVER['PATH_INFO'];
    $path='';
    if ( array_key_exists('PATH_INFO',$_SERVER) ) {
    	$path = substr( $_SERVER['PATH_INFO'], 1 ); // 截取最前面的"/"
    	$arr = explode( '/', $path ); // 以'/'为分隔符分割$path

    	if ( count( $arr )==2 ) {  //用户输入类似www.xxx.com/index.php/user/xxx
    		$path = '/'.$path;
    	}else if ( count($arr)==1 ) { //用户输入类似www.xxx.com/index.php/index
    		$path = './dashboard/'.$path;
    	}
    }
    else{  //用户输入类似www.xxx.com/index.php
    		$path = './dashboard/index';
    	}

    include $path.'.html';
?>