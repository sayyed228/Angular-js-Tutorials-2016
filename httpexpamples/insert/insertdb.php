<?php

$data = json_decode(file_get_contents("php://input"));

$con=new mysqli("localhost","root","","test");
$usrname = mysqli_real_escape_string($con,$data->uname);
$upswd = mysqli_real_escape_string($con,$data->pswd);
$uemail = mysqli_real_escape_string($con,$data->email);

$qry_em = 'select count(*) as cnt from demologin where username ="' . $usrname . '"';
$qry_res = mysqli_query($con,$qry_em);
$res = mysqli_fetch_assoc($qry_res);
 
if ($res['cnt'] == 0) {
    $qry = 'INSERT INTO demologin (username,password) values ("' . $usrname . '","' . $upswd . '")';
    $qry_res = mysqli_query($con,$qry);
    if ($qry_res) {
		
        $arr = array('msg' => "User Created Successfully!!!", 'error' => '');
        $jsn = json_encode($arr);
        print_r($jsn);
    } else {
        $arr = array('msg' => "", 'error' => 'Error In inserting record');
        $jsn = json_encode($arr);
        print_r($jsn);
    
} else {
	
   $arr = array('msg' => "", 'error' => 'User Already exists with same email');
   $jsn = json_encode($arr);
   print_r($jsn);
}


?>
