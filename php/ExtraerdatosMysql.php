<?php
$con=mysql_connect('127.0.0.1','u167341_procopio','KUTfru8E','u167341_paperblox');
mysql_select_db('u167341_paperblox');
$query = mysql_query("SELECT Nombre, Fecha, Puntaje FROM `Partida` order by `Puntaje` desc LIMIT 5");
$data = array();
while ($row = mysql_fetch_assoc($query)) {
    $result =$row['Nombre']."#".$row['Puntaje'];
	$data[] = $result;
}
mysql_close($con);
echo json_encode(array($data,count($data)));
?>