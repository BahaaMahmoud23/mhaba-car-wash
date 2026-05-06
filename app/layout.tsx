import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'مهابة للعناية بالسيارات',
  description: 'عناية احترافية تمنح سيارتك مظهرًا يليق بها',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
