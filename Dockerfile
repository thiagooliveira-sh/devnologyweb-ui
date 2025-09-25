FROM node:20.17.0-alpine3.19 as builder

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e package-lock.json (ou yarn.lock)
COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . .

# Gera a build de produção
RUN npm run build
FROM nginx:1.25-alpine

COPY --from=builder /app/build /usr/share/nginx/html

# Expõe a porta 80 (padrão do NGINX)
EXPOSE 80