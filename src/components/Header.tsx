import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dark-brown text-white shadow-lg sticky top-0 z-50">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo - Replace with your actual logo */}
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/BalasreeArtsAcademyLogo.png"
              alt="Balasree Arts Academy Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
          </div>
          <div className="text-xl font-bold hidden sm:block group-hover:text-gold transition-colors">
            Balasree Arts Academy
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-gold transition-colors duration-300">
            Home
          </Link>
          <Link href="/gallery" className="hover:text-gold transition-colors duration-300">
            Gallery
          </Link>
          <Link href="/about" className="hover:text-gold transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gold transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-brown border-t border-gold">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/gallery" className="hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/about" className="hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
