import React from 'react';
import { Logo } from '../Logo/Logo';
import Tel from '../Tel/Tel';
import { Email } from '../Email';
import { FooterForm } from '../Forms/Footer';

export function Footer() {
  return (
    <footer>
      <div className="background background--dark">
        <div className="container container--page">
          <div className="footer">
            <Logo isFooter />
            <div className="footer__contacts">
              <ul className="footer__contacts-list">
                <li>
                  <Tel classes="miniContact miniContact--phone" />
                </li>

                <li>
                  <Email classes="miniContact miniContact--mail" />
                </li>

                <li>
                  <p className="miniContact miniContact--shedule">
                    Mon - fri: 09:00-19:00
                    <br />
                    Sat.: 10:00-16:00
                    <br />
                    Sun.: free.
                  </p>
                </li>
              </ul>
            </div>

            <FooterForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
