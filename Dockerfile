# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.0.0

# ---- Build Stage ----
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Production Stage ----
FROM node:${NODE_VERSION}-alpine AS prod

WORKDIR /app

# Install static file server
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /app/dist ./dist

# Expose the port
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "dist", "-l", "3000"]
