#!/bin/bash
cd "$(dirname "$0")"

# Platform specific code
designdirectory='unknown'
unamestr=$(uname)
if [[ "$unamestr" == 'Linux' ]]; then
   export PATH="/usr/local/texlive/2021/bin/x86_64-linux:$PATH"
   designdirectory="../designs/theopenvoicefactory.org/"
elif [[ "$unamestr" == 'Darwin' ]]; then
   designdirectory="."
fi


cd python

if [ -z "$2" ] # from https://stackoverflow.com/a/6482403/170243
  then
    python3.9 make_latex.py -s $1 
  else 
    python3.9 make_latex.py -s $1 -c $2 
fi

cd ../latex
rm -r -f *.pdf *.aux *.log *.lof *.gz  *.bak~ *.html

$pdflatex -interaction=batchmode "$1.tex"
$pdflatex "$1.tex"
current_time=$(date "+%Y-%m-%d-%H-%M")
cp $1.pdf ../pdfs/$1$2_$current_time-book.pdf


cd "$(dirname "$0")"
echo "Starting Script"
filelocation=$1
size=$2
targetname=$3
rm templates/data/images/* tempaltes/data/images/* 
python3 main.py $filelocation $targetname $size
mv  templates/data/pageset.obz $targetname.obz
mv $targetname $designdirectory
#The two lines above can clearly be combined. 
echo "Script Completed"
echo $1 $2 $3 
