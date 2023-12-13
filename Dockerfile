# Base image
FROM node:18-alpine AS base
WORKDIR /usr/src/app
RUN npm install -g npm@latest
COPY package.json ./
RUN npm install 
RUN npm install -g typescript
RUN npm install -g nodemon
RUN npm install rimraf
COPY . .
RUN npm run build

FROM base AS dev
ENV NODE_ENV=development
RUN npm install ts-node
CMD ["npm", "run", "dev"]

# Production image
FROM node:18-alpine AS prod
WORKDIR /app
COPY --from=base /usr/src/app/build ./build
COPY package.json ./
RUN npm install -g npm@latest
RUN npm install -g npm-check-updates
RUN  ncu -u
RUN npm pkg delete scripts.prepare
RUN npm install --omit=dev
ENV NODE_ENV=production
CMD ["npm", "start"]