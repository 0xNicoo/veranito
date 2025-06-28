FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar todas las dependencias (incluyendo devDependencies para compilar)
RUN npm ci

# Copiar código fuente
COPY . .

# Compilar TypeScript
RUN npm run build

# Eliminar dependencias de desarrollo después de compilar
RUN npm prune --production

# Exponer puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "dist/index.js"] 