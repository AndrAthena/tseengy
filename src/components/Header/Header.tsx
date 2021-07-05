import Link from 'next/link';
import cls from './header.module.css';
import { useRouter } from 'next/router';
import Social from '../social/Social';
import { motion } from 'framer-motion';

export default function Header() {
  const router = useRouter();
  const animation = {
    variants: {
      visible: {
        y: 0,
      },
      hidden: { y: '-100px' },
    },
    initial: 'hidden',
    animate: 'visible',
  };

  return (
    <>
      <motion.header id="header" className={cls.header} {...animation}>
        <div className="container-full">
          <ul className={cls.menu}>
            <li>
              <Link href="/">
                <a className={router.pathname === '/' ? cls.active : ''}>Accueil</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className={router.pathname === '/services' ? cls.active : ''}>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/technos">
                <a className={router.pathname === '/technos' ? cls.active : ''}>Technos</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className={router.pathname === '/blog' ? cls.active : ''}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={router.pathname === '/contact' ? cls.active : ''}>Contact</a>
              </Link>
            </li>
          </ul>
          <div className={cls.social_header}>
            <Social />
          </div>
          <span className={cls.divider} />
        </div>
      </motion.header>
    </>
  );
}
