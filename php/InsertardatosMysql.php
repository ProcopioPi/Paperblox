<?php

/*http://www.animocion.com/paperblox/php/InsertardatosMysql.php?nombre=edy&score=1234&nivel=3&lineas=4*/

$con=mysql_connect('127.0.0.1','u167341_procopio','KUTfru8E','u167341_paperblox');
mysql_select_db('u167341_paperblox');
$query = mysql_query("INSERT INTO Partida VALUES (NOW(),'".$_GET['nombre']."',".$_GET['score'].",".$_GET['nivel'].",".$_GET['lineas'].")");

echo "INSERT INTO Partida VALUES (NOW(),'".$_GET['nombre']."',".$_GET['score'].",".$_GET['nivel'].",".$_GET['lineas'].")";

mysql_close($con);

?>

