<?php
    header("Content-Type:text/plain; charset=utf-8");

    $boardNo = $_POST['boardNo'];
    $uid = $_POST['uid'];
    $nickname = $_POST['nickname'];
    $level = $_POST['level'];
    $hero = $_POST['hero'];
    $content = $_POST['content'];
    
    

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    $sql = "INSERT INTO comment(boardNo, uid, nickname, level, hero, content) VALUES('$boardNo', '$uid', '$nickname', $level, $hero, '$content')";
    $result = mysqli_query($db, $sql);

    if($result) {
        //move_uploaded_file($tmpName, $dstName);
        echo "댓글 작성 완료";
    } else {
        echo "db저장 실패";
    }
    
    mysqli_close($db);

?>