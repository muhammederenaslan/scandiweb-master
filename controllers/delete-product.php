<?php

function massDelete() {
    // Get the list of product IDs to delete
    $product_ids = $_POST['product-ids'];

    // Connect to the database
    $db_host = 'localhost';
    $db_name = 'your_database_name';
    $db_user = 'your_database_username';
    $db_pass = 'your_database_password';
    $db = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);

    // Prepare the SQL statement to delete the products
    $stmt = $db->prepare("DELETE FROM products WHERE id IN (" . implode(",", $product_ids) . ")");

    // Execute the SQL statement
    $stmt->execute();

    // Set a success message in the session
    $_SESSION['success_message'] = "Selected products have been deleted.";

    // Redirect the user back to the product page
    header('Location: products.php');
    exit;
}
