import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scene 1
  const s1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, -40]);
  const s1Filter = useTransform(scrollYProgress, [0, 0.15, 0.3], ['blur(0px)', 'blur(0px)', 'blur(20px)']);

  // Scene 2
  const s2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.7], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.7], [40, 0, 0, -40]);
  const s2Filter = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.7], ['blur(20px)', 'blur(0px)', 'blur(0px)', 'blur(20px)']);
  // Use a derived value to handle pointer events so that clickable elements are only active when visible
  const s2PointerEvents = useTransform(scrollYProgress, (v) => (v > 0.3 && v < 0.6 ? "auto" : "none"));

  // Scene 3
  const s3Opacity = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1], [40, 0, 0, -40]);
  const s3Filter = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1], ['blur(20px)', 'blur(0px)', 'blur(0px)', 'blur(20px)']);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-white text-black selection:bg-black selection:text-white antialiased font-sans">
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        
        {/* SCENE 1: Cover */}
        <motion.div 
          style={{ opacity: s1Opacity, y: s1Y, filter: s1Filter }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] font-light mb-16 text-black">
            INVITATION
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-black/80 mb-24">
            To Lynette
          </p>
          <div className="text-xs md:text-sm tracking-[0.3em] uppercase leading-[2.5] text-black/90">
            <p>Justin Li 李政廷</p>
            <p>18th</p>
            <p>Birthday Party</p>
          </div>
        </motion.div>

        {/* SCENE 2: Core Info */}
        <motion.div 
          style={{ opacity: s2Opacity, y: s2Y, filter: s2Filter, pointerEvents: s2PointerEvents as any }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <div className="flex flex-col items-center space-y-20">
            <div className="flex flex-col items-center space-y-6">
              <span className="text-[10px] tracking-[0.4em] uppercase text-black/40 font-medium">Location</span>
              <a 
                href="https://surl.amap.com/ceoPpCm1h8Ye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-serif text-3xl md:text-4xl text-black transition-all outline-none"
              >
                <span className="relative pb-1.5">
                  REGENT·丽晶轩
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black/20 group-hover:bg-black transition-colors duration-500"></span>
                </span>
                <ArrowUpRight className="w-5 h-5 text-black/20 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </a>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <span className="text-[10px] tracking-[0.4em] uppercase text-black/40 font-medium">Time</span>
              <div className="text-sm md:text-base tracking-[0.25em] uppercase leading-loose text-black/90">
                <p>August 02 2026</p>
                <p className="text-black/60 mt-1">17:30</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SCENE 3: Tips */}
        <motion.div 
          style={{ opacity: s3Opacity, y: s3Y, filter: s3Filter }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h2 className="text-sm tracking-[0.5em] uppercase font-semibold text-black mb-16">
            NOTICE
          </h2>
          <div className="flex flex-col space-y-10 text-sm md:text-base font-normal text-black/90 leading-relaxed max-w-md w-full">
            <div className="relative pl-6 border-l border-black/20 text-left">
              <p>有地下停车场 🅿️</p>
            </div>
            <div className="relative pl-6 border-l border-black/20 text-left">
              <p>有含酒精饮品，若驾车可能不便 🥂</p>
            </div>
            <div className="relative pl-6 border-l border-black/20 text-left">
              <p>无着装要求，穿着能拍出不错照片的就好 😁</p>
            </div>
            <div className="relative pl-6 border-l border-black/20 text-left">
              <p>天气炎热，注意防暑 ☀️</p>
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: s1Opacity }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 pointer-events-none"
      >
        <div className="flex items-center gap-2 text-black/30">
          <span className="text-[9px] tracking-[0.4em] uppercase font-medium">Scroll</span>
          <span className="text-[9px] tracking-[0.2em] font-light pl-0.5">滑动</span>
        </div>
        <div className="w-[1px] h-16 bg-gradient-to-b from-black/30 to-transparent"></div>
      </motion.div>
    </div>
  );
}
