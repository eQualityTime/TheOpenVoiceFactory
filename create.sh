#!/bin/bash
cd "$(dirname "$0")"
exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 1>log.out 2>&1
#All above from https://serverfault.com/a/103569
echo "Starting Script"
filelocation=$1
size=$2
targetname=$3
mkdir $targetname
cp -R templates/* $targetname
python3 main.py $filelocation $targetname $size
mv $targetname ../designs/
echo "Script Completed"
echo $1 $2 $3 
rm $filelocation
