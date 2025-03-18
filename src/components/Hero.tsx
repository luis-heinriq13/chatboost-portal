import { useEffect, useRef } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current || !heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      imageRef.current.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 5}deg) rotateX(${(y - 0.5) * -5}deg)`;
    };

    const heroElement = heroRef.current;
    
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-50 dark:from-[#121d2f] dark:to-[#0f172a] opacity-70 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 z-10">
            <div className="animate-slide-down" style={{ animationDelay: "0.1s" }}>
              <Badge variant="outline" className="mb-4 py-1.5 border-brand-200 bg-brand-50 text-brand-800 dark:bg-brand-500/20 dark:text-brand-300 dark:border-brand-700 font-medium">
                Transforme seu atendimento
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight animate-slide-down" style={{ animationDelay: "0.2s" }}>
              Revolucione seu <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500">
                atendimento pelo WhatsApp
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed max-w-xl animate-slide-down" style={{ animationDelay: "0.3s" }}>
              Ofereça um atendimento rápido e personalizado, aumente suas vendas e fortaleça sua marca com o WhatsNeed CRM.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-slide-down" style={{ animationDelay: "0.4s" }}>
              <ButtonCustom variant="primary" size="lg" withArrow>
                Inicie Seu Teste Gratuito de 3 Dias
              </ButtonCustom>
              <ButtonCustom variant="outline" size="lg">
                Conheça os Planos
              </ButtonCustom>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-slate-600 animate-slide-down" style={{ animationDelay: "0.5s" }}>
              {["Sem cartão de crédito", "Implementação rápida", "Suporte 24/7"].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={16} className="text-brand-500 mr-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Image */}
          <div 
            ref={imageRef}
            className="lg:w-1/2 relative z-10 transition-transform duration-300 ease-out lg:pl-12 animate-scale"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-brand-500/20 to-transparent rounded-full blur-3xl opacity-30" />
              
              <div className="relative bg-white dark:bg-[#131e32] rounded-2xl overflow-hidden shadow-strong border border-slate-100 dark:border-slate-800 transition-all duration-300">
                <div className="h-12 bg-slate-50 dark:bg-slate-800/50 border-b dark:border-slate-700 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto text-xs font-medium text-slate-500 dark:text-slate-400">WhatsNeed CRM - Dashboard</div>
                </div>
                <div className="aspect-[16/9] bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-[#1a2744] relative">
                  {/* We would add an actual screenshot or mockup image here */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-full max-w-xs">
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded mb-3 w-24 mx-auto"></div>
                      <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded mb-4 w-48 mx-auto"></div>
                      <div className="flex gap-4 mb-6 justify-center">
                        <div className="h-24 w-24 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-brand-500"></div>
                          </div>
                        </div>
                        <div className="h-24 w-24 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-whatsapp-light dark:bg-whatsapp/20 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-whatsapp"></div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-8 bg-white dark:bg-slate-800 rounded shadow-sm"></div>
                        <div className="h-8 bg-white dark:bg-slate-800 rounded shadow-sm"></div>
                        <div className="h-8 bg-white dark:bg-slate-800 rounded shadow-sm"></div>
                        <div className="h-8 bg-white dark:bg-slate-800 rounded shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-4 -left-4 p-4 bg-white dark:bg-[#131e32] rounded-lg shadow-soft border border-slate-100 dark:border-slate-800 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs font-medium dark:text-white">+40%</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Atendimentos</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 p-4 bg-white dark:bg-[#131e32] rounded-lg shadow-soft border border-slate-100 dark:border-slate-800 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-xs font-medium dark:text-white">+65%</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Conversão</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
