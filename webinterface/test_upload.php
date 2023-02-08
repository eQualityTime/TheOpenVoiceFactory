<html>
<head>
 <link rel="stylesheet" href="ovf.css">
</head>
<body>
<?php
require_once(realpath(dirname(__FILE__) . "/upload.php"));
//Making our own simple test file 
echo("Starting tests");

function test($description, $a, $b){
  if ($a == $b ){
    return "<li>✅ ". $description;
  }else{
    return "<li>❌ ". $description."(".$a."  ".$b.")";
  }
}

echo(test("Testing tests",4,4));
echo(test("Testing tests",4,5));
echo(test("Slugify normal file",filenameSlugify("/Volumes/Crucial X8/git/TheOpenVoiceFactory/hope.pptx"),"hope.pptx"));
echo(test("Slugify spaces and stuff file",filenameSlugify("/Volumes/Crucial X8/git/TheOpenVoiceFactory/ho)*)(* pe.pptx"),"ho_pe.pptx"));

//TODO 
//Function for checking upload type (so upload_ok stops being important) 
//:w
//


?>
