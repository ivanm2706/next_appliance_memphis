import React from 'react';

type Props = {
  service?: boolean | undefined;
  lastNav?: string | undefined;
};

export function History({ service, lastNav }: Props) {
  return (
    <div className="history">
      <ul className="history__list">
        <li className="history__item">
          <a href="/" className="history__link">
            Home
          </a>
        </li>

        {service && (
          <li className="history__item">
            <a href="/services" className="history__link">
              Appliance Services
            </a>
          </li>
        )}

        <li className="history__item">{lastNav}</li>
      </ul>
    </div>
  );
}
