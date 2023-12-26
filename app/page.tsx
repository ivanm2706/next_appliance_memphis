import dynamic from 'next/dynamic';

const DynamicBenefits = dynamic(() => import('@/components/Benefits/Benefits'));
const DynamicExperience = dynamic(() => import('@/components/Experience/Experience'));
const DynamicQuestions = dynamic(() => import('@/components/Questions/Questions'));
const DynamicServices = dynamic(() => import('@/components/Services/Services'));
const DynamicSteps = dynamic(() => import('@/components/Steps/Steps'));

export default function Home() {
  return (
    <>
      <header
        className='header header--homePage'
      >
        <div className="shaddow shaddow--header" />

        <div className="header__content">
          <div className="container container--pi-10">
            <div className="header__titles">
              <p className="header__title">
                Professional & Highly Rated Appliance
              </p>

              <p className="header__title">
                Repair Your Family Can Count On!
              </p>
            </div>
          </div>

          <a href="/contact" className="button button--book button--shake">
            Contact us
          </a>
        </div>
      </header>

      <main className="background background--bland" >
        <DynamicServices />

        <DynamicExperience />

        <DynamicBenefits />

        <DynamicSteps />
 
        <DynamicQuestions />
      </main>
    </>
  )
}
