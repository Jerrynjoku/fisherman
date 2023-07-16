<?php

session_start();

$passwords = array("harry" => "dirtyharry",
"george" => "gorgieboy01",
"bob" => "bigbobby",
"jack" => "jackthelad"wink;

if (!$_POST["username"] or !$_POST["password"]) {
echo "Please enter your username and password.";
exit;
}

if ($_POST["password"] == $passwords[$_POST["username"]]) {
echo "Login successful!";
$_SESSION["auth_username"] = $_POST["username"];
}
else {
echo "Login incorrect, please try again.";
}

?>
<html>
<head>
<title>Login</title>
</head>

<body>
Content in here will only be shown if the username and password supplied are correct.
</body>
</html>

