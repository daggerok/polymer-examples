#!/bin/bash

# replace base-path with root:
# /polymer-examples/ -> /

if ! [ -z "$1" ]; then
  sed -i -e "s/\<head\>\<base\ href=\"\/polymer-examples\/\"\/>/\<head\>/g" $1
fi
