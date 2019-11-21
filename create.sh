filelocation=$1
size=$2
targetname=$3
mkdir ../$targetname
cp -R templates/* ../$targetname
python grab_text.py $filelocation ../$targetname $size
