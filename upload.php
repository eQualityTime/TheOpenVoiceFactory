<?php
//All code from http://www.w3schools.com/php/php_file_upload.asp with thanks
$target_dir = "uploads/";

//Using custom function "filenameSlugify" to properly handle spaces (and non-letters/digits). Function is lower in this file.
$target_file = $target_dir . filenameSlugify( basename( $_FILES["fileToUpload"]["name"]) );

$uploadOk = 1;

$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
//echo $_post["lang"];
//echo "hello";
// Allow certain file formats
if($imageFileType != "pptx"){
    echo "We're afraid we only accept pptx files for the moment.<br>";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
   if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
	$location = hash_file("md5",$target_file);
	$command = dirname(__FILE__).'/create.sh '.$target_file." ". $_POST["size"]." ".$location." ";//.$_POST["lang"] ;
	$temp = shell_exec($command );
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded and processed, you can view the results <a href=".$location."?lang=".$_POST["lang"]."/ >here</a><br><br>";
	echo nl2br($temp);
    } else {
        echo "Sorry, there was an error uploading your file.";
   }
}

//Function to prevent errors cause by spaces in the target filename
function filenameSlugify($text) {
   // Save file extension in var
   $fileExtension = pathinfo($text,PATHINFO_EXTENSION);
   // Save filename without extension in var
   $filename = pathinfo($text,PATHINFO_FILENAME);
   // replace all non letters or digits by _ in filename
   $filename = preg_replace('/\W+/', '_', $filename);
   // trim and lowercase the filename
   $filename = strtolower(trim($filename, '_'));
   // return combined string
   return $filename.".".$fileExtension;
}
?>
