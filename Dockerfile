# Stage 2: Ejecutar la aplicación
FROM node:16-alpine

WORKDIR /app

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

COPY package*.json ./


RUN npm ci --only=production


COPY . .

RUN npm run build
# Instalar Chromium
RUN apk add --no-cache chromium

# Establecer variables de entorno necesarias para Puppeteer

# Ejecutar la aplicación
CMD ["npm", "start"]


# docker build -t power-law-next .
# docker run -p 3000:3000 power-law-next:latest