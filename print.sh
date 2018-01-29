#!/bin/bash

TMP=$(mktemp)

# node math.js > $TMP
node daily.js > $TMP

# cat $TMP maze.txt | lpr -P EPSON_TM_T20II
cat $TMP | lpr -P EPSON_TM_T20II

rm $TMP
