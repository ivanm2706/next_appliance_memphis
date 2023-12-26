import { Footer } from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation'
import type { Metadata } from 'next'
import '../styles/main.scss';

export const metadata: Metadata = {
  title: 'Appliance Services Memphis',
  description: 'Appliance Services Memphis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <html className="page" lang="en">
        <body>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </>
    
  )
}
