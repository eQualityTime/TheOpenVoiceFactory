filelocation=$1
size=$2
targetname=$3
targetlanguage=$4
extension="${filelocation##*.}"
mkdir $targetname
python grab_text.py $filelocation $targetname $size
cp -R templates/* $targetname
perl -pi -e "s/XXX/$4/" $targetname/*.pl
