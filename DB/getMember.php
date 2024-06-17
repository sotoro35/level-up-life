<?php
    header("Content-Type:text/plain; charset=utf-8");

    $uid = $_GET['uid'];

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    $sql = "SELECT * FROM member WHERE uid='$uid'";

    $result = mysqli_query($db, $sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

    if($result) echo json_encode($row);
    else "DB 불러오기 실패"; 
    
    mysqli_close($db);
    
?>