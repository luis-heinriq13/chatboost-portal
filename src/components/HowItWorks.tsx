
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step = ({ number, title, description, delay }: StepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={stepRef}
      className={cn(
        "flex items-start opacity-0 translate-y-8 transition-all duration-500 ease-out",
        "md:even:flex-row-reverse"
      )}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xl mr-4 md:mr-6">
        {number}
      </div>
      <div className="flex-1">
        <div className="bg-white rounded-xl shadow-soft border border-slate-100 p-6 md:p-8 hover:shadow-strong transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
          <p className="text-slate-600 mb-0">{description}</p>
        </div>
        {number < 4 && (
          <div className="hidden md:flex justify-center my-4">
            <ArrowRight size={24} className="text-brand-400" />
          </div>
        )}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Cadastre-se e Conecte seu WhatsApp",
      description:
        "Crie sua conta e conecte seu número do WhatsApp em apenas 2 minutos, sem precisar instalar nada no seu celular.",
    },
    {
      title: "Configure Sua Equipe",
      description:
        "Adicione membros da sua equipe, defina permissões e crie filas de atendimento personalizadas para seu negócio.",
    },
    {
      title: "Personalize Automações",
      description:
        "Configure respostas automáticas, chatbot com IA e fluxos de atendimento para otimizar sua comunicação.",
    },
    {
      title: "Comece a Atender e Venda Mais",
      description:
        "Gerencie todas as conversas em um só lugar, acompanhe métricas e aumente suas conversões imediatamente.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Como Funciona
          </h2>
          <p className="text-lg text-slate-600">
            Implementação simples em 4 passos para transformar seu atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
