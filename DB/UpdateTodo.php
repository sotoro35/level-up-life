<?php
    header("Content-Type:text/plain; charset=utf-8");

    $no = $_GET['no'];

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    // 연결 실패시 에러 메세지
    if (!$db) {
        die("데이터베이스 연결 실패: " . mysqli_connect_error());
    }

    // Prepared statement 사용
    $stmt = $db->prepare("UPDATE todo SET state = 1 WHERE no = $no");
    $stmt->bind_param("i", $no);
    $result = $stmt->execute();

    
    if($result) echo "업데이트 성공";
    else echo "업데이트 실패: " . $stmt->error;

    // Prepared statement와 데이터베이스 연결을 닫습니다.
    $stmt->close();
    mysqli_close($db);
?>
