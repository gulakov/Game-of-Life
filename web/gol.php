
<?php

$initArray = $_GET["init"];


$o=array();
for($i=0;$i<50;$i++){
	array_push($o, shell_exec('python main.py '.strval($i).' '.$initArray));
}

echo json_encode($o);

?>
