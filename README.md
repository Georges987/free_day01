# Docker stage

## Vue.js

The dockerfile is located in the root of the project. The dockerfile is used to build the image for the Vue.js application. The image is built using the following command:

```bash
# build the image
docker build -t vuejs-app .
# and run it with
docker run -it -p 8080:8080 --rm --name vuejs-app vuejs-app
# if you don't want to run the container in interactive mode, you can run it in detached mode with
docker run -p 8080:8080 vuejs-app
```
![To run nginx in forground or background](images/image.png)

## React.js

THe dockerfile is located in the root of the project. The dockerfile is used to build the image for the React.js application. The image is built using the following command:

```bash
# build the image
docker build -t reactjs-app .
# and run it with
docker run -it -p 3000:3000 --rm --name reactjs-app reactjs-app
# if you don't want to run the container in interactive mode, you can run it in detached mode with
docker run -p 3000:3000 reactjs-app
```

## Laravel

The dockerfile is located in the root of the project. The dockerfile is used to build the image for the Laravel application. The image is built using the following command:

```bash
# build the image
docker build -t laravel-app .
# and run it with
docker run -it -p 8000:8000 --rm --name laravel-app laravel-app
# if you don't want to run the container in interactive mode, you can run it in detached mode with
docker run -p 8000:8000 laravel-app
```

## Nest.js

The dockerfile is located in the root of the project. The dockerfile is used to build the image for the Nest.js application. The image is built using the following command:

```bash
# build the image
docker build -t nestjs-app .
# and run it with
docker run -it -p 3000:3000 --rm --name nestjs-app nestjs-app
# if you don't want to run the container in interactive mode, you can run it in detached mode with
docker run -p 3000:3000 nestjs-app
```

## Next.js

The dockerfile is located in the root of the project. The dockerfile is used to build the image for the Next.js application. The image is built using the following command:

```bash
# build the image
docker build -t nextjs-app .
# and run it with
docker run -it -p 3000:3000 --rm --name nextjs-app nextjs-app
# if you don't want to run the container in interactive mode, you can run it in detached mode with
docker run -p 3000:3000 nextjs-app
```

## Nuxtjs

The dockerfile is located in the root of the project. The dockerfile is used to build the image for the Nuxt.js application. The image is built using the following command:

```bash
# build the image
docker build -t nuxtjs-app .
# and run it with
docker run -it -p 3000:3000 --rm --name nuxtjs-app nuxtjs-app
# if you don't want to run the container in interactive mode, you can run it in detached mode with
docker run -p 3000:3000 nuxtjs-app
```


## Troubleshooting

If you have problem during build of next js, you can try first to remove the .next folder and then rebuild the image.

```bash
rm -rf .next
docker build -t nextjs-app .
```