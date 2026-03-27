import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['satu.png', 'dua.png'],
      devOptions: {
        enabled: true // Ini kunci agar Manifest muncul di localhost
      },
      // ----------------------
      manifest: {
        name: 'Photography Portfolio',
        short_name: 'PhotoPorto',
        description: 'Professional Photography Portfolio',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone', // Tambahkan ini agar web terasa seperti aplikasi beneran
        icons: [
          {
            src: 'satu.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'dua.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})