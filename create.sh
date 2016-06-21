filename=$(basename "$1")
extension="${filename##*.}"
dest="${filename%.*}"
echo $dest
mkdir $dest
python grab_text.py $1 $dest $2
cp -R templates/* $dest
perl -pi -e "s/XXX/$3/" $dest/*.pl
