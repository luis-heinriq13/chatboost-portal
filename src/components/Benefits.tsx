
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MessageSquare, Bot, Calendar, Users, CheckCircle } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const BenefitCard = ({ title, description, icon, delay }: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "bg-white rounded-xl shadow-soft border border-slate-100 p-6 transition-all duration-500 ease-out opacity-0 translate-y-8"
      )}
    >
      <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center mb-5 text-brand-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Disparos em Massa",
      description: "Alcance todos os seus clientes via WhatsApp de uma vez só.",
      icon: <MessageSquare size={24} />,
    },
    {
      title: "Integração com IA",
      description:
        "Chatbot impulsionado por IA que aprende e se adapta às peculiaridades do seu negócio.",
      icon: <Bot size={24} />,
    },
    {
      title: "Agendamento de Mensagens",
      description:
        "Nunca perca uma oportunidade de venda. Mantenha a comunicação ativa e relevante.",
      icon: <Calendar size={24} />,
    },
    {
      title: "Gerenciamento de Atendimento",
      description:
        "Suporte para múltiplos atendentes e organização de conversas por filas.",
      icon: <Users size={24} />,
    },
  ];

  return (
    <section id="benefits" className="py-20 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-50 to-white pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-50 to-white pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Maximize Sua Eficiência
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Otimize seu atendimento e impulsione seus resultados com recursos poderosos
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-sm text-slate-700">
            {["Fácil implementação", "Interface amigável", "Totalmente integrável", "Suporte personalizado"].map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle size={16} className="text-brand-500 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
