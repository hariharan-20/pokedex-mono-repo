# Use node base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json lerna.json ./
RUN yarn install

# Copy all files
COPY . .

# Build the Next.js app
RUN yarn workspace @packages/pokedex build

# Expose port 3000 for Next.js app
EXPOSE 3000

# Start Next.js app
CMD ["yarn", "workspace", "@packages/pokedex", "dev"]
