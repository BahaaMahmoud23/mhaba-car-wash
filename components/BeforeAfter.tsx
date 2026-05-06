'use client'
import { motion } from 'framer-motion'

const pairs = [
  {
    label: 'تلميع الجسم الخارجي',
    bgBefore: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=600',
    bgAfter: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'تنظيف داخلي عميق',
    bgBefore: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
    bgAfter: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'حماية الطلاء',
    bgBefore: 'https://images.pexels.com/photos/3811978/pexels-photo-3811978.jpeg?auto=compress&cs=tinysrgb&w=600',
    bgAfter: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function BeforeAfter() {
  return (
    <section id="before-after" className="section-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1E90FF] text-sm font-bold tracking-widest uppercase">النتائج</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B0F1A] mt-3 mb-4">
            قبل <span className="text-gradient">وبعد</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto">
            الفرق الذي نصنعه يتحدث عن نفسه — شاهد التحول الحقيقي لسياراتنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pairs.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-52 flex">
                {/* Before */}
                <div
                  className="w-1/2 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${p.bgBefore}')` }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    قبل
                  </div>
                </div>

                {/* Divider */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/80 z-10 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#1E90FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                </div>

                {/* After */}
                <div
                  className="w-1/2 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${p.bgAfter}')` }}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-3 left-3 bg-[#1E90FF] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    بعد
                  </div>
                </div>
              </div>

              <div className="bg-white px-5 py-4 border-t border-[#E2E8F0]">
                <h3 className="text-[#0B0F1A] font-bold text-center text-sm">{p.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
