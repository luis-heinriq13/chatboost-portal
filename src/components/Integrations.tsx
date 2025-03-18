
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Puzzle, Lock, MessageSquare, Calendar, CreditCard, FileText } from "lucide-react";
import { ButtonCustom } from "./ui/button-custom";

interface IntegrationCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  delay: number;
}

const IntegrationCard = ({ title, icon, description, delay }: IntegrationCardProps) => {
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
        "bg-white rounded-xl shadow-soft border border-slate-100 p-6 text-center hover:shadow-strong transition-all duration-300 opacity-0 translate-y-8"
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mx-auto mb-5 text-brand-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
};

const Integrations = () => {
  const integrations = [
    {
      title: "Autenticação Segura",
      description: "Integração com sistemas de login e verificação em duas etapas para máxima segurança.",
      icon: <Lock size={24} />,
    },
    {
      title: "Plataformas de E-commerce",
      description: "Conecte-se com Shopify, WooCommerce, Magento e outras plataformas de vendas online.",
      icon: <CreditCard size={24} />,
    },
    {
      title: "Sistemas de CRM",
      description: "Integre com Salesforce, HubSpot, Pipedrive e outros sistemas de gestão de relacionamento.",
      icon: <MessageSquare size={24} />,
    },
    {
      title: "Ferramentas de Agendamento",
      description: "Sincronize com Google Calendar, Calendly e outros sistemas de agendamento.",
      icon: <Calendar size={24} />,
    },
    {
      title: "ERPs e Sistemas de Gestão",
      description: "Conecte com Totvs, SAP, Oracle e outros sistemas empresariais.",
      icon: <FileText size={24} />,
    },
    {
      title: "API Aberta",
      description: "Possibilidade de integração personalizada com praticamente qualquer sistema via nossa API.",
      icon: <Puzzle size={24} />,
    },
  ];

  return (
    <section id="integrations" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Integrações Poderosas
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Conecte o WhatsNeed CRM com suas ferramentas favoritas para um fluxo de trabalho perfeito
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <IntegrationCard
              key={index}
              title={integration.title}
              description={integration.description}
              icon={integration.icon}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Não encontrou a integração que precisa? Fale conosco para saber sobre integrações personalizadas.
          </p>
          <ButtonCustom variant="primary">
            Ver Todas as Integrações
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
