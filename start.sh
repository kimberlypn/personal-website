#!/bin/bash

export PORT=5101

cd ~/www/personalsite
./bin/personalsite stop || true
./bin/personalsite start
