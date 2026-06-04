export default function Offerings() {
  const serviceMatrix = [
    { indexCode: "Office of multiple interest content", label: "Collaborative & partnership" },
    { indexCode: "The hanger US Air force digital experimental", label: "We talk about our weight" },
    { indexCode: "Delta faucet content, social, digital", label: "Piloting digital confidence" }
  ];

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative overflow-visible">
      
      {/* ─── 2-LINE HEADER WITH EXACT VECTOR 5 UNDERLINE ─── */}
      <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-neutral-900 mb-16 leading-[1.25] flex flex-col gap-1 text-left select-none relative z-10">
        <span className="block whitespace-nowrap">
          What we{" "}
          <span className="bg-[#D1FAE5] px-4 sm:px-6 py-0.5 rounded-full inline-block font-bold align-middle">
            can
          </span>
        </span>
        <span className="block whitespace-nowrap mt-1">
          <span className="relative inline-block px-1">
            offer you!
            <svg 
              className="absolute left-0 bottom-[-4px] md:bottom-[-8px] w-full h-[12px] md:h-[24px] pointer-events-none select-none overflow-visible" 
              viewBox="0 0 371 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path 
                d="M 10 12 C 120 8, 240 6, 361 14 M 4 22 C 100 14, 260 12, 355 24" 
                stroke="rgba(255, 194, 80, 1)" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </h2>

      {/* Grid Offerings Table Interface Area */}
      <div className="border-t border-neutral-200 relative z-10">
        {serviceMatrix.map((item, key) => (
          <div 
            key={key} 
            className="group flex flex-row items-center justify-between py-8 md:py-10 border-b border-neutral-200 cursor-pointer hover:bg-neutral-50/40 transition-colors duration-150 px-2"
          >
            <span className="text-[10px] lg:text-xs font-semibold uppercase tracking-widest text-neutral-400 w-1/4 hidden lg:block leading-relaxed max-w-xs">
              {item.indexCode}
            </span>
            <h3 className="text-lg sm:text-xl md:text-[2.25rem] font-medium text-neutral-900 flex-1 lg:pl-12 group-hover:text-black transition-colors break-words pr-2">
              {item.label}
            </h3>
            <div className="text-xl md:text-2xl text-neutral-400 group-hover:text-black group-hover:translate-x-2 transition-all duration-200 pl-2">
              →
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}