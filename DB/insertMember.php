<?php
    header("Content-Type:text/plain; charset=utf-8");

    $data = json_decode(file_get_contents("php://input"));

    $email = $data->email;
    $uid = $data->uid;
    $nickname = $data->nickname;
    $hero = $data->hero;

    // echo "$email : $nickname";

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    $sql = "INSERT INTO member(uid, email, nickname, level, exp, coin, hero) VALUES('$uid', '$email', '$nickname', 1, 0, 10, $hero)";

    $result = mysqli_query($db, $sql);

    if($result) $memberNo = mysqli_insert_id($db);
    else echo "DB 저장 실패";

    if($hero == 1) {
        $sql2 = "INSERT INTO inventory(memberNo, uid, char1, char2, char3, char4, char5, char6, char7, char8, char9, char10, char11, charhiden)
        VALUES($memberNo, '$uid', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)";
    } else {
        $sql2 = "INSERT INTO inventory(memberNo, uid, char1, char2, char3, char4, char5, char6, char7, char8, char9, char10, char11, charhiden)
        VALUES($memberNo, '$uid', 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0)";
    }

    $result2 = mysqli_query($db, $sql2);

    if($result2) echo "회원 가입 완료";
    else echo "DB 저장 실패";

    mysqli_close($db);

?>