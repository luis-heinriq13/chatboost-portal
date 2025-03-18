import { useRef, useEffect } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { Play } from "lucide-react";

const Demo = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (demoRef.current) {
      observer.observe(demoRef.current);
    }

    return () => {
      if (demoRef.current) {
        observer.unobserve(demoRef.current);
      }
    };
  }, []);

  const handlePlayVideo = () => {
    // In a real implementation, this would play a video
    // For now, we'll just animate the video placeholder
    if (videoRef.current) {
      videoRef.current.classList.add("scale-105");
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.classList.remove("scale-105");
        }
      }, 300);
    }
  };

  return (
    <section id="demo" className="py-20 bg-white dark:bg-[#121d2f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-100 dark:bg-brand-900/40 filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-brand-100 dark:bg-brand-900/40 filter blur-3xl opacity-40"></div>
      </div>

      <div 
        ref={demoRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 opacity-0 translate-y-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Veja Como Funciona
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Descubra como o WhatsNeed CRM pode transformar o atendimento da sua empresa com nossa demonstração interativa.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-strong border border-slate-100 dark:border-slate-800">
            <div 
              ref={videoRef}
              className="aspect-video bg-slate-100 dark:bg-slate-800 relative transition-transform duration-300"
            >
              {/* This would be a real video in production */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-[#0f1729] dark:to-[#1e293b]">
                <div className="w-full max-w-md">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-500/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-brand-500"></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-2 bg-white/20 rounded mb-3 w-32 mx-auto"></div>
                    <div className="h-2 bg-white/20 rounded mb-3 w-48 mx-auto"></div>
                    <div className="h-2 bg-white/20 rounded w-24 mx-auto"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="aspect-[3/2] bg-white/10 backdrop-blur-sm rounded-lg"></div>
                    <div className="aspect-[3/2] bg-white/10 backdrop-blur-sm rounded-lg"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-2 bg-white/20 rounded w-full"></div>
                    <div className="h-2 bg-white/20 rounded w-4/5 mx-auto"></div>
                    <div className="h-2 bg-white/20 rounded w-3/4 mx-auto"></div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handlePlayVideo}
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
                aria-label="Play video"
              >
                <div className="w-20 h-20 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                  <Play size={32} className="ml-2" />
                </div>
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Quer uma demonstração personalizada para o seu negócio?
            </p>
            <ButtonCustom variant="primary" size="lg" withArrow>
              Agende uma Demo Personalizada
            </ButtonCustom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
