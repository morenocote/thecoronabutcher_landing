import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#7A0C0C" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Corona Butcher" },
      { name: "application-name", content: "Corona Butcher" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-TileColor", content: "#7A0C0C" },
      { name: "msapplication-TileImage", content: "/icon-192.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "The Corona Butcher — Carnicería Premium en Calgary | Carnes, Embutidos y Catering" },
      { property: "og:title", content: "The Corona Butcher — Carnicería Premium en Calgary" },
      { name: "twitter:title", content: "The Corona Butcher — Carnicería Premium en Calgary" },
      { name: "description", content: "Carnicería local en Calgary: carnes premium, embutidos caseros, ahumados, quesos europeos y catering para eventos. Fresh service, local attention." },
      { property: "og:description", content: "Carnes premium, embutidos caseros, ahumados y catering en Calgary. Fresh service, local attention." },
      { name: "twitter:description", content: "Carnes premium, embutidos caseros, ahumados y catering en Calgary." },
      { name: "keywords", content: "carnicería Calgary, butcher shop Calgary, carnes premium, embutidos caseros, catering Calgary, charcutería, quesos europeos, ahumados" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "The Corona Butcher" },
      { property: "og:site_name", content: "The Corona Butcher" },
      { property: "og:locale", content: "es_CA" },
      { property: "og:image", content: "https://corona-butcher-craft.lovable.app/icon-512.png" },
      { name: "twitter:image", content: "https://corona-butcher-craft.lovable.app/icon-512.png" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/icon-512.png" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "apple-touch-icon", sizes: "192x192", href: "/icon-192.png" },
      { rel: "apple-touch-startup-image", href: "/icon-512.png" },
      { rel: "manifest", href: "/manifest.json" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
