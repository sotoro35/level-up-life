<?php
    header("Content-Type:text/plain; charset=utf-8");

    $uploadDir = "./boardImgs/";

    if(!is_dir($uploadDir)) {
        mkdir($uploadDir);
    }

    $file = isset($_FILES['img']) ? $_FILES['img'] : null;
    //$file = isset($_FILES['img']) && $_FILES['img']['error'] == 0 ? $_FILES['img'] : null;
    $content = $_POST['content'];
    $uid = $_POST['uid'];
    $no = $_POST['no'];

    // if ($file) {
    //     echo "php에 파일이 도착했어요\n";
    //     echo "파일 정보: \n";
    //     echo "파일 이름: " . $file['name'] . "\n";
    //     echo "파일 타입: " . $file['type'] . "\n";
    //     echo "파일 크기: " . $file['size'] . "\n";
    //     echo "임시 파일 이름: " . $file['tmp_name'] . "\n";
    //     echo "오류: " . $file['error'] . "\n";
    // } else {
    //     echo "파일이 업로드되지 않았습니다.\n";
    // }
    
    // echo "내용: $content\n";
    // echo "UID: $uid\n";
    // echo "번호: $no\n";


    
    $imgName = null;
    $dstName = null;
    if(isset($_FILES['img']) && $_FILES['img']['error'] == 0) {

        $file = $_FILES['img'];
        $fileName = $file['name'];
        $tmpName = $file['tmp_name'];
        $imgName = "IMG_" . date("Y-m-d") . $fileName;
        $dstName = $uploadDir . $imgName;  
       
        // if (move_uploaded_file($tmpName, $dstName)) {
        //     echo "이미지 업로드 성공";
        // } else {
        //     echo "이미지 업로드 실패";
        // }
    }

    if($file) {
        $fileName = $file['name'];
        $tmpName = $file['tmp_name'];
        $imgName = "IMG_" . date("Y-m-d") . $fileName;
        $dstName =  $uploadDir . $imgName;  
        move_uploaded_file($tmpName,$dstName);
        }
    
    $dstName =  $uploadDir . "IMG_" . date("Y-m-d") . $fileName;

    $db = mysqli_connect("localhost", "myhero", "a1s2d3f4!", "myhero");
    mysqli_query($db, "set names utf8");

    $sql = "SELECT * FROM board WHERE no = '$no' AND uid = '$uid'";
    $result = mysqli_query($db, $sql);
    $conunt= mysqli_num_rows($result);

    if($conunt > 0) { 
        if ($imgName) {
            $sqlUpdate = "UPDATE board SET content = '$content', imgUrl = '$imgName' WHERE no = '$no' AND uid = '$uid'";
        } else {
            $sqlUpdate = "UPDATE board SET content = '$content' WHERE no = '$no' AND uid = '$uid'";
        }

        $resultUpdate = mysqli_query($db, $sqlUpdate);

        if($resultUpdate){
            echo "게시글이 수정되었습니다";
        } else {
             echo "수정실패. 관리자에게 문의하세요";
        }
    }else {
        echo "게시글을 찾을 수 없습니다.";
    }
    
   mysqli_close($db);

?>