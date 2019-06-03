// Kilopreise 
var wm405Price = 220;
var wm550Price = 240;
var wm2200Price = 255;
var wmvPrice = 270;
var rg610Price = 185;
var rg815Price = 265;
var dkdPrice = 265;
var dkvPrice = 245;
var hPrice = 650;
var pPrice = 240;

//Umrechnung in Stückpreis
var prices = {
  "wm405-300": (Math.round((wm405Price/3.33))/100).toFixed(2),
  "wm405-500": (Math.round((wm405Price/2))/100).toFixed(2),
  "wm405-1000": (wm405Price/100).toFixed(2),

  "wm550-300": (Math.round((wm550Price/3.33))/100).toFixed(2),
  "wm550-500": (Math.round((wm550Price/2))/100).toFixed(2),
  "wm550-1000": (wm550Price/100).toFixed(2),

  "wm2200-300": (Math.round((wm2200Price/3.33))/100).toFixed(2),
  "wm2200-500": (Math.round((wm2200Price/2))/100).toFixed(2),
  "wm2200-1000": (wm2200Price/100).toFixed(2),

  "wmv-300": (Math.round((wmvPrice/3.33))/100).toFixed(2),
  "wmv-500": (Math.round((wmvPrice/2))/100).toFixed(2),
  "wmv-1000": (wmvPrice/100).toFixed(2),

  "rg610-300": (Math.round((rg610Price/3.33))/100).toFixed(2),
  "rg610-500": (Math.round((rg610Price/2))/100).toFixed(2),
  "rg610-1000": (rg610Price/100).toFixed(2),
  
  "rg815-300": (Math.round((rg815Price/3.33))/100).toFixed(2),
  "rg815-500": (Math.round((rg815Price/2))/100).toFixed(2),
  "rg815-1000": (rg815Price/100).toFixed(2),

  "dkd-300": (Math.round((dkdPrice/3.33))/100).toFixed(2),
  "dkd-500": (Math.round((dkdPrice/2))/100).toFixed(2),
  "dkd-1000": (dkdPrice/100).toFixed(2),

  "dkv-300": (Math.round((dkvPrice/3.33))/100).toFixed(2),
  "dkv-500": (Math.round((dkvPrice/2))/100).toFixed(2),
  "dkv-1000": (dkvPrice/100).toFixed(2),

  "h-300": (Math.round((hPrice/3.33))/100).toFixed(2),
  "h-500": (Math.round((hPrice/2))/100).toFixed(2),
  "h-1000": (hPrice/100).toFixed(2),

  "p-300": (Math.round((pPrice/3.33))/100).toFixed(2),
  "p-500": (Math.round((pPrice/2))/100).toFixed(2),
  "p-1000": (pPrice/100).toFixed(2),
}

$(function(){
  // Auf Änderungen im Eingabefeld hören
  $('tbody :input').change(function(){
    var boxPrice = 0;
    // Über alle Eingabefelder iterieren und Kistenpreis berechnen
    $('tbody :input').each(function() {

      var quantity = $(this).val();
      var unitPrice = prices[$(this).attr('id')];
      boxPrice = boxPrice+(quantity*unitPrice);
    })
    // Felder für Kisten- und Gesamtpreis
    var boxPriceInput = $('#box-price input');
    var totalPriceInput = $('#total-price input');
    // Steuerberechnung und Versand
    taxes = boxPrice * 0.19;
    var shipping = 5.9;
    // Gesamtpreisberechnung
    var totalPrice = (boxPrice + taxes + shipping).toFixed(2);
    boxPrice = boxPrice.toFixed(2);
    // Ausfüllen der Preisfelder
    boxPriceInput.val(boxPrice + ' EUR');
    totalPriceInput.val(totalPrice + ' EUR');
  });
});

// Kalender
$( function() {
  $( "#datepicker" ).datepicker();
} );