<?php
    header("Content-Type:application/json; charset=utf-8");

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    $sql = "SELECT * FROM comment";

    $result = mysqli_query($db, $sql);

    $num = mysqli_num_rows($result);

    $rows = array();
    for($i = 0; $i < $num; $i++) {
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);    //서버테이블에 있는 요소 전부를 연관배열로 불러온다 
        $rows[$i] = $row;
    }

    if($result) echo json_encode($rows);     //불러온 연관배열을 json형태로 바꿔준다
    else echo "실패";

    mysqli_close($db);

?>