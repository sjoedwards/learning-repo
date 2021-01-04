### Kong 🦍

API Gateway for microservices, makes it easy to configure shared services such auth authN/authZ, RBAC, rate limiting etc.

```
// To start Kong
$ docker-compose up
```

#### Sync Kong from projects/kong/kong-data/kong.yaml using Desk

```
$ cd projects/kong
$ bash sync.sh
```

#### To access GUI - after DC up

- Go to http://localhost:1337
- Create a user
- Connections -> New Connection -> Kong Admin URL: http://kong:8001
- Will now be connected to kong instance & can access Admin API
- Kong can be called on http://localhost:8000, but needs to be sent with host header of api.ct.id (See Kong.postman_collection.json)

#### Dump Kong config using desk

```
$ cd projects/kong
$ bash dump.sh
```
