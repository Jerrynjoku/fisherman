<?php
session_start();
if (!isset($_SESSION["auth_username"])) {
echo "You must be logged in to view this page";
exit;
}
else {
echo "Hello, you're logged in!";
}

?>
