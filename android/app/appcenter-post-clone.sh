#!/usr/bin/env bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo npm install -g ionic
cd ../../
npm i
ionic build --prod
npx cap sync