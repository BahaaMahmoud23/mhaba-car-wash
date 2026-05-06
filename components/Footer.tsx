const links = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'من نحن', href: '#about' },
  { label: 'موقعنا', href: '#location' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B0F1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <span className="text-2xl font-black text-gradient">مهابة</span>
            <p className="text-white/35 text-xs mt-2 font-light">العناية التي تستحقها سيارتك</p>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-7 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/35 hover:text-white text-sm font-light transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#25D366]/20 transition-colors duration-300 cursor-pointer"
          >
            واتساب
          </a>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 text-center">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} مهابة للعناية بالسيارات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
