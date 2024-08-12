FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g serve
RUN npm run build
CMD ["serve", "-s", "build"]
EXPOSE 3000
