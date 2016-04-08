mkdir $1
python grab_text.py $1 5
cp -R templates/* $1
