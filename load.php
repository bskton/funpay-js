<?php
$url = $_GET['url'];
if (!$url) {
    header($_SERVER["SERVER_PROTOCOL"]." 400 Client Error", true, 400);
} else {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $html = curl_exec($ch);

    if (!curl_errno($ch)) {
        switch ($http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE)) {
            case 200:
                echo $html;
                break;
            default:
                echo 'Нежданный HTTP код: ', $http_code , '. Позовите разработчика, для реализации обработчика.';
        }
    } else {
        echo 'Нежданная ошибка.';
    }

    curl_close($ch);
}