FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN npm install -g serve
RUN pnpm install
COPY . .
RUN pnpm run build
CMD ["serve", "-s", "dist"]
EXPOSE 3000