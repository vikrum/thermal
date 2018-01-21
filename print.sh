#!/bin/bash

TMP=$(mktemp)

node generate.js > $TMP

cat $TMP | lpr -P EPSON_TM_T20II

rm $TMP
