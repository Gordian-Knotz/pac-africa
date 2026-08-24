import Link from 'next/link';

export function Header() {
  return (
    <header>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
