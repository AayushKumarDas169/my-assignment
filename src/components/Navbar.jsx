export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 h-24 flex justify-between items-center bg-white">
      <div className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 cursor-pointer">
        Elementum
      </div>
      
      {/* Fluid Nav Link Array */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm font-semibold text-neutral-600">
        {["Home", "Studio", "Services", "Contact", "FAQs"].map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            className="hover:text-black no-underline transition-colors duration-150 relative group py-1"
          >
            {link}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Hamburger Toggle */}
      <button className="flex flex-col justify-between w-6 h-3.5 group cursor-pointer" aria-label="Toggle Menu">
        <span className="w-full h-[2px] bg-neutral-900 transition-transform duration-200 group-hover:translate-y-[1px]"></span>
        <span className="w-full h-[2px] bg-neutral-900 transition-transform duration-200 group-hover:-translate-y-[1px]"></span>
      </button>
    </nav>
  );
}