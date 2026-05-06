'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ServiceItem {
  num: string
  title: string
  desc: string
  image: string
  reversed: boolean
  bg: string
}

const services: ServiceItem[] = [
  {
    num: '01',
    title: 'غسيل فاخر',
    desc: 'غسيل شامل بتقنيات متطورة يزيل الأوساخ ويحافظ على بريق الطلاء',
    image: '/images/luxury-car-wash.jpg',
    reversed: true,
    bg: '#FFFFFF',
  },
  {
    num: '02',
    title: 'تنظيف داخلي',
    desc: 'تنظيف عميق للمقاعد والأرضيات وكل التفاصيل الداخلية حتى تبدو كالجديدة',
    image: '/images/interior-cleaning.jpg',
    reversed: false,
    bg: '#F8FAFC',
  },
  {
    num: '03',
    title: 'تلميع احترافي',
    desc: 'تلميع بمعايير فائقة يُعيد البريق الأصلي ويحمي الطلاء من عوامل الطقس',
    image: '/images/polishing-machine.jpg',
    reversed: true,
    bg: '#FFFFFF',
  },
]

export default function Services() {
  return (
    <section id="services">
      {/* Header */}
      <div className="py-28 text-center bg-white border-t border-[#E2E8F0]">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#1E90FF] text-xs font-bold tracking-[0.4em] uppercase"
        >
          ما نقدمه
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-black text-[#0B0F1A] mt-4 mb-5 tracking-tight"
        >
          خدماتنا
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[#64748B] text-lg font-light max-w-lg mx-auto"
        >
          خدمات متكاملة بأعلى معايير الجودة لتمنح سيارتك العناية التي تستحقها
        </motion.p>
      </div>

      {services.map((service, i) => (
        <ServicePanel key={service.num} service={service} index={i} />
      ))}
    </section>
  )
}

function ServicePanel({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <div
      className={`flex flex-col ${service.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} border-t border-[#E2E8F0]`}
      style={{ minHeight: '80vh', backgroundColor: service.bg }}
    >
      {/* Image panel */}
      <motion.div
        initial={{ opacity: 0, x: service.reversed ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-8%' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-[58%] relative min-h-[50vw] lg:min-h-full overflow-hidden group"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 58vw"
          priority={index === 0}
        />
        {/* Subtle blue tint on hover */}
        <div className="absolute inset-0 bg-[#1E90FF]/0 group-hover:bg-[#1E90FF]/5 transition-colors duration-700" />
      </motion.div>

      {/* Text panel */}
      <motion.div
        initial={{ opacity: 0, x: service.reversed ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-8%' }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-[42%] flex flex-col justify-center px-10 md:px-14 lg:px-16 py-20"
      >
        <span
          className="font-black text-[#1E90FF] mb-5 block select-none leading-none"
          style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', opacity: 0.12 }}
          aria-hidden="true"
        >
          {service.num}
        </span>

        <div className="w-10 h-0.5 bg-[#1E90FF] mb-6" />

        <h3 className="text-3xl md:text-4xl font-black text-[#0B0F1A] mb-5 tracking-tight leading-tight">
          {service.title}
        </h3>

        <p className="text-[#64748B] text-lg font-light leading-relaxed mb-10 max-w-xs">
          {service.desc}
        </p>

        <a
          href="#location"
          className="inline-flex items-center gap-2 bg-[#1E90FF] text-white px-8 py-3.5 rounded-full font-bold text-sm glow-btn cursor-pointer w-fit tracking-wide"
        >
          احجز الآن
        </a>
      </motion.div>
    </div>
  )
}
