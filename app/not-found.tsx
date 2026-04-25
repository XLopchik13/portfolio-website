import { SITE_CONFIG } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs text-muted uppercase tracking-wider mb-4">
        404
      </p>
      <h1 className="text-3xl font-semibold text-text mb-3">Page not found</h1>
      <p className="text-muted mb-8 max-w-sm leading-relaxed">
        This page doesn&apos;t exist or has been moved.
      </p>
      <a
        href="/"
        className="text-sm font-medium px-4 py-2 rounded-md bg-accent text-white hover:opacity-90 transition-opacity duration-(--duration-fast)"
      >
        Back to {SITE_CONFIG.name}
      </a>
    </main>
  );
}
