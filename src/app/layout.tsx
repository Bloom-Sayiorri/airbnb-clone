import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Nunito } from 'next/font/google';

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
