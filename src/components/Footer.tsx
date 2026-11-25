export function Footer() {
  return (
    <footer className="mx-auto max-w-3xl border-t border-[var(--border)] py-8">
      <nav className="mb-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs" aria-label="Policies and support">
        <a className="text-[var(--text-dim)] hover:text-[var(--text-bright)]" href="/contact/index.html">Contact &amp; Support</a>
        <a className="text-[var(--text-dim)] hover:text-[var(--text-bright)]" href="/terms/index.html">Terms of Service</a>
        <a className="text-[var(--text-dim)] hover:text-[var(--text-bright)]" href="/privacy/index.html">Privacy Policy</a>
        <a className="text-[var(--text-dim)] hover:text-[var(--text-bright)]" href="/refunds/index.html">Cancellation &amp; Refunds</a>
      </nav>
      <p className="text-center text-xs text-[var(--text-dim)]">Akshay Kathpal · {new Date().getFullYear()}</p>
    </footer>
  );
}
