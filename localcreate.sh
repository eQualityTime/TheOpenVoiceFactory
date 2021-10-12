filename=$(basename "$1")
extension="${filename##*.}"
dest="${filename%.*}"
dest="aid${filename}"
rm -Rf $dest
echo $dest
mkdir $dest
cp -R templates/* $dest
python3 main.py $1 $dest $2
