import meetingImg from "../assets/meeting.png";       
import collabImg from "../assets/collaboration.png"; 

export default function Features() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-32 md:space-y-48 overflow-visible">
      
      {/* ─── FIGMA AMBIENT BACKGROUND GLOW (Ellipse 734) ─── */}
      <div className="absolute left-[45%] top-[80px] w-0 h-0 overflow-visible pointer-events-none z-0 select-none">
        <div 
          className="rounded-full bg-[rgba(255,32,32,1)]"
          style={{
            width: '166px',
            height: '166px',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 160px 110px rgba(255, 32, 32, 0.75)',
            filter: 'blur(300px)',
          }}
        />
      </div>

      {/* ─── 🛠️ THE SINGLE CONTINUOUS RED CURVE PATH (z-10) ─── */}
      {/* Fixed: Unified back into one flawless continuous line, tracking cleanly behind image 1 */}
      <div className="absolute inset-0 w-full h-[115%] opacity-90 pointer-events-none hidden lg:block z-10 overflow-visible select-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 1400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M 1200 130 
               C 1060 210, 940 130, 790 260 
               C 650 380, 480 390, 290 290 
               C 100 200, -20 490, 110 700 
               C 195 825, 420 720, 640 760 
               C 880 800, 1040 680, 1140 890 
               C 1220 1050, 850 1180, 520 1290" 
            stroke="rgba(255, 109, 109, 1)" /* Exact color from Inspector */
            strokeWidth="5"                  /* Exact width from Inspector */
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ─── FEATURE ROW BLOCK 1 (Tomorrow should be better than today) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-20">
        <div className="space-y-6 lg:col-span-5 max-w-xl mx-auto lg:mx-0 text-left">
          
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] font-bold leading-[1.25] text-neutral-900 tracking-tight flex flex-col gap-1">
            <span className="block whitespace-nowrap">
              <span className="relative inline-block px-1">
                Tomorrow
                {/* Vector 5 Underline Accent */}
                <svg 
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] md:bottom-[-6px] w-[105%] h-[12px] md:h-[22px] pointer-events-none select-none overflow-visible" 
                  viewBox="0 0 371 30" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M 10 12 C 120 8, 240 6, 361 14 M 4 22 C 100 14, 260 12, 355 24" 
                    stroke="rgba(255, 194, 80, 1)" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              should
            </span>
            <span className="block whitespace-nowrap">
              be better than{" "}
              <span className="bg-[#D1FAE5] px-4 sm:px-5 py-0.5 rounded-full inline-block font-bold align-middle">
                today
              </span>
            </span>
          </h2>

          <p className="text-neutral-500 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-sm">
            We are a team of strategists, designers, communicators, researchers. Togeather, we belive that progress only hghappens when you refuse to play things safe.
          </p>
          <div className="pt-2">
            <a href="#read" className="inline-flex items-center gap-3 font-bold text-xs tracking-widest uppercase text-neutral-900 border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">
              Read more <span className="text-sm">→</span>
            </a>
          </div>
        </div>

        {/* relative z-30 pops this entire image column forward over the background red vector */}
        <div className="relative z-30 flex justify-center lg:col-span-7 lg:justify-end mt-6 lg:mt-0">
          <div className="absolute top-6 right-2 sm:right-6 w-20 h-24 bg-[#FF7A7A] transform rotate-[15deg] -z-10 rounded-xl" />
          <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-white relative">
            <img 
              src={meetingImg} 
              alt="Team Meeting Session" 
              className="w-full h-full object-cover object-center scale-105" 
            />
          </div>
        </div>
      </div>

      {/* ─── FEATURE ROW BLOCK 2 (See how we can help you progress) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-20">
        <div className="relative flex justify-center lg:col-span-7 lg:justify-start order-2 lg:order-1 mt-6 lg:mt-0">
          <div className="absolute top-12 left-2 sm:left-4 w-12 h-20 bg-[#FF7A7A] clip-triangle transform -rotate-[25deg] -z-10" />
          <div className="absolute bottom-[-16px] right-[18%] sm:right-[22%] w-24 h-24 bg-[#FF7A7A] clip-triangle transform rotate-[35deg] z-10" />
          <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-white relative z-30">
            <img 
              src={collabImg} 
              alt="Workspace Collaboration" 
              className="w-full h-full object-cover object-center" 
            />
          </div>
        </div>

        <div className="space-y-6 lg:col-span-5 order-1 lg:order-2 max-w-xl mx-auto lg:mx-0 text-left lg:pl-8">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] font-bold leading-[1.2] text-neutral-900 tracking-tight flex flex-col gap-1">
            <span className="block whitespace-nowrap">
              <span className="bg-[#D1FAE5] px-4 sm:px-5 py-0.5 rounded-full inline-block font-bold align-middle mr-2">
                See
              </span>
              how we can
            </span>
            <span className="block whitespace-nowrap">
              help you{" "}
              <span className="relative inline-block px-1">
                progress
                {/* Vector 5 Underline Accent */}
                <svg 
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] md:bottom-[-6px] w-[105%] h-[12px] md:h-[22px] pointer-events-none select-none overflow-visible" 
                  viewBox="0 0 371 30" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M 10 12 C 120 8, 240 6, 361 14 M 4 22 C 100 14, 260 12, 355 24" 
                    stroke="rgba(255, 194, 80, 1)" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-sm">
            We add a layer of fearless insights and action that allows changemakers to accelerate their progress in areas such as brand, design digital, comms and social research.
          </p>
          <div className="pt-2">
            <a href="#read" className="inline-flex items-center gap-3 font-bold text-xs tracking-widest uppercase text-neutral-900 border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">
              Read more <span className="text-sm">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}