<?php print_r($_POST); ?>
<?php
//All code from http://www.w3schools.com/php/php_file_upload.asp with thanks
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;

$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
echo $_post["lang"];
echo "hello";
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
	$location=hash_file("md5",$target_file);
	$command = dirname(__FILE__).'/create.sh '.$target_file." ". $_POST["size"]." ".$location." ";//.$_POST["lang"] ;
	$temp = shell_exec($command );
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded and processed, you can view the results <a href=".$location."?lang=".$_POST["lang"]."/ >here</a>";
	echo nl2br($temp);
    } else {
        echo "Sorry, there was an error uploading your file.";
   } 
}
?>

