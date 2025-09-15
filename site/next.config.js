/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Blueadder Workspaces',
    description: 'My workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://icescythe-home.github.io/kasm-registry/',
    contactUrl: 'https://github.com/IceScythe-Home/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
