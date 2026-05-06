'use client'
import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section id="location" className="bg-white border-t border-[#E2E8F0] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[#1E90FF] text-xs font-bold tracking-[0.4em] uppercase block mb-4">
            تجدنا هنا
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B0F1A] tracking-tight">
            موقعنا
          </h2>
          <p className="text-[#64748B] mt-4 text-lg font-light">
            تجدنا في قلب المدينة — سهل الوصول لجميع عملائنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Info card — right in RTL */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 space-y-7 shadow-sm"
          >
            <InfoRow icon={<PinIcon />} label="العنوان">
              <p className="text-[#64748B] text-sm leading-relaxed font-light">
                CNAA3877، 9223<br />المحطة، حفر الباطن 39913
              </p>
            </InfoRow>

            <div className="h-px bg-[#E2E8F0]" />

            <InfoRow icon={<ClockIcon />} label="ساعات العمل">
              <p className="text-[#64748B] text-sm leading-relaxed font-light">
                السبت – الخميس: 8ص – 10م<br />الجمعة: 2م – 10م
              </p>
            </InfoRow>

            <div className="h-px bg-[#E2E8F0]" />

            <InfoRow icon={<PhoneIcon />} label="للتواصل">
              <p className="text-[#64748B] text-sm font-light" dir="ltr">+966 50 000 0000</p>
            </InfoRow>
          </motion.div>

          {/* Map + CTAs — left 2 columns in RTL */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                boxShadow: '0 4px 32px rgba(30,144,255,0.1), 0 1px 8px rgba(0,0,0,0.06)',
                border: '1px solid #E2E8F0',
              }}
            >
              <iframe
                title="موقع مهابة للعناية بالسيارات"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.21167179633096!2d45.98323883662795!3d28.411958911529666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fd738aa457f4ff3%3A0xf6d649b61f8a6786!2zQ05BQTM4NzfYjCA5MjIz2Iwg2KfZhNmF2LXZitmB2Iwg2K3ZgdixINin2YTYqNin2LfZhiAzOTkxMw!5e1!3m2!1sar!2ssa!4v1778007869896!5m2!1sar!2ssa"
                width="100%"
                height="450"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <a
                href="https://maps.google.com/?q=28.411958911529666,45.98323883662795"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#1E90FF] text-white py-4 rounded-xl font-bold text-sm glow-btn cursor-pointer tracking-wide transition-all duration-300"
              >
                <PinIcon />
                زورنا الآن
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-[#E2E8F0] text-[#0B0F1A] py-4 rounded-xl font-bold text-sm hover:border-[#1E90FF] hover:text-[#1E90FF] transition-all duration-300 cursor-pointer bg-white"
              >
                <WhatsAppIcon />
                احجز عبر واتساب
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1E90FF] flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-[#0B0F1A] font-bold text-sm mb-1">{label}</p>
        {children}
      </div>
    </div>
  )
}

function PinIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
