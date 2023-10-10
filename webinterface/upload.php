<html>
<head>
 <link rel="stylesheet" href="ovf.css">
</head>
<body>
<?php

//error_reporting(E_ALL);
//ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
echo "This page can only be called with post";
exit();
}


// echo getcwd() . "\n"; //Used for debugging directory
$target_dir = "uploads/";
if (!is_dir("../".$target_dir)) {
    die("There isn't an 'uploads' directory to move things to");
}

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
    $location = hash("md5", time().hash_file("md5", $target_file));
    $command = dirname(__FILE__).'/../create.sh "'.escapeshellarg($target_file).'" '.escapeshellarg($_POST["size"]).' '.escapeshellarg($location).' ';
    exec($command . " 2>&1", $output, $return_var);
    $temp = urlencode(implode("\n", $output));
    $filename = basename($_FILES["fileToUpload"]["name"]);
    $feedback = file_get_contents("../feedback.html");
    $feedback = urlencode($feedback);
    error_log($command);
    $result="result";
    // Check the exit code
    if ($return_var !== 0) {
        error_log("Script exited with code: ".$return_var.". Error Output: ".$temp);
        $result="fail";
    }

    $url = "https://theopenvoicefactory.org/$result.html?hash=$location&filename=$filename&debugging=$feedback";
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
