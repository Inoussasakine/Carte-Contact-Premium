
document.getElementById("downloadContact").addEventListener("click", function(){

const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Roseline SEDDOH NASSARAH
N:SEDDOH NASSARAH;Roseline;;;
ORG:Spa Fleur d'Ebène | Nina Style
TITLE:CEO
TEL;TYPE=CELL:+2290196444879
EMAIL:spa.cotonou@spafleurdebene.com
URL:https://spafleurdebene.com
ADR:;;Cotonou;;;Benin
NOTE:Directrice Génerale des Spas Fleur d'Ebène de Cotonou, Lomé, Abidjan, Bamako, Niamey, Ouagadougou.
END:VCARD`;

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

if (isIOS) {
  window.location.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcard);
} else {
  const blob = new Blob(["﻿" + vcard], { type: 'text/vcard;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Roseline_Seddoh_Nassarah.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

});
