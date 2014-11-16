#!/bin/bash
echo "Receiving latest Pokedex..."
/usr/local/bin/wget "https://raw.githubusercontent.com/Zarel/Pokemon-Showdown/master/data/pokedex.js" -O "pokedex.js"
echo "done"