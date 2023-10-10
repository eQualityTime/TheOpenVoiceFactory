#!/bin/bash

# Move to the script's directory
cd "$(dirname "$0")"
rm feedback.html

# Redirect all output to a log file
exec > script.log 2>&1

# Usage description in case of wrong usage
usage() {
    echo "Usage: $0 FILE_LOCATION SIZE TARGET_NAME "
    exit 1
}

# Check if correct number of arguments is provided
if [ "$#" -ne 3 ]; then
    usage
fi

# Assigning arguments to variables with descriptive names
file_location="$1"
target_name="$3"
size="$2"

# Set design directory based on OS
set_design_directory() {
    case "$(uname)" in
        'Linux')
            export PATH="/usr/local/texlive/2021/bin/x86_64-linux:$PATH"
            designdirectory="../designs/"
            ;;
        'Darwin')
            designdirectory="."
            ;;
        *)
            designdirectory='unknown'
            ;;
    esac
}

# Main processing function
process_file() {
    if python3 main.py "$file_location" "$target_name" "$size"; then
        echo "The python exited normally"
        mv templates/data/pageset.obz "$designdirectory/$target_name.obz"
        cleanup
        exit 0; 
    else
        echo "The python had an error and the script terminated"
        echo "$file_location $target_name $size"
        cleanup
        exit 1
    fi
}

# Cleanup function
cleanup() {
    rm templates/data/images/*.png  # Avoid removing READMEs
    rm templates/data/boards/*.obf
    rm templates/data/*.*
}

# Function Calls
set_design_directory
process_file

