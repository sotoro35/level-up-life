<?php
    header("Content-Type:text/plain; charset=utf-8");

    $uploadDir = "./boardImgs/";

    if(!is_dir($uploadDir)) {
        mkdir($uploadDir);
    }

    $file = isset($_FILES['img']) ? $_FILES['img'] : null;
    $content = $_POST['content'];
    $uid = $_POST['uid'];
    $nickname = $_POST['nickname'];
    $level = $_POST['level'];
    $hero = $_POST['hero'];
    //$fileName = $file['name'];

    // echo "$content \n $fileName"; 
    // echo "$fileName"; 

    // $fileName = $file['name'];
    // $tmpName = $file['tmp_name'];

    $dstName = null;
    if($file) {
        $fileName = $file['name'];
        $tmpName = $file['tmp_name'];
        $imgName = "IMG_" . date("Y-m-d") . $fileName;
        $dstName =  $uploadDir . $imgName;  
        move_uploaded_file($tmpName,$dstName);
        }
    
    // $dstName =  $uploadDir . "IMG_" . date("Y-m-d") . $fileName;

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    $sql = "INSERT INTO board(uid, nickname, level, hero, content, imgUrl) VALUES('$uid', '$nickname', $level, $hero, '$content', '$imgName')";
    $result = mysqli_query($db, $sql);

    if($result) {
        //move_uploaded_file($tmpName, $dstName);
        echo "게시글 작성 완료";
    } else {
        echo "db저장 실패";
    }
    
    mysqli_close($db);

?>