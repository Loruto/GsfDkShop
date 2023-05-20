<?php

require __DIR__.'/vendor/autoload.php'; // Include the Firebase PHP SDK

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

// Retrieve the email, username, and password from the sign-in form
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

// Initialize the Firebase service account
$serviceAccount = ServiceAccount::fromJsonFile('gsfdkshop-firebase-adminsdk-6kv34-cda06984d4.json'); // Replace with the path to your service account key file
$firebase = (new Factory)->withServiceAccount($serviceAccount)->create();

// Get a reference to the Firebase Realtime Database
$database = $firebase->getDatabase();

// Prepare and execute a query to validate the sign-in credentials
$usersRef = $database->getReference('users');
$query = $usersRef->orderByChild('email')->equalTo($email)->limitToFirst(1);
$usersSnapshot = $query->getSnapshot();

if ($usersSnapshot->numChildren() === 1) {
    foreach ($usersSnapshot->getValue() as $key => $user) {
        if ($user['username'] === $username && $user['password'] === $password) {
            // Sign-in successful
            // Perform any additional actions here
            // For example, you can redirect the user to another page or set a session variable
            
            // Redirect the user to a dashboard page
            header("Location: dashboard.php");
            exit();
        }
    }
}

// Invalid sign-in credentials
echo "Invalid email, username, or password";
?>