
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import PricingToggle from "./pricing/PricingToggle";
import PricingCard from "./pricing/PricingCard";
import { getPricingPlans } from "@/data/pricingPlans";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  const plans = getPricingPlans();

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

          <PricingToggle annual={annual} setAnnual={setAnnual} />
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
