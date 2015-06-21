#!/usr/bin/python

from PIL import Image

file1 = "icons/Things20a2af7a.png"
file2 = "icons/Things20a48bba.png"
file3 = "icons/Things20a40033.png"

# Load individual pictures
im1 = Image.open(file1)
im2 = Image.open(file2)
im3 = Image.open(file3)

# Create superset (empty) picture
final = Image.new('RGBA',(512, 512))

# Paste the three images
final.paste(im1, (0, 0), im1)
final.paste(im2, (256, 0), im2)
final.paste(im3, (0, 256), im3)

# Save the composite image
final.save("final.PNG")
