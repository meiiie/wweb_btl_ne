import type { MetadataRoute } from "next"
import { defaultSEO } from "@/lib/seo-config"

/**
 * Tạo manifest.json cho PWA
 * Sử dụng Next.js App Router Metadata API
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultSEO.title,
    short_name: "Khoa CNTT - VMU",
    description: defaultSEO.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0056a6",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
