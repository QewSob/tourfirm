<?php
$to = "solkariev@mail.com";
$subject = "Тестовое письмо";
$message = "Привет! Это тестовое письмо с PHP.";
$headers = "From: no-reply@yourdomain.com\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "Письмо успешно отправлено!";
} else {
    echo "Ошибка при отправке письма!";
}
?>
