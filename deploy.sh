#!/bin/bash

export PORT=5101
export MIX_ENV=prod
export GIT_PATH=/home/personal_website/src/personal_website

PWD=`pwd`
if [ $PWD != $GIT_PATH ]; then
	echo "Error: Must check out git repo to $GIT_PATH"
	echo "  Current directory is $PWD"
	exit 1
fi

if [ $USER != "personal_website" ]; then
	echo "Error: must run as user 'personal_website'"
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
if [ -d ~/www/personal_website ]; then
	echo mv ~/www/personal_website ~/old/$NOW
	mv ~/www/personal_website ~/old/$NOW
fi

mkdir -p ~/www/personal_website
REL_TAR=~/src/personal_website/_build/prod/rel/personal_website/releases/0.0.1/personal_website.tar.gz
(cd ~/www/personal_website && tar xzvf $REL_TAR)

crontab - <<CRONTAB
@reboot bash /home/personal_website/src/personal_website/start.sh
CRONTAB

#. start.sh
