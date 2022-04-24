#!/bin/sh
set -xe
export version='4.0.0-beta.15'
curl -LJO "https://github.com/moulapp/moul/releases/download/v${version}/moul_${version}_Linux_x86_64.tar.gz"
tar -xzf "moul_${version}_Linux_x86_64.tar.gz" -C ./
./moul deploy
npm install && npm run build