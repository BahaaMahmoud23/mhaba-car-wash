'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const points = [
  { title: 'جودة لا تُضاهى', desc: 'نلتزم بأعلى معايير العناية في كل خدمة. كل سيارة تُعامَل باحترافية تامة.' },
  { title: 'ثقة العملاء', desc: 'أكثر من 500 عميل راضٍ يثقون بنا ويعودون إلينا مراراً.' },
  { title: 'أحدث التقنيات', desc: 'نستخدم معدات وتقنيات متطورة لضمان أفضل نتيجة ممكنة لسيارتك.' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '85vh' }}>
        {/* Text — first in DOM = right column in RTL; second on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-none flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24"
        >
          <span className="text-[#1E90FF] text-xs font-bold tracking-[0.4em] uppercase block mb-6">
            من نحن
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-[#0B0F1A] mb-6 tracking-tight leading-tight">
            نحن <span className="text-gradient">مهابة</span>
          </h2>

          <p className="text-[#64748B] text-lg font-light leading-relaxed mb-10 max-w-sm">
            وجهتك الأولى للعناية الاحترافية بالسيارات في المملكة. نؤمن أن كل سيارة تستحق الأفضل.
          </p>

          <div className="space-y-6 mb-12">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-4 items-start"
              >
                <div className="w-2 h-2 rounded-full bg-[#1E90FF] mt-2.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#0B0F1A] text-base mb-1">{p.title}</h3>
                  <p className="text-[#64748B] text-sm font-light leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#location"
              className="inline-flex items-center gap-2 bg-[#1E90FF] text-white px-8 py-3.5 rounded-full font-bold text-sm glow-btn cursor-pointer tracking-wide"
            >
              احجز موعدك
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#E2E8F0] text-[#0B0F1A] px-8 py-3.5 rounded-full font-bold text-sm hover:border-[#1E90FF] hover:text-[#1E90FF] transition-colors duration-300 cursor-pointer"
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>

        {/* Image — second in DOM = left column in RTL; first on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.1 }}
          className="order-1 lg:order-none relative min-h-[55vw] lg:min-h-full overflow-hidden group"
        >
          <Image
            src="/images/about-us.jpeg"
            alt="مهابة للعناية بالسيارات"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Light gradient from right (toward text side) */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#F8FAFC]/50 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
