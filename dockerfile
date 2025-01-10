# Step 1: Build the React app
FROM node:18-alpine AS build

ARG API_URL

ENV VITE_API_URL=${API_URL}

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Step 2: Serve the built app with an NGINX server
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]