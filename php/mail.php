  
<?php
$name = trim(strip_tags($_POST['name']));
$mail = trim(strip_tags($_POST['mail']));
$phone = trim(strip_tags($_POST['phone']));
$massage = trim(strip_tags($_POST['mesag']));
/*$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";*/
/*$subject ="Нове повідомлення із сайту loren.if.ua";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
$message1 ="\n\nІмя: ".$name."\n\nТелефон: " .$phone."\n\nE-mail: " .$mail."\n\nПовідомлення: ".$massage."\n\n";
$header = "Content-Type: text/html; charset=utf-8\n";
$header .= "From: Нове повідомлення <loren.decor@ukr.net>\n\n";
$success = mail("loren.decor@ukr.net", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));*/
$subject = "=?utf-8?B?".base64_encode("Повідомлення із сайту декору.")."?=";
$headers = "From: $mail\r\nReply-to: $mail\r\nContent-type: text/html; charset=utf-8\r\n";
$mass = "gh";
$text = "\n\nІмя: ".$name."\n\nТелефон: " .$phone."\n\nE-mail: " .$mail."\n\nПовідомлення: ".$mass."\n\n";
$success = mail("loren.decor@ukr.net",  $subject, $massage, $headers);
echo $success;
?>