#!/bin/bash

export PORT=5101
export MIX_ENV=prod
export GIT_PATH=/home/personalsite/src/personalsite

PWD=`pwd`
if [ $PWD != $GIT_PATH ]; then
	echo "Error: Must check out git repo to $GIT_PATH"
	echo "  Current directory is $PWD"
	exit 1
fi

if [ $USER != "personalsite" ]; then
	echo "Error: must run as user 'personalsite'"
	echo "  Current user is $USER"
	exit 2
fi

mix deps.get
(cd assets && npm install)
(cd assets && ./node_modules/brunch/bin/brunch b -p)
mix phx.digest
mix release --env=prod

mkdir -p ~/www
mkdir -p ~/old

NOW=`date +%s`
if [ -d ~/www/personalsite ]; then
	echo mv ~/www/personalsite ~/old/$NOW
	mv ~/www/personalsite ~/old/$NOW
fi

mkdir -p ~/www/personalsite
REL_TAR=~/src/personalsite/_build/prod/rel/personalsite/releases/0.0.1/personalsite.tar.gz
(cd ~/www/personalsite && tar xzvf $REL_TAR)

crontab - <<CRONTAB
@reboot bash /home/personalsite/src/personalsite/start.sh
CRONTAB

#. start.sh
