/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "customer-assets.emergentagent.com"
      },
      {
        protocol: "https",
        hostname: "static.prod-images.emergentagent.com"
      }
    ],
    // Enable WebP and AVIF formats
    formats: ['image/avif', 'image/webp'],
    // Minimize sizes for faster loading
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256],
    // Reduce quality slightly for faster loads
    minimumCacheTTL: 31536000, // 1 year
  },

  // Enable compression
  compress: true,

  // Performance optimizations
  poweredByHeader: false,

  // Strict headers for caching
  async headers() {
    return [
      {
        // All static assets in public folder - 1 year immutable cache
        source: '/(.*\\.(?:jpg|jpeg|png|webp|avif|gif|ico|svg|woff|woff2|ttf|eot))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Hero images specifically
        source: '/hero-bg:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Favicon files
        source: '/(favicon.*|icon.*|apple-touch-icon.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Next.js static files - immutable
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Next.js image optimization cache
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Video files - 6 months cache
        source: '/(.*\\.(?:mp4|webm|ogg|m4v))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=15552000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Security and other headers for all pages
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
