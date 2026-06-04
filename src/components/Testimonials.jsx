// ─── IMPORT LOCAL DOWNLOADED PNG ASSETS ───
import avatarLeftTop from "../assets/avatar-left-top.png";
import avatarLeftFar from "../assets/avatar-left-far.png";
import avatarLeftBig from "../assets/avatar-left-big.png";
import avatarLeftBot from "../assets/avatar-left-bot.png";

import avatarRightTop from "../assets/avatar-right-top.png";
import avatarRightMid from "../assets/avatar-right-mid.png";
import avatarRightFeat from "../assets/avatar-right-feat.png";
import avatarRightBot from "../assets/avatar-right-bot.png";

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 bg-white overflow-visible select-none">
      
      {/* ─── HEADING SECTION (EXACT 2-LINE FIGMA BREAKDOWN) ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-neutral-900 leading-[1.25] flex flex-col gap-1 items-center">
          {/* Line 1 */}
          <span className="block whitespace-nowrap">
            <span className="bg-[#D1FAE5] px-4 sm:px-6 py-0.5 rounded-full inline-block font-bold align-middle mr-3">
              What
            </span>
            our customer
          </span>
          
          {/* Line 2 */}
          <span className="block whitespace-nowrap mt-2">
            says{" "}
            <span className="relative inline-block px-1">
              About Us
              
              {/* EXACT FIGMA VECTOR 5 ACCENT */}
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
      </div>

      {/* ─── UNIFIED CONTAINER FOR CARD & LAYERED AVATARS ─── */}
      <div className="relative max-w-6xl mx-auto px-6 h-[440px] flex items-center justify-center overflow-visible">
        
        {/* CENTRAL GREEN QUOTE CARD */}
        <div className="relative w-full max-w-2xl bg-[#F4FBF7] rounded-[32px] p-8 md:p-12 border border-[#E6F4ED] shadow-sm text-center z-10">
          <span className="absolute left-6 top-6 text-[#BADBC9] text-5xl font-serif opacity-60">“</span>
          <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-xl mx-auto">
            Elementum delivered the site with in the timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
          </p>
          <span className="absolute right-8 bottom-4 text-[#BADBC9] text-5xl font-serif opacity-60">”</span>
        </div>

        {/* ─── FIXED FLOATING AVATARS CANVAS BACKGROUND (z-0) ─── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden md:block">
          
          {/* ─── LEFT SIDE MARGIN CLUSTER MAPPING (REALIGNED) ─── */}
          
          {/* Top Center-Left Circle */}
          <div className="absolute top-[-70px] left-[130px] w-28 h-28 rounded-full overflow-hidden bg-neutral-100 border-[3.5px] border-white shadow-md">
            <img src={avatarLeftTop} alt="Customer" className="w-full h-full object-cover" />
          </div>
          
          {/* Far Left Tiny Dot Circle (Man in orange shirt - aligned vertically with bottom avatar) */}
          <div className="absolute top-[80px] left-[-30px] w-16 h-16 rounded-full overflow-hidden bg-neutral-100 border-2 border-white shadow-sm">
            <img src={avatarLeftFar} alt="Customer" className="w-full h-full object-cover" />
          </div>
          
          {/* Lower Left Large Circle (Purple shirt man - adjusted size & placement) */}
          <div className="absolute top-[125px] left-[75px] w-[155px] h-[155px] rounded-full overflow-hidden bg-neutral-100 border-[4.5px] border-white shadow-lg">
            <img src={avatarLeftBig} alt="Customer" className="w-full h-full object-cover" />
          </div>
          
          {/* Bottom Left Corner Baseline Circle (Confetti man - EXACT FIGMA 123px × 123px) */}
          <div className="absolute bottom-[-65px] left-[-30px] w-[123px] h-[123px] rounded-full overflow-hidden bg-neutral-100 border-[3.5px] border-white shadow-md">
            <img src={avatarLeftBot} alt="Customer" className="w-full h-full object-cover" />
          </div>


          {/* ─── RIGHT SIDE MARGIN CLUSTER MAPPING ─── */}
          
          {/* Top Right - Apron Man (EXACT 146px × 146px) */}
          <div className="absolute top-[-50px] right-[-10px] w-[146px] h-[146px] rounded-full overflow-hidden bg-neutral-100 border-[4px] border-white shadow-lg">
            <img src={avatarRightTop} alt="Customer" className="w-full h-full object-cover" />
          </div>
          
          {/* Top Right Floating Backer Circle */}
          <div className="absolute top-[35px] right-[155px] w-14 h-14 rounded-full overflow-hidden bg-neutral-100 border-2 border-white shadow-sm">
            <img src={avatarRightMid} alt="Customer" className="w-full h-full object-cover" />
          </div>
          
          {/* Middle Right Circle (EXACT 112px × 112px) */}
          <div className="absolute top-[145px] right-[55px] w-[112px] h-[112px] rounded-full overflow-hidden bg-neutral-100 border-[3.5px] border-white shadow-md">
            <img src={avatarRightFeat} alt="Customer" className="w-full h-full object-cover" />
          </div>
          
          {/* Bottom Right Giant Signature Circle (Red shirt man) */}
          <div className="absolute bottom-[-75px] right-[-50px] w-[210px] h-[210px] rounded-full overflow-hidden bg-neutral-100 border-[6px] border-white shadow-xl">
            <img src={avatarRightBot} alt="Customer" className="w-full h-full object-cover" />
          </div>

        </div>

      </div>

    </section>
  );
}