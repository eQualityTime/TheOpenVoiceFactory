mkdir $1
python grab_text.py $1 4
cp -R templates/* $1
