<?php
// Dateiname generieren
 $time = date("Y-M-d-H:i:s");
 $file = dirname(__FILE__)."/form-data-$time.json";
 // Anfrage als json speichern
 file_put_contents($file, json_encode($_POST));
 print_r($_POST); //NOTE TO SELF: MACH WEG
?>
<!-- Bestellbestätigungsseite generieren -->
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>
 </head>
 <body>
   <h1>test</h1>
   <p>
   Ihre Mehlkiste wird am <?php echo $_POST["date"] ?> zwischen 10 Uhr und 12 Uhr an folgende Adresse geliefert:
   </p>
 </body>
 </html>