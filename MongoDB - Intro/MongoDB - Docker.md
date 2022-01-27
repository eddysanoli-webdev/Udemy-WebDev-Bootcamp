## MongoDB on Docker

- Start mongo server instance:
  - some-mongo: Name you want to assign to your container
  - tag: MongoDB version you want (recommended: latest)

```bash
docker run --name some-mongo -d mongo:tag
```

- Bash shell inside mongo container:

```bash
docker exec -it some-mongo bash
```

- Full configuration with environment variables:

```bash
docker run -d --network some-network --name some-mongo \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    mongo
```

- Connect to docker container from localhost (port 27017)

```bash
# Single-line
# --name: Name of the container
# -p: Port to which the container will be binded
# MONGO_INITDB_ROOT_USERNAME: Database username
# MONGO_INITDB_ROOT_PASSWORD: Database password
# mongo:latest: Image and version of the image to use
docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=test -e MONGO_INITDB_ROOT_PASSWORD=test123 mongo:latest

# Go into the container
docker exec -it mongodb bash

# Launch the MongoDB shell client
# (Previously "mongo" was used, but it will be deprecated)
mongosh admin -u test -p test123
```
