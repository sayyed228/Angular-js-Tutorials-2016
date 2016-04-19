<?php 
require_once '../includes/db.php'; // The mysql database connection script
if(isset($_GET['task'])){
$task = $_GET['task'];
$status = $_GET['status'];
//$created = time();

$query="INSERT INTO tasks(task, status)  VALUES ('$task', '$status')";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

echo $json_response = json_encode($result);
}
?>