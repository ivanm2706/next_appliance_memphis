import Link from 'next/link';
import React from 'react';
import { Service } from '../../types/Service';

type Props = {
  service: Service;
};

export function Card({ service: { title, img, url } }: Props) {
  return (
    <div className="cards__card">
      <div
        className={`cards__card-wrapper cards__card-wrapper--under cards__card-wrapper--${img}`}
      >
        <div className="cards__titles">
          <h3 className="cards__title">{title}</h3>

          <p className="cards__subtitle">repair</p>
        </div>

        <Link
          href={`services/${url}`}
          className="button button--card cards__button"
        >
          More details
        </Link>
        <span className="shaddow shaddow--open" />
      </div>

      <div
        className={`cards__card-wrapper cards__card-wrapper--over cards__card-wrapper--${img}`}
      >
        <div className="cards__titles cards__titles--over">
          <h3 className="cards__title">{title}</h3>

          <p className="cards__subtitle">repair</p>
        </div>
      </div>
    </div>
  );
}
