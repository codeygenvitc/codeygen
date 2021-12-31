<?php
   $host        = getenv('HOST');
   $port        = "port = 5432";
   $dbname      = getenv('DB_NAME');
   $credentials = getenv('DB_USER');
   echo "\n";
   $db = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db) {
      echo "Error : Unable to open database\n";
   } else {
      echo "Opened database successfully\n";
   }
?>
