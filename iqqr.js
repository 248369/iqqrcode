function qrcode()
{
 
   var background = document.getElementById("background").value.substring(1);
   var foreground = document.getElementById("foreground").value.substring(1);
   var chartsize = document.getElementById("chartsize").value+"x"+document.getElementById("chartsize").value;
   var link = 'https://image-charts.com/chart?choe=UTF-8';
   var text_to_qr=document.getElementById("text_to_qr").value;
   
   if(document.getElementById("text_to_qr").value=="")text_to_qr="default value";
   if(document.getElementById("chartsize").value=="")chartsize="200x200";
   
   var esc = window.encodeURIComponent ? window.encodeURIComponent : escape;
   var url = text_to_qr;
   var cht = link + "&icqrb=" + background + "&icqrf=" + foreground + "&cht=qr" + "&chs=" + chartsize + "&chl=" + esc(url);
   
   //var qrresult = "<img  src='" + cht + "' />";
  // document.write(qrresult);
  document.getElementById("qr_img_display").src = cht;
  window.location.href=document.getElementById("qr_img_display").src;
  
}
