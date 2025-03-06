'use client';
import styles from './BottomNav.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.bottomNav}>
      <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
        <span>Home</span>
      </Link>
      <Link href="/about" className={`${styles.navItem} ${pathname === '/about' ? styles.active : ''}`}>
        <span>About</span>
      </Link>
      <Link href="/projects" className={`${styles.navItem} ${pathname === '/projects' ? styles.active : ''}`}>
        <span>Work</span>
      </Link>
      <Link href="/contact" className={`${styles.navItem} ${pathname === '/contact' ? styles.active : ''}`}>
        <span>Contact</span>
      </Link>
    </nav>
  );
}