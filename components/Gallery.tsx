'use client'
import { motion } from 'framer-motion'

const photos = [
  {
    src: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'غسيل خارجي بالفوم',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'تنظيف داخلي',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3811978/pexels-photo-3811978.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'تلميع الجسم',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'سيارة فاخرة',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'غسيل السيارة',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'عناية بالسيارة',
    span: '',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1E90FF] text-sm font-bold tracking-widest uppercase">معرضنا</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B0F1A] mt-3 mb-4">
            معرض <span className="text-gradient">أعمالنا</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto">
            نماذج من أعمالنا المتميزة — كل لقطة تحكي قصة عناية واحترافية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#080B12]/0 group-hover:bg-[#080B12]/40 transition-all duration-300 flex items-end p-5">
                <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {photo.alt}
                </span>
              </div>
              {/* Blue accent on hover */}
              <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
