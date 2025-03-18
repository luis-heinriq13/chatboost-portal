import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MessageSquare, BarChart3, Layout } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature = ({ title, description, icon, index }: FeatureProps) => {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={featureRef}
      className={cn(
        "flex items-start p-6 opacity-0 translate-y-8 transition-all duration-500 ease-out",
        index % 2 === 0 ? "bg-brand-50 dark:bg-brand-900/20 rounded-xl" : ""
      )}
    >
      <div className="h-10 w-10 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0 mr-5 border border-slate-100 dark:border-slate-700">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      title: "Comunicação Interna Eficiente",
      description: "Chats internos para aprimorar a colaboração da equipe.",
      icon: <MessageSquare size={20} />,
    },
    {
      title: "Métricas de Atendimento",
      description: 
        "Dashboard intuitivo com acesso a métricas cruciais como tempo médio de atendimento e avaliações de clientes.",
      icon: <BarChart3 size={20} />,
    },
    {
      title: "CRM Visual",
      description: 
        "Gerencie interações com clientes de forma eficaz com nosso CRM baseado em Kanban.",
      icon: <Layout size={20} />,
    },
  ];

  const featureGroupRef = useRef<HTMLDivElement>(null);

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

    if (featureGroupRef.current) {
      observer.observe(featureGroupRef.current);
    }

    return () => {
      if (featureGroupRef.current) {
        observer.unobserve(featureGroupRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-[#0f172a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
              {featuresData.map((feature, index) => (
                <Feature
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div 
            ref={featureGroupRef}
            className="order-1 lg:order-2 opacity-0 translate-y-8 transition-all duration-500 ease-out"
          >
            <div className="text-center lg:text-left lg:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Recursos que fazem a <span className="text-brand-600 dark:text-brand-400">diferença</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                O WhatsNeed CRM é projetado para impulsionar seu atendimento com uma série de recursos avançados que ajudam a aumentar a eficiência, melhorar a colaboração da equipe e fornecer insights valiosos.
              </p>
              
              <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-[#131e32] shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <span className="font-bold text-xl">+</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-1 dark:text-white">Integrações nativas</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Conecte o WhatsNeed CRM a mais de 30 ferramentas populares de marketing e vendas para criar um fluxo de trabalho perfeito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
