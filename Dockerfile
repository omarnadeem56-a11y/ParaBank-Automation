# 1. Use official Playwright image with Node + browsers preinstalled
FROM mcr.microsoft.com/playwright:v1.47.0-jammy

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package files first (for caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm ci

# 5. Copy everything else
COPY . .

# 6. Build project if using TypeScript (optional)
RUN npm run build || echo "Skipping build step..."

# 7. Run tests by default
CMD ["npx", "playwright", "test"]
