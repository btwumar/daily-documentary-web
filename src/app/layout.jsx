import Link from 'next/link';
import './styles.css';

export const metadata = {
  title: { default: 'Daily Documentary Automation', template: '%s | Daily Documentary Automation' },
  description: 'A project that researches and produces documentary videos.',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="shell header">
          <Link className="brand" href="/">Daily Documentary<span> Automation</span></Link>
          <Link href="/contact">Contact</Link>
        </header>
        <main className="shell">{children}</main>
        <footer className="shell footer">
          <span>Daily Documentary Automation</span>
          <nav aria-label="Policies and contact">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
