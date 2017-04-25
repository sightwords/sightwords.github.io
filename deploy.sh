#!/bin/sh

REV=$(git rev-parse --short HEAD)
DEPLOY_REPO=.deploy

if [ ! -d $DEPLOY_REPO ]; then
  git clone git@github.com:sightwords/sightwords.github.io.git $DEPLOY_REPO
fi

rm -fr build
yarn run build

# override target
cd $DEPLOY_REPO
git checkout master
rm -fr *
cp -r ../build/* .
git add .
git commit -m "Deploy $REV of dev"
git push origin master

