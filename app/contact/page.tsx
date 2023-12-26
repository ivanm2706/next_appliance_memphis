import { History } from '@/components/History';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  const pageTitle = 'Contact';

  return (
    <>
    <header
        className='header'
      >
        <div className="shaddow shaddow--header" />

        <div className="header__content">
          <div className="container container--pi-10">
            <div className="header__titles">
              <p className="header__title">{pageTitle}</p>
            </div>
          </div>

          <History lastNav={pageTitle}/>
        </div>
      </header>

      <main className="background background--bland">
        <ContactForm />
      </main>
    </>
  )
}
