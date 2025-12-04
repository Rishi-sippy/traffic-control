import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'PermitFlow | Bengaluru Traffic Control',
  description: 'A smarter 25% car permit system for reducing Bengaluru traffic.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  )
}
