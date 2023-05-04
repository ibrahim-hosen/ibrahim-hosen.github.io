<?php
$data = array();
if( !empty($_POST['email']) ){

	$full_name = trim($_POST['fullname']);
	$to = 'aleppo.support@info.com';
	$subject = trim($_POST['subject']);
	$from = trim($_POST['email']);
	$message = trim($_POST['message']);

	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	 
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
	    'Reply-To: '.$from."\r\n" .
	    'X-Mailer: PHP/' . phpversion();
	 
	// Compose a simple HTML email message
	$body_message = '<html><body>';
	$body_message .= '<h1 style="color:#f40;">Hi '.$full_name.'!</h1>';
	$body_message .= '<p style="color:#080;font-size:18px;">';
	$body_message .= $message;
	$body_message .= '</p>';
	$body_message .= '</body></html>';
	 
	// Sending email
	if(mail($to, $subject, $body_message, $headers)){
		$data['message'] = '<p class="success-msg">Your contact information is received successfully.</p>';
		$data['status'] = "success";
	} else{
		$data['message'] = '<p class="error-msg">Your contact information is not received successfully.</p>';
		$data['status'] = "error";
	}

}else{
	$data['message'] = '<p class="error-msg">Somthing was wrong! Please refresh the page and try again.</p>';
	$data['status'] = "error";
}
header('Content-Type: application/json');      
echo json_encode($data, JSON_PRETTY_PRINT);
exit; 