<?php
// Dateiname generieren
 $time = date("Y-M-d-H:i:s");
 $file = dirname(__FILE__)."/form-data-$time.json";
 // Anfrage als json speichern
 file_put_contents($file, json_encode($_POST));
?>
<!-- Bestellbestätigungsseite generieren -->
 <!DOCTYPE html>
 <html lang="en">
 <head>
    <style>
			@import url("https://fonts.googleapis.com/css?family=Lato|Zilla+Slab&display=swap&subset=latin-ext");
		</style>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="bestellung.css">
   
   <title>Document</title>
 </head>
 <body>
   <h1>Herzlichen Dank für Ihre Bestellung</h1>
   <p>
   Ihre Mehlkiste wird am <strong><?php echo $_POST["date"] ?></strong> zwischen <strong>10 Uhr und 12 Uhr</strong> an folgende Adresse geliefert:
   </p>
   <p><?php echo $_POST["name"] ?>, <?php echo $_POST["surname"] ?></p>
   <p><?php echo $_POST["street"] ?>, <?php echo $_POST["housenr"] ?></p>
   <p><?php echo $_POST["city"] ?>, <?php echo $_POST["zipcode"] ?></p>

  <section class="advise">
    <p>
      Bitte halten Sie bei Barzahlung den Betrag von <?php echo $_POST["Gesamtpreis"] ?> bei der Anlieferung zur Bezahlung bereit.
    </p>
  </section>

  <h3>Ihr Team von Korn und Schrot</h3>

  <section class="privacy">
  <p>Informationen zu Ihren persönlichen Daten:
Die von Ihnen eingegebenen Daten werden ausschließlich zum Zweck der Kontaktaufnahme und Geschäftsabwicklung gespeichert und darüber hinaus nicht an Dritte weitergegeben</p>
  </section>
 </body>
 </html>