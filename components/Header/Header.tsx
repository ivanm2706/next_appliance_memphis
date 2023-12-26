'use client'

import React from 'react';
// import { NavLink, useLocation, useParams } from 'react-router-dom';
import { Navigation } from '../../types/Navigation';
import { Service } from '../../types/Service';
import { navigationList } from '../../utils/NavigationList';
import { services } from '../../utils/Services';
import { History } from '../History';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';



export function Header() {
  const router = useRouter();
  console.log(router);
  // const location = useLocation();
  // const { service } = useParams();

  // const getObjNav = () => {
  //   const arr: Service[] | Navigation[] = service ? services : navigationList;
  //   const url = service ? service : location.pathname.substring(1);

  //   return arr.find((item) => item.url === url);
  // };

  // const lastObjNav = getObjNav() || null;
  const isHomePage = false;

  return (
    <header
      className={classNames({
        header: true,
        'header--homePage': isHomePage,
      })}
    >
      <div className="shaddow shaddow--header" />

      <div className="header__content">
        <div className="container container--pi-10">
          <div className="header__titles">
            {isHomePage ? (
              <>
                <p className="header__title">
                  Professional & Highly Rated Appliance
                </p>

                <p className="header__title">
                  Repair Your Family Can Count On!
                </p>
              </>
            ) : (
              <p className="header__title">{'lastObjNav?.title'}</p>
            )}
          </div>
        </div>

        {isHomePage ? (
          <a href="/contact" className="button button--book button--shake">
            Contact us
          </a>
        ) : (
          // <History service={service} lastObjNav={lastObjNav} />
          <></>
        )}
      </div>
    </header>
  );
}
