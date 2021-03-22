#!/usr/bin/env bash

COMMAND=$1

echo Setting the current path
cd "$(dirname "$0")"

INITIALDIR=$(pwd)
echo ${INITIALDIR}

npm run build

cp ./package.json ./dist

echo Build lambda with Claudia
claudia ${COMMAND} \
--region eu-west-1 \
--api-module index \
--source dist \
--use-s3-bucket bytechaser-lamdas \
--memory 256 \
--timeout 20 \
--cache-api-config \
--set-env-from-json ./src/dev-env-vars.json \
--config claudia.json
