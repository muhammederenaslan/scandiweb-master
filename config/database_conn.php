<?php


//veritabanı bağlantısı için gerekli bilgileri ayarla
$db_servername = "localhost";
$db_username = "root";
$db_name = "veritabani_adi";

// veritabanı bağlantısı oluştur
$conn = mysqli_connect($db_servername, $db_username, $db_name);

// bağlantıyı kontrol et
if (!$conn) {
    die("Veritabanı bağlantısı başarısız: " . mysqli_connect_error());
}
