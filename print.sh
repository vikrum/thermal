#!/bin/bash

TMP=$(mktemp)

# node math.js > $TMP
node zo.js > $TMP
cat $TMP | lpr -P EPSON_TM_T20II
rm $TMP

node tara.js > $TMP
cat $TMP | lpr -P EPSON_TM_T20II
rm $TMP
