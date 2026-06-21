import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático para hosting en GitHub Pages (solo archivos estáticos).
  output: "export",
  // Pages no optimiza imágenes en runtime.
  images: { unoptimized: true },
  // URLs con barra final → genera carpetas con index.html (mejor para Pages).
  trailingSlash: true,
  // Fija la raíz del proyecto (existe otro lockfile en el home del usuario).
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
