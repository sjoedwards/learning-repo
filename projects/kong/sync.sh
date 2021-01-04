#!/bin/bash
set -o nounset
set -o errexit

timestamp=$(date +%s)

mkdir -p kong-data/dumps

# Make a backup just in case
docker run --volume "$(pwd)/kong-data:/home/deckuser" --network=host kong/deck:latest dump --output-file /home/deckuser/dumps/"${timestamp}"-kong.yaml

docker run --volume "$(pwd)/kong-data:/home/deckuser" --network=host kong/deck:latest sync --state /home/deckuser/kong.yaml
