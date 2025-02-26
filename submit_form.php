<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $phone = trim($_POST["phone"]);

    $to = "so1kariev@gmail.com"; // Замени на свою почту
    $subject = "Новая заявка с сайта";
    $message = "Имя: $name\nТелефон: $phone";
    $headers = "From: no-reply@yourdomain.com\r\nReply-To: $to\r\nContent-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "invalid";
}
?>
