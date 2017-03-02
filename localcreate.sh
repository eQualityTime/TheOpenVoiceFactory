filename=$(basename "$1")
extension="${filename##*.}"
dest="${filename%.*}"
dest="${filename}"
echo $dest
mkdir $dest
cp -R templates/* $dest
python grab_text.py $1 $dest $2
