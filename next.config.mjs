/** @type {import('next').NextConfig} */

import path from 'path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    }

    return config
  },
  experimental: {
    serverActions: true,
  },
}

export default nextConfig
