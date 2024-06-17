<?php
    header("Content-Type:text/plain; charset=utf-8");

    $data = json_decode(file_get_contents("php://input"));

    $uid = $data->uid;
    $workTodo = $data->workTodo;
    $state = $data->state;

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    $sql = "INSERT INTO todo(uid, workTodo, state) VALUES('$uid', '$workTodo', $state)";

    $result = mysqli_query($db, $sql);

    if($result) echo "할일 작성 완료";
    else echo "DB 저장 실패";

    mysqli_close($db);


?>