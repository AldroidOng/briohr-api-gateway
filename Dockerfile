# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# List the files and directories to check the structure
RUN ls -l /app

# Build the application using Yarn
RUN yarn build

# Expose a port for TCP communication (e.g., 5000)
EXPOSE 3000

# Start the application
CMD ["yarn", "start:prod"]
