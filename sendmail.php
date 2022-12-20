<?php
    ini_set('display_errors', 1);
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
 
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';
    require 'vendor/autoload.php';
    

$mail = new PHPMailer(true);


    try {
        $mail->CharSet = 'UTF-8';
        $mail->setLanguage('ru', 'phpmailer/language/');
        $mail->isHTML(true);

        // Настройки SMTP
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->SMTPDebug = 4;
        $mail->SMTPSecure = 'ssl';
        
        $mail->Host = 'ssl://smtp.mail.ru';
        $mail->Port = 465;
        $mail->Username = 'adzun@list.ru';
        $mail->Password = '2zZj4kKuTDAVynA6Ekd3';

        $mail->setFrom('adzun@list.ru');
        $mail->addAddress('meatwars8@gmail.com');

        $name = $_GET['name'];
        $phone = $_GET['phone'];
        $mail->Body = ''.$name .' оставил заявку на сайте, его телефон' .$phone;

        $mail->send();
        echo 'Отправлено';
}   catch (Exception $e) {
        echo "Ошибкааааа : {$mail->ErrorInfo}";
        }
?>