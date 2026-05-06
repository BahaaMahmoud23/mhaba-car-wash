'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'غسيل خارجي فاخر',
    sub: 'نظافة عميقة وبريق لا مثيل له',
    bg: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1200',
    from: 'from-[#060a14]/20',
    to: 'to-[#060a14]/90',
  },
  {
    title: 'تنظيف داخلي عميق',
    sub: 'مقاعد وأرضيات وتفاصيل كالجديد',
    bg: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200',
    from: 'from-[#060a14]/10',
    to: 'to-[#060a14]/90',
  },
  {
    title: 'تلميع وحماية الطلاء',
    sub: 'طلاء يلمع ويبقى محمياً لسنوات',
    bg: 'https://images.pexels.com/photos/3811978/pexels-photo-3811978.jpeg?auto=compress&cs=tinysrgb&w=1200',
    from: 'from-[#060a14]/20',
    to: 'to-[#060a14]/90',
  },
]

export default function PromoCards() {
  return (
    <section className="section-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#1E90FF] text-sm font-bold tracking-widest uppercase">خدماتنا المميزة</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B0F1A] mt-2">
            لأن سيارتك تستحق{' '}
            <span className="text-gradient">الأفضل</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer"
            >
              {/* Background image with zoom on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${card.bg}')` }}
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${card.from} ${card.to}`} />

              {/* Blue accent line */}
              <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <p className="text-white/60 text-sm mb-1.5">{card.sub}</p>
                <h3 className="text-white text-2xl font-black mb-5 leading-tight">{card.title}</h3>
                <a
                  href="#booking"
                  className="self-start flex items-center gap-2 bg-[#1E90FF] hover:bg-[#0d7fe6] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(30,144,255,0.5)]"
                >
                  احجز الآن
                  <ArrowIcon />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}
