import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-base px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
