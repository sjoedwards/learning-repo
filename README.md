# Learning Repo

Hi! 👋🏼

This is a monorepo for experimenting with and showcasing technologies of interest.

## Projects 🖥

### [Frontend Projects](./projects/frontend-projects) 🎨

Adhoc frontend technologies

Runs on a next application, to spin up:

```
$ cd projects/frontend-projects
$ yarn
$ yarn run dev
```

- CSS GRID (WIP 🚧)

### [Typescript ⌨️](./projects/typescript)

WIP 🚧

```
$ cd projects/typescript
$ yarn run dev
```

### [Kong 🦍](./projects/kong)

WIP 🚧

```
// To start Kong
$ docker-compose up
```

#### To access GUI - after DC up

- Go to http://localhost:1337
- Create a user
- Connections -> New Connection -> Kong Admin URL: http://kong:8001
- Will now be connected to kong instance & can access Admin API
- Kong can be called on http://localhost:8000, but needs to be sent with
