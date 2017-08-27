#!/bin/bash

# add base tag:
# <head> -> <head><base href="/polymer-examples/"/>

if ! [ -z "$1" ]; then
  sed -i -e "s/\(<head>\)/<head><base href=\"\/polymer-examples\/\"\/>/g" $1
fi
