
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "./ui/button-custom";
import { CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  monthly: number;
  annually: number;
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
  connections: number;
  users: number;
  queues: number;
}

const PricingCard = ({
  plan,
  isAnnual,
  index,
}: {
  plan: PricingPlan;
  isAnnual: boolean;
  index: number;
}) => {
  const price = isAnnual ? plan.annually : plan.monthly;
  const discount = Math.round(((plan.monthly * 12 - plan.annually) / (plan.monthly * 12)) * 100);

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300",
        plan.highlight
          ? "border-2 border-brand-500 shadow-strong transform hover:-translate-y-1"
          : "border border-slate-200 shadow-soft hover:shadow-strong hover:-translate-y-1"
      )}
    >
      {plan.highlight && (
        <div className="absolute top-0 right-0 left-0">
          <div className="bg-brand-500 text-white text-xs font-medium py-1 text-center">
            MAIS POPULAR
          </div>
        </div>
      )}

      <div className={cn("p-6", plan.highlight ? "pt-10" : "")}>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
        <p className="text-slate-600 h-12 mb-4">{plan.description}</p>

        <div className="mb-4">
          <div className="flex items-end">
            <span className="text-4xl font-bold text-slate-900">
              R${price.toFixed(2).replace(".", ",")}
            </span>
            <span className="text-slate-600 ml-2">
              {isAnnual ? "/ano" : "/mês"}
            </span>
          </div>
          {isAnnual && (
            <div className="text-xs text-slate-600 mt-1">
              <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
                Economia de {discount}%
              </Badge>
            </div>
          )}
        </div>

        <div className="mb-6 space-y-1 text-sm text-slate-600">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 flex-shrink-0">
              <CheckCircle size={16} className="text-brand-500" />
            </div>
            <span>{plan.connections} {plan.connections > 1 ? "Conexões" : "Conexão"}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 flex-shrink-0">
              <CheckCircle size={16} className="text-brand-500" />
            </div>
            <span>{plan.users} Usuários</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 flex-shrink-0">
              <CheckCircle size={16} className="text-brand-500" />
            </div>
            <span>{plan.queues} Filas</span>
          </div>
        </div>

        <ButtonCustom
          variant={plan.highlight ? "primary" : "outline"}
          className="w-full"
          withArrow
        >
          Quero Este Plano
        </ButtonCustom>

        <div className="mt-8 space-y-3">
          <p className="text-sm font-medium text-slate-700">Inclui:</p>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <div className="w-4 h-4 mt-0.5 mr-3 flex-shrink-0">
                {feature.included ? (
                  <CheckCircle size={16} className="text-brand-500" />
                ) : (
                  <XCircle size={16} className="text-slate-300" />
                )}
              </div>
              <span className="text-sm text-slate-600">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  const features = [
    "Atendimento multicanal",
    "Chatbot com IA",
    "Comunicação interna",
    "Relatórios avançados",
    "API para integração",
    "Suporte 24/7",
  ];

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      monthly: 19,
      annually: 190,
      description: "Para pequenos negócios começarem a automatizar.",
      features: features.map((f, i) => ({ name: f, included: i < 3 })),
      connections: 1,
      users: 5,
      queues: 5,
    },
    {
      name: "Business",
      monthly: 39,
      annually: 390,
      description: "Ideal para empresas em crescimento.",
      features: features.map((f, i) => ({ name: f, included: i < 5 })),
      highlight: true,
      connections: 1,
      users: 10,
      queues: 8,
    },
    {
      name: "Pro",
      monthly: 59,
      annually: 590,
      description: "Para negócios estabelecidos com alto volume.",
      features: features.map(() => ({ name: "", included: true })),
      connections: 2,
      users: 15,
      queues: 15,
    },
    {
      name: "Corporate",
      monthly: 59,
      annually: 566,
      description: "A melhor escolha para empresas maiores.",
      features: features.map(() => ({ name: "", included: true })),
      connections: 2,
      users: 15,
      queues: 15,
    },
  ];

  // Update the "features" array for the last plan
  plans[3].features = features.map((f) => ({ name: f, included: true }));

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Escolha o Plano Ideal para Seu Negócio
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Soluções flexíveis que crescem com o seu negócio, sem contratos longos
          </p>

          <div className="flex items-center justify-center mb-8">
            <span
              className={cn(
                "mr-3 text-sm font-medium",
                !annual ? "text-slate-900" : "text-slate-500"
              )}
            >
              Mensal
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                annual ? "bg-brand-500" : "bg-slate-300"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 rounded-full bg-white transition-transform",
                  annual ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span
              className={cn(
                "ml-3 text-sm font-medium",
                annual ? "text-slate-900" : "text-slate-500"
              )}
            >
              Anual
            </span>
            <Badge variant="outline" className="ml-2 bg-brand-50 text-brand-700 border-brand-200">
              Economize até 20%
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              isAnnual={annual}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-4">
            Todos os preços em Reais (R$). Faturamento mensal ou anual.
          </p>
          <div className="flex items-center justify-center">
            <CheckCircle size={16} className="text-brand-500 mr-2" />
            <span className="text-slate-700 text-sm">Garantia de devolução do dinheiro por 14 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
