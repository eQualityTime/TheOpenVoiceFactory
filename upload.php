<html>
<head>
<link rel="stylesheet" href="white.css">
</head>
<body>
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
	$location = hash("md5",time().hash_file("md5",$target_file));
	$obzlink = "https://designs.theopenvoicefactory.org/" . $location . "/data/pageset.obz"; 
	$command = dirname(__FILE__).'/create.sh '.$target_file." ". $_POST["size"]." ".$location." ";//.$_POST["lang"] ;
	$temp = shell_exec($command. " 2>&1" );
	echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded and processed!";
 	echo "<ul>";
	echo "<li> You can access the aid by clicking <a href=https://equalitytime.github.io/ovfplayer/#/config?pagesetURL=".$obzlink . " target=\"_blank\">here</a>.";
	echo "<li> Please keep the link private - anyone with access to it will be able to acess the aid.";
	echo "<li> To use the language pack in another speech aid (such as Optikey or Cough Drop) click <a href=". $obzlink . ">here</a> to download the OBZ file.";
	echo "<li> Please keep your pptx files in a safe place - they will be the only way to modify or recover your aid" ;
	echo "<li> If the advanced aid above doesn't work. Please email us on support@equalitytime.co.uk or try the older viewer <a href=https://designs.theopenvoicefactory.org/".$location."/ >here</a>.<br><br>";
	echo "<ul>";
	echo nl2br($temp);
	echo "Hello?";
	echo $temp;
	echo "now?";
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
</body>
</html>
