<?php
    header("Content-Type:text/plain; charset=utf-8");

    $email = $_GET['email'];  //레트로핏 불러오는 방식을 맞춰야

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");
    
    //    찾아온다 email을  어디서?? member 테이블에서 어디?? email에서 
    $sql = "SELECT email FROM member WHERE email='$email'";      //이메일 같은거 찾아오는 과정
    $result = mysqli_query($db, $sql);

    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

    // echo "$email";
    if($result) echo json_encode($row);
    else echo "DB 불러오기 실패";

    mysqli_close($db);

?>