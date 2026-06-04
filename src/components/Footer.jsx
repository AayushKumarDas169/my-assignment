export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#E0F2E9] pt-24 pb-8 overflow-hidden select-none text-left relative">
      
      {/* ─── 🛠️ FIGMA PURPLE CIRCLE WINDOW ACCENT (z-0) ─── */}
      <div 
        style={{
          position: "absolute",
          right: "100px",
          top: "80px",
          width: "1920px",
          height: "6665px",
          overflow: "hidden"
        }}
        className="hidden md:block z-0"
      >
        <div 
          style={{
            position: "absolute",
            right: "50px",
            top: "-50px",
            width: "244px",
            height: "244px",
            borderRadius: "9999px",
            backgroundColor: "rgba(147, 76, 236, 1)",
            transform: "rotate(-120deg)",
            transformOrigin: "right center"
          }}
        />
      </div>

      {/* ─── MAIN FOOTER CONTENT WRAPPER (z-10) ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full overflow-visible">
        
        {/* ─── NEWSLETTER TEXT CONTENT INTERFACE ─── */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6 relative z-10">
          
          {/* ─── 🛠️ 100% PERFECTLY LOCKED BLUEPRINT S-ARROWS SYSTEM ─── */}
          <div 
            style={{
              position: "absolute",
              top: "-98px",       
              left: "80px",      
              width: "260px",
              height: "120px",
            }}
            className="hidden sm:block z-20 pointer-events-none overflow-visible"
          >
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 260 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* VECTOR 2518: RIGHT ARROW LOOP */}
              <path 
                d="M 190 10 C 130 10, 175 84, 115 105" 
                stroke="rgba(255, 109, 109, 1)" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
              />
              <path 
                d="M 107 93 L 115 105 L 123 93" 
                stroke="rgba(255, 109, 109, 1)" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />

              {/* VECTOR 2519: LEFT ARROW LOOP */}
              <path 
                d="M 115 10 C 55 10, 100 84, 40 105" 
                stroke="rgba(255, 109, 109, 1)" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
              />
              <path 
                d="M 32 93 L 40 105 L 48 93" 
                stroke="rgba(255, 109, 109, 1)" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-[3.75rem] font-medium text-neutral-900 leading-[1.15] tracking-wide flex flex-col items-center">
            <span className="block whitespace-nowrap">Subscribe to</span>
            <span className="block whitespace-nowrap mt-1">our newsletter</span>
          </h2>
          
          <p className="text-neutral-600 text-xs sm:text-sm md:text-base font-medium max-w-md mx-auto text-center">
            To make your stay special and even more memorable
          </p>
          
          <div className="pt-2 text-center">
            <button className="bg-black text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full hover:opacity-80 transition-opacity tracking-wide shadow-md mx-auto block">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* HORIZONTAL SECTION DIVIDER LINE */}
        <div className="w-full h-[1px] bg-neutral-300/60 mb-16 relative z-10" />

        {/* ─── BOTTOM LINK MATRIX GRID (ALL 4 COLUMNS) ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 items-start mb-20 relative z-10">
          
          {/* COL 1: Company */}
          <div className="space-y-4">
            <h3 className="font-bold text-neutral-900 tracking-wider text-sm sm:text-base">Company</h3>
            <ul className="space-y-2.5 text-neutral-600 text-xs sm:text-sm font-medium">
              <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#studio" className="hover:text-black transition-colors">Studio</a></li>
              <li><a href="#service" className="hover:text-black transition-colors">Service</a></li>
              <li><a href="#blog" className="hover:text-black transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* COL 2: Terms & Policies */}
          <div className="space-y-4">
            <h3 className="font-bold text-neutral-900 tracking-wider text-sm sm:text-base">Terms & Policies</h3>
            <ul className="space-y-2.5 text-neutral-600 text-xs sm:text-sm font-medium">
              <li><a href="#privacy" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-black transition-colors">Terms & Conditions</a></li>
              <li><a href="#explore" className="hover:text-black transition-colors">Explore</a></li>
              <li><a href="#accessibility" className="hover:text-black transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* COL 3: Social Follow */}
          <div className="space-y-4">
            <h3 className="font-bold text-neutral-900 tracking-wider text-sm sm:text-base">Follow Us</h3>
            <ul className="space-y-2.5 text-neutral-600 text-xs sm:text-sm font-medium">
              <li><a href="#instagram" className="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="#linkedin" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="#youtube" className="hover:text-black transition-colors">Youtube</a></li>
              <li><a href="#twitter" className="hover:text-black transition-colors">Twitter</a></li>
            </ul>
          </div>

          {/* COL 4: Corporate Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-neutral-900 tracking-wider text-sm sm:text-base">Terms & Policies</h3>
            <ul className="space-y-3 text-neutral-600 text-xs sm:text-sm font-medium leading-relaxed">
              <li className="max-w-[200px]">1498w Fluton ste, STE 2D Chicago, IL 63867.</li>
              <li className="pt-1">(123) 456789000</li>
              <li className="pt-1"><a href="mailto:info@elementum.com" className="hover:text-black border-b border-neutral-400 pb-0.5 transition-all">info@elementum.com</a></li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT BASELINE BAR */}
        <div className="w-full text-center text-[10px] sm:text-xs font-medium text-neutral-500/90 tracking-wide border-t border-neutral-300/40 pt-8 relative z-10">
          ©{currentYear} Elementum. All rights reserved
        </div>

      </div>
    </footer>
  );
}