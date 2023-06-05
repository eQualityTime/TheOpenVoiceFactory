<html>
<head>
 <link rel="stylesheet" href="ovf.css">
</head>
<body>
<?php
//Basic code from http://www.w3schools.com/php/php_file_upload.asp with thanks
//echo getcwd() . "\n"; //Used for debugging directory
$target_dir = "uploads/";

//Using custom function "filenameSlugify" to properly handle spaces (and non-letters/digits). 
$target_file = $target_dir . filenameSlugify( basename( $_FILES["fileToUpload"]["name"]) );

$uploadOk = 1;

$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
if($imageFileType != "pptx"){
    echo "We're afraid we only accept pptx files for the moment.<br>";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.<br>";
// if everything is ok, try to upload file
} else {
    echo "Your file has been uploaded.<br>";
    echo $target_file."<br>" ; 
   if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"],  "../".$target_file)){
	   process_file($target_file);
    } else {
        echo "Sorry, there was an error uploading/moving your file.";
   }
}


function process_file($target_file){
	$location = hash("md5",time().hash_file("md5",$target_file));
	$command = dirname(__FILE__).'/../create.sh "'.$target_file.'" '. $_POST["size"]." ".$location." ";//.$_POST["lang"] ;
  echo $command. "<br>" ;
	$temp = shell_exec($command. " 2>&1" );
  $temp = urlencode($temp);
  $filename = basename($_FILES["fileToUpload"]["name"]);
  $url = "https://theopenvoicefactory.org/result.html?hash=$location&filename=$filename&debugging=$temp";
  echo "<script>window.location.href = '$url';</script>";
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
