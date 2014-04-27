<?php
$con=mysql_connect('127.0.0.1','u167341_procopio','KUTfru8E','u167341_paperblox')or die (mysql_error());
mysql_select_db('u167341_paperblox') or die('No se pudo seleccionar la base de datos');
$result ="";
echo "Conexion establecida"."<br>";
$result = mysql_query("SELECT t1.nombre, t2.Puntaje, t2.Nivel FROM `Usuario` AS t1 ,`Partida` AS t2  WHERE t1.clave = t2.claveUsuario order by `Puntaje` desc LIMIT 5")or  die(mysql_error());

echo "Resultados"."<br>";
while ($row = mysql_fetch_assoc($result)) {
    echo $row['nombre']." ";
    echo $row['Puntaje']." ";
	echo $row['Nivel']."<br>";
}
echo "Se cierra la conexion"."<br>";
mysql_close($con);
?>