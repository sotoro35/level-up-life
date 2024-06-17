<?php
    header("Content-Type:text/plain; charset=utf-8");

    $no = $_GET['no'];

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    $sql = "DELETE FROM todo WHERE no=$no ";

    $result = mysqli_query($db, $sql);

    if($result) echo "삭제 성공";
    else echo "삭제 실패";
    
    mysqli_close($db);

?>