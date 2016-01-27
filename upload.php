<?php
//All code from http://www.w3schools.com/php/php_file_upload.asp with thanks
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
//if(isset($_POST["submit"])) {
//    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
//    if($check !== false) {
//        echo "File is an image - " . $check["mime"] . ".";
//        $uploadOk = 1;
//    } else {
//        echo "File is not an image.";
//        $uploadOk = 0;
//    }
//}
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
//if ($_FILES["fileToUpload"]["size"] > 1500000) {
 //   echo "Sorry, your file is too large.";
  //  $uploadOk = 0;
//}
// Allow certain file formats
if($imageFileType != "pptx"){
    echo "We're afraid we only accept pptx files for the moment";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded and processed, you can view the results <a href=".basename($_FILES["fileToUpload"]["name"])."/ >here</a>";
$command = '/home/joereddington/communikate.joereddington.com/onlineprocess/create.sh '.basename($_FILES["fileToUpload"]["name"]) ;
$temp = shell_exec($command );
echo $temp;
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$file = 'details.txt';//should include the name of file also the date
$current .= $_POST["size"];
// Write the contents back to the file
file_put_contents($file, $current);
?>

