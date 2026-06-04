import avatarCluster from "../assets/image_e78427.png"; 

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-8 md:pt-16 pb-20 md:pb-36 text-center overflow-visible">
      
      {/* Figma Left-Edge Backing Ornament Vectors */}
      <div className="absolute left-0 top-[15%] w-16 md:w-24 h-64 pointer-events-none hidden md:block select-none opacity-90">
        <svg width="100%" height="100%" viewBox="0 0 90 240" fill="none" preserveAspectRatio="xMinYMin meet">
          <path d="M10 10C50 60 -20 120 40 170C80 210 20 230 30 240" stroke="black" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M25 40C65 90 5 130 55 180" stroke="#F87171" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Figma Right-Edge Purple Accent Arc & Tilted Gold Box */}
      <div className="absolute right-0 top-[25%] w-20 md:w-24 h-32 pointer-events-none hidden md:block overflow-visible">
        <div className="absolute right-6 top-2 w-14 h-14 border-2 border-[#FBBF24] transform rotate-[28deg] rounded-sm" />
        <div className="absolute right-0 top-6 w-10 h-20 bg-[#8B5CF6] rounded-l-full shadow-sm" />
      </div>
      
      {/* Main Core Typography Header Box */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-[4.5rem] lg:text-[4.85rem] font-bold tracking-tight text-neutral-900 flex flex-col items-center justify-center gap-y-1 md:gap-y-3 select-none">
          
          {/* LINE 1: The thinkers and */}
          <div className="w-full flex items-center justify-center flex-wrap gap-x-3">
            <span className="whitespace-nowrap">The</span>
            <span className="relative inline-block px-1">
              thinkers
              {/* Precise 594x50 Underline Scribble Vector */}
              <svg 
                className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] md:bottom-[-6px] w-[105%] h-[16px] md:h-[26px] pointer-events-none select-none overflow-visible text-[rgba(255,194,80,1)]" 
                viewBox="0 0 594 50" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M 12 18 C 180 12, 340 10, 582 22 M 6 32 C 160 22, 420 20, 574 38 M 45 42 C 220 34, 390 32, 530 44" 
                  stroke="currentColor" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  fill="transparent"
                />
              </svg>
            </span>
            <span className="whitespace-nowrap">and</span>
          </div>

          {/* LINE 2: doers were changing */}
          <div className="w-full flex items-center justify-center flex-wrap gap-x-3 mt-1 md:mt-2">
            <span className="whitespace-nowrap">doers</span>
            <span className="whitespace-nowrap">were</span>
            <span className="bg-[#FBCFE8] px-6 md:px-8 py-1 md:py-1.5 rounded-full inline-flex items-center justify-center font-bold tracking-tight transform -rotate-0.5 align-middle select-text">
              changing
            </span>
          </div>

          {/* LINE 3: the status Quo with */}
          <div className="w-full flex items-center justify-center flex-wrap gap-x-3 mt-1 md:mt-2">
            <span className="whitespace-nowrap">the</span>
            <span className="bg-[#D1FAE5] px-6 md:px-8 py-1 md:py-1.5 rounded-full inline-flex items-center justify-center font-bold tracking-tight align-middle select-text">
              status
            </span>
            <span className="whitespace-nowrap">Quo</span>
            <span className="whitespace-nowrap">with</span>
          </div>

        </h1>
        
        {/* Figma Exact Text Layer Strings */}
        <p className="text-neutral-500 max-w-sm sm:max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium pt-8 md:pt-12">
          We are a team of strategists, designers communicators, researchers. Togeather, 
          we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>

      {/* Fluid Overlapping Avatar Cluster Container */}
      <div className="relative w-full max-w-4xl mx-auto mt-12 md:mt-24 px-2 select-none pointer-events-none">
        <img 
          src={avatarCluster} 
          alt="Elementum Team Clustered Profiles Map" 
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
}