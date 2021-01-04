#!/bin/bash
set -o nounset
set -o errexit

timestamp=$(date +%s)

mkdir -p kong-data/dumps

docker run --volume "$(pwd)/kong-data:/home/deckuser" --network=host kong/deck:latest dump --output-file /home/deckuser/dumps/"${timestamp}"-kong.yaml
