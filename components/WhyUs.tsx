'use client'
import { motion } from 'framer-motion'

const reasons = [
  {
    icon: <ExpertIcon />,
    title: 'خبرة احترافية',
    desc: 'فريق متخصص مدرب على أعلى المستويات في مجال العناية بالسيارات',
    stat: '+10',
    statLabel: 'سنوات خبرة',
  },
  {
    icon: <ProductIcon />,
    title: 'منتجات عالمية',
    desc: 'نستخدم أفضل المنتجات العالمية المعتمدة للحصول على نتائج استثنائية دائمة',
    stat: '100%',
    statLabel: 'منتجات أصلية',
  },
  {
    icon: <SpeedIcon />,
    title: 'خدمة سريعة',
    desc: 'نحترم وقتك ونلتزم بإنجاز الخدمة في الوقت المحدد دون أي تأخير',
    stat: '+500',
    statLabel: 'عميل راضٍ',
  },
  {
    icon: <QualityIcon />,
    title: 'ضمان الجودة',
    desc: 'نضمن جودة عملنا ونعيد الخدمة مجاناً إذا لم تكن راضياً تماماً',
    stat: '100%',
    statLabel: 'ضمان الرضا',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1E90FF] text-sm font-bold tracking-widest uppercase">مميزاتنا</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B0F1A] mt-3 mb-4">
            لماذا <span className="text-gradient">تختارنا؟</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto">
            نحن لا نغسل سيارات فقط — نصنع تجربة راقية تستحقها سيارتك وتستحقها أنت
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-5 text-[#1E90FF] mx-auto">
                {r.icon}
              </div>
              <div className="text-4xl font-black text-gradient mb-1">{r.stat}</div>
              <div className="text-xs text-[#1E90FF] font-bold mb-4 uppercase tracking-wide">{r.statLabel}</div>
              <h3 className="text-base font-bold text-[#0B0F1A] mb-2">{r.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function ProductIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  )
}

function SpeedIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

function QualityIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}
