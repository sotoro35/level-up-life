<?php
    header("Content-Type:text/plain; charset=utf-8");

    $email = $_GET['email'];
    $nickname = $_GET['nickname'];

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    $sql = "INSERT INTO member(uid, email, nickname, level, exp, coin, sample) VALUES('asa3sa1s3s5a31354as6a45f5wq1', '$email', '$nickname', 1, 0, 10, 'test1')";
    
    $result = mysqli_query($db, $sql);

    if($result) echo "회원가입 완료";
    else echo "DB 저장 실패";

    mysqli_close($db);

?>