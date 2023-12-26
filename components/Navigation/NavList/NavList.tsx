/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useRef, useState } from 'react';
import { services } from '../../../utils/Services';
import { navigationList } from '../../../utils/NavigationList';
import classNames from 'classnames';
import { usePathname } from 'next/navigation'
type Props = {
  isMobile: boolean;
};

export default function NavList({ isMobile }: Props) {
  const navListHover = useRef<HTMLUListElement | null>(null);
  const [isActiveServisesMenu, setIsActiveServisesMenu] = useState(false);
  const [isActiveServises, setIsActiveServises] = useState(false);
  const pathname = usePathname().substring(1);

  const handlerShowElement = () => {
    if (isMobile || !navListHover.current) {
      return;
    }

    navListHover.current.style.visibility = 'visible';
    navListHover.current.style.opacity = '1';
  };

  const handlerHideElement = () => {
    if (isMobile || !navListHover.current) {
      return;
    }

    navListHover.current.style.visibility = 'hidden';
    navListHover.current.style.opacity = '0';
  };

  useEffect(() => {
    if (
      pathname !== '' &&
      services.some((item) => item.url.includes(pathname))
    ) {
      setIsActiveServises(true);
    } else {
      setIsActiveServises(false);
    }

    setIsActiveServisesMenu(false);
  }, [pathname]);

  return (
    <nav
      className={classNames({
        nav: true,
        'nav--tabletDesctop': !isMobile,
      })}
    >
      <ul
        className={classNames({
          nav__list: true,
          'nav__list--mobile': isMobile,
        })}
      >
        {navigationList.map(({ id, title, url }) => {
          const isServiceLink = url === 'services';

          return !isServiceLink ? (
            <li className="nav__item" key={id}>
              <a
                href={`/${url}`}
                className={classNames({
                  nav__link: true,
                  'nav__link--active': pathname === url,
                })}
              >
                {title}
              </a>
            </li>
          ) : (
            <li className="nav__item" key={id}>
              <div
                className={classNames({
                  nav__servicesList: true,
                })}
              >
                <a
                  href={`/${url}`}
                  className={classNames({
                      'nav__link nav__link--services': true,
                      'nav__link--active nav__link--services-active':
                        pathname.includes('services') || isActiveServises,
                    })
                  }
                  onMouseEnter={handlerShowElement}
                  onMouseLeave={handlerHideElement}
                >
                  {title}
                </a>

                {isMobile && (
                  <button
                    type="button"
                    className={classNames({
                      'button button--next': true,
                      'button--nextActive': isActiveServisesMenu,
                    })}
                    onClick={() => setIsActiveServisesMenu((state) => !state)}
                  />
                )}
              </div>
              <ul
                ref={navListHover}
                className={classNames({
                  nav__list: true,
                  'nav__list--hover': !isMobile,
                  'nav__list--mobile nav__list--services': isMobile,
                  'nav__list--servicesOpen': isActiveServisesMenu,
                })}
                onMouseEnter={handlerShowElement}
                onMouseLeave={handlerHideElement}
              >
                {services.map((service) => (
                  <li className="nav__item" key={service.id}>
                    <a
                      href={`/services/${service.url}`}
                      className={classNames({
                        nav__link: true,
                        'nav__link--active': pathname === 'services/' + service.url,
                      })}
                      onClick={handlerHideElement}
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
