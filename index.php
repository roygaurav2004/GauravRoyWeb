<?php

$name= $_REQUEST['name'];
$email= $_REQUEST['email'];
$subject= $_REQUEST['subject'];
$message= $_REQUEST['message'];

if(empty($name) || empty($email) || empty($subject) || empty($message)){
    echo "Please fill all fields...";
}
else{
    mail("roygaurav2004@gmail.com", $subject, $message, "From: $name <$email>");
    echo "<script type='text/javascipt'>alert("Your Message Has Been Delivered !");</script>";
    window.history.log(-1);
}

?>