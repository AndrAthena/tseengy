import Link from 'next/link';
import cls from './header.module.css';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Social from '../social/Social';

interface Meta {
  title: string;
  desc: string;
}

export default function Header({ title, desc }: Meta) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Tseengy | {title}</title>
        <meta name="desc" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header id="header" className={cls.header}>
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
      </header>
    </>
  );
}
