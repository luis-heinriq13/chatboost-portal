import { useState } from "react";
import { CheckCircle } from "lucide-react";
import PricingToggle from "./pricing/PricingToggle";
import PricingCard from "./pricing/PricingCard";
import { getPricingPlans } from "@/data/pricingPlans";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  const plans = getPricingPlans();


  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-[#0f172a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Escolha o Plano Ideal para Seu Negócio
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Soluções flexíveis que crescem com o seu negócio, sem contratos longos
          </p>

          <PricingToggle annual={annual} setAnnual={setAnnual} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Todos os preços em Reais (R$). Faturamento mensal ou anual.
          </p>
          <div className="flex items-center justify-center">
            <CheckCircle size={16} className="text-[#6F2CC0] dark:text-brand-400 mr-2" />
            <span className="text-slate-700 dark:text-slate-300 text-sm">Garantia de devolução do dinheiro por 14 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
