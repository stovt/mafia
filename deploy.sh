#!/usr/bin/env sh

set -e

yarn run build

cd build

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/stovt/mafia.git master:gh-pages

cd -