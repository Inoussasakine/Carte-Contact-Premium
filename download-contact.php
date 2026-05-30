<?php

$file = __DIR__ . '/assets/img/Roseline_Seddoh_Nassarah_ceo.vcf';

if (!file_exists($file)) {
    die('Fichier introuvable');
}

header('Content-Type: text/x-vcard; charset=utf-8');
header('Content-Disposition: attachment; filename="Roseline_Seddoh_Nassarah.vcf"');
header('Content-Length: ' . filesize($file));

readfile($file);
exit;