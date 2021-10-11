echo "Starting Script"
filelocation=$1
size=$2
targetname=$3
mkdir $targetname
cp -R templates/* $targetname
python3 main.py $filelocation $targetname $size
mv $targetname ../designs.theopenvoicefactory.org/
echo "Script Completed"
