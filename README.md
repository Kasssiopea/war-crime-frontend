# war-crime-front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

docker build -t vuejs-app .
docker run -it -p 9090:80 --rm --name vuejs-app-1 vuejs-app

Для дева треба монтувати поточну директорію (щоб /app одразу оновлювався)


docker execute nodejs command and exit
docker run --rm node:18-alpine node -v


docker run --rm -it -v $(pwd):/app node:18-alpine /bin/sh
