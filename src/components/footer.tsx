export function Footer() {
  return (
    <footer className="py-10 border-t border-white/[0.04] text-center">
      <p className="text-xs text-muted/60 tracking-wide">
        &copy; {new Date().getFullYear()} Thomas Huynh &mdash; Designed &amp;
        built with Next.js + Tailwind
      </p>
    </footer>
  );
}
