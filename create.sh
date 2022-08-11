#!/bin/bash
cd "$(dirname "$0")"
exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 1>log.out 2>&1
#All above from https://serverfault.com/a/103569

# Platform specific code
designdirectory='unknown'
unamestr=$(uname)
if [[ "$unamestr" == 'Linux' ]]; then
   export PATH="/usr/local/texlive/2021/bin/x86_64-linux:$PATH"
   designdirectory="../designs/"
elif [[ "$unamestr" == 'Darwin' ]]; then
   designdirectory="."
fi


echo "Starting Script"
filelocation=$1
size=$2
targetname=$3
if python3 main.py $filelocation $targetname $size; then
	echo "The python exited normally"
	mv  templates/data/pageset.obz $targetname.obz
	mv $targetname.obz $designdirectory
	#The two lines above can clearly be combined. 
else
	echo "The python had an error and the script terminated"
	echo $1 $2 $3 
fi
#Cleanup
rm templates/data/images/*.png # So we don't remove the readmes.
rm templates/data/boards/* 
rm templates/data/*.*
