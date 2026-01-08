# Use Node 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build the application with required environment variable
RUN NEXT_PUBLIC_API_URL=http://localhost:8000 npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]