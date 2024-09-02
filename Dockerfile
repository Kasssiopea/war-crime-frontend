# build stage
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build-prod

# production stage
FROM nginx:1.23.3-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# FROM node:18-alpine
# WORKDIR /app

# COPY package*.json ./
# RUN npm ci
# COPY . .

# EXPOSE 80

# CMD ["npm", "run", "serve", "--", "--port", "80"]
