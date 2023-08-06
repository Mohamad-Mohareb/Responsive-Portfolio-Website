<?php
// تضمين ملف PHPMailer
require 'PHPMailer/PHPMailerAutoload.php';

// البيانات المستلمة من النموذج
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// إعداد الرسالة
$mail = new PHPMailer;
$mail->setFrom($email, $name);
$mail->addAddress('mohamadmhareb1999@gmail.com'); // عنوان البريد الإلكتروني الذي سيتم إرسال الرسالة إليه
$mail->Subject = $subject;
$mail->Body = $message;

// إذا تم إرسال البريد بنجاح
if ($mail->send()) {
    echo 'Message sent successfully!';
} else {
    echo 'Error sending message:' . $mail->ErrorInfo;
}
?>
