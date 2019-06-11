if [[ "$OSTYPE" == "darwin"* ]]; then
    docker-machine start && eval "$(docker-machine env default)"
fi

docker-compose up -d

webpack --config ./webpack/webpack.config.docker.js