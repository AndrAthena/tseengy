import Link from 'next/link';
import cls from './header.module.css';
import { useRouter } from 'next/router';
import Social from '../social/Social';

export default function Header() {
  const router = useRouter();

  const menus = [
    { title: 'Accueil', url: '/' },
    { title: 'Services', url: '/services' },
    { title: 'Technos', url: '/technos' },
    { title: 'Blog', url: '/blog' },
    { title: 'Contact', url: '/contact' },
  ];

  return (
    <>
      <header id="header" className={cls.header}>
        <div className="container-full">
          <ul className={cls.menu}>
            {menus.map(({ title, url }: any, i) => (
              <li key={'menu-' + i} className={router.pathname === url ? cls.active : ''}>
                <Link href={url}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
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
