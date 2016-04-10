#!/usr/bin/perl
use strict;
    use warnings;
use CGI qw(:standard -debug);
my $text = param('text');
my $filename = param('filename');
die if $text =~ /\x00/;
die if $filename =~ /\x00/;
print "Content-type: text/html\n\n";
$text =~ s/^-+//;
system('/home/joereddington/tts/espeak-1.48.04-source/src/speak', $text, '-w', $filename .  '.wav', '-v', 'en');
