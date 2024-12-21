'use client';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import styles from './BottomNav.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.bottomNav}>
      <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
        <Home size={24} />
        <span>Home</span>
      </Link>
      <Link href="/about" className={`${styles.navItem} ${pathname === '/about' ? styles.active : ''}`}>
        <User size={24} />
        <span>About</span>
      </Link>
      <Link href="/projects" className={`${styles.navItem} ${pathname === '/projects' ? styles.active : ''}`}>
        <Briefcase size={24} />
        <span>Work</span>
      </Link>
      <Link href="/contact" className={`${styles.navItem} ${pathname === '/contact' ? styles.active : ''}`}>
        <Mail size={24} />
        <span>Contact</span>
      </Link>
    </nav>
  );
}