<?php
//All code from http://www.w3schools.com/php/php_file_upload.asp with thanks
$target_dir = "uploads/";

//Using custom function "filenameSlugify" to properly handle spaces (and non-letters/digits). Function is lower in this file.
$target_file = $target_dir . filenameSlugify( basename( $_FILES["fileToUpload"]["name"]) );
//echo "Targetfile is:".$target_file;

$uploadOk = 1;

$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
//echo $_post["lang"];
echo "<h1> Results!</h1>";
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
	//echo "Targetfil still is  is:".$target_file;
	//echo "The hash is".hash_file("md5",$target_file);

	$url = "https://equalitytime.github.io/ovfplayer/#/config?pagesetURL=https://designs.theopenvoicefactory.org/".hash("md5",time().hash_file("md5",$target_file))."/data/pageset.obz";
	$location = hash("md5",time().hash_file("md5",$target_file));
	$command = dirname(__FILE__).'/create.sh '.$target_file." ". $_POST["size"]." ".$location." ";//.$_POST["lang"] ;
	$temp = shell_exec($command );
        echo "<b>The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded and processed, you can use the resulting system <a href=".$url."?lang=".$_POST["lang"]."/ >here</a></b><br><br>";
	$fileurl = "https://designs.theopenvoicefactory.org/".$location."/data/pageset.obz";
        echo "<b>You can also downloaded the <i>Open Board Format</i> file <a href=".$fileurl."/ >here</a></b><br><br>";

	echo "<h2>Script Trace</h2><br>";
	echo "Various debugging information is provided below in case of errors. If there is a major problem, then the support team will want to see this<br><br>";
	echo "The command was: ".$command;
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
