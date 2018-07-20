<?php
    if(isset($_POST['submit'])){
        $title=$_POST['title'];
        $description=$_POST['description'];
        $localization=$_POST['localization'];
        $name=$_POST['name'];
        $email=$_POST['email'];
        
        $to='piotr.pluta@gmail.com, kontakt@towarzystwokrajobraz.pl, kamszuba@gmail.com, jerzy.parfianowicz@gmail.com';
        $subject='Zgloszenie Nieodlegla';
        $message="Title: ".$title."\n"."Opis: ".$description."\n"."Lokalizacja: ".$localization."\n"."Imię: ".$name;
        $headers="From: ".$email;
        
        if(mail($to, $subject, $message, $headers)){
            echo "<h1>Wiadomość została wysłana! Odezwiemy się wkrótce.</h1>";
        }
        else {
            echo "Ups! cos poszło nie tak! Napisz do nas maila ze swojej skrzynki na adres kontakt@towarzystwokrajobraz.pl";
        }
    }
?>