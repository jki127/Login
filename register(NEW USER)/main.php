<?php
    $user = $_POST["user"];
    $pass = $_POST["pass"];
    $school = $_POST["school"];
    //initialize a connection to the database
    /*$con = mysqli_connect("127.2.38.2","yoface","isawesome","yoface");
    //IF connection fails....
    if(mysqli_connect_errno($con)){
        echo "<br> <br> Fail. " . mysqli_connect_error();        
    }


    //Ends DB connection
    mysqli_close($con); */
    echo 'Welcome ' + $user + " from " + $school;
?>
