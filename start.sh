#!/bin/bash

export PORT=5101

cd ~/www/personal_website
./bin/personal_website stop || true
./bin/personal_website start
