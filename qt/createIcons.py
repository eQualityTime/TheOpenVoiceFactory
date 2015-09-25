#!/usr/bin/env python
import os
import re


# Generates all of the following icon PNGs using ruby magic.
inputFile = "icon.svg"
inputFile = os.path.normpath(os.path.join(os.getcwd(), inputFile));

outputFiles = ["AppIcon29x29.png",
           "AppIcon40x40~ipad.png",
           "AppIcon72x72@2x~ipad.png",
           "AppIcon29x29@2x.png",
           "AppIcon50x50@2x~ipad.png",
           "AppIcon72x72~ipad.png",
           "AppIcon29x29@2x~ipad.png",
           "AppIcon50x50~ipad.png",
           "AppIcon76x76@2x~ipad.png",
           "AppIcon29x29~ipad.png",
           "AppIcon57x57.png",
           "AppIcon76x76~ipad.png",
           "AppIcon40x40@2x.png",
           "AppIcon57x57@2x.png",
           "AppIcon40x40@2x~ipad.png",
           "AppIcon60x60@2x.png"]

# Special regex for "2x" icons.
regexHighRes ="\D*(\d*)x(\d*)@(\d)x\D*.png"

# Simpler regex for normal icons
regexNormal = "\D*(\d*)x(\d*)\D*.png"

inkscapeExe = "/Applications/Inkscape.app/Contents/Resources/bin/inkscape"

for outputFile in outputFiles:
    # We'll fill this in from regex
    dimX = 0;
    dimY = 0;

    hiResMatch = re.search(regexHighRes, outputFile);
    if (hiResMatch):
        # print hiResMatch.group(0)
        # print hiResMatch.group(1)
        # print hiResMatch.group(2)
        # print hiResMatch.group(3)
        scale = int(hiResMatch.group(3))
        dimX = int(hiResMatch.group(1))*scale
        dimY = int(hiResMatch.group(2))*scale
    else:
        normalMatch = re.search(regexNormal, outputFile);
        dimX = int(normalMatch.group(1))
        dimY = int(normalMatch.group(2))

    if (dimX == 0 or dimY == 0):
        print "Couldn't parse dimensions in " + outputFile
        continue;

    outputFile = os.path.normpath(os.path.join(os.getcwd(), outputFile));
    cmd = inkscapeExe + " --export-png " + outputFile + " -w " + str(dimX) + \
            " -h " + str(dimY) + " " + inputFile;
    print cmd
    os.system(cmd);
