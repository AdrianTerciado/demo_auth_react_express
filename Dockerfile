FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
WORKDIR /app/client
RUN npm install && npm run build
WORKDIR /app
CMD ["npm", "start"]
EXPOSE 3000
