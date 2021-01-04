#!/bin/bash
set -o nounset
set -o errexit

docker run --volume "$(pwd)/kong-data:/home/deckuser" --network=host kong/deck:latest sync --state /home/deckuser/kong.yaml
