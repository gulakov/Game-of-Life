<?php
	$con = mysqli_connect("localhost", "root", "sasha", "main");

	
	$ip = $_SERVER['REMOTE_ADDR'];

	if (isset($_POST["type"])){
		if ($_POST["type"]=="update")
			mysqli_query($con,  "UPDATE gameoflife SET array='".$_POST["data"]."' WHERE id='1';") ;
		if ($_POST["type"]=="read")
			echo mysqli_fetch_array(mysqli_query($con,  "SELECT array from gameoflife WHERE id='1';"))[0] ;
			
	}


	?>