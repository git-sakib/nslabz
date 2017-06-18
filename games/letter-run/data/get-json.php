<?php

$myFile = "user-table.json";
$fh = fopen($myFile, 'w') or die("can't open file");
$stringData = $_GET["data"];
fwrite($fh, stripslashes($stringData));
fclose($fh);

?>