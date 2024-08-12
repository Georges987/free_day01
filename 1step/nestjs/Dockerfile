FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build
CMD ["npm", "run", "start:prod"]
EXPOSE 3000