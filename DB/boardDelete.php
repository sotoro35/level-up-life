<?php
    header("Content-Type:text/plain; charset=utf-8");

    $uid = $_POST['uid'];
    $no = $_POST['no'];

    // echo "UID: $uid\n";
    // echo "번호: $no\n";

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    $sql = "SELECT * FROM board WHERE no = '$no' AND uid = '$uid'";
    $result = mysqli_query($db, $sql);
    $conunt= mysqli_num_rows($result);

    if($conunt > 0) { 
     $sqlDelete = "DELETE FROM board WHERE no = '$no' AND uid = '$uid'";
        
    $resultDelete = mysqli_query($db, $sqlDelete);

    if($resultDelete){
        echo "게시글이 삭제되었습니다";
    } else {
            echo "삭제실패. 관리자에게 문의하세요";
        }
    }else {
        echo "게시글을 찾을 수 없습니다.";
    }
    
   mysqli_close($db);

?>