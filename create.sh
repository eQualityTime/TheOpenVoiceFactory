mkdir $1
python grab_text.py $1 $2
cp -R templates/* $1
