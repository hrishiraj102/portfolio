#Stage1
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .


#Stage 2
FROM nginx:1.19.0-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./* 
COPY --from=builder /build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
