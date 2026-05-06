import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="bg-[#0B0F1A]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
