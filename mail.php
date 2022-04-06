<?php
use PHPMailer\PHPMailer\PHPMailer;
	if(isset($_POST['submit'])){
		$to = "softwaresaccess1@gmail.com";
		$subject = $_POST['firstname'].' '.$_POST['lastname'];
		$message = $_POST['Message'];
		$headers = "From: ".$_POST['email'];
		$message="You received an email from ".$subject.".\n\n".$message;

		mail($to, $subject, $message, $headers);
		header("Location: Contact.php?mailsend");
    }
?>