
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Badge } from "@/components/ui/badge";
import PricingFeatureList from "./PricingFeatureList";
import { PricingPlan } from "@/types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  index: number;
}

const PricingCard = ({ plan, isAnnual, index }: PricingCardProps) => {
  const price = isAnnual ? plan.annually : plan.monthly;
  const discount = Math.round(((plan.monthly * 12 - plan.annually) / (plan.monthly * 12)) * 100);

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300",
        plan.highlight
          ? "border-2 border-[#6F2CC0] shadow-strong transform hover:-translate-y-1"
          : "border border-slate-200 dark:border-slate-700 shadow-soft hover:shadow-strong hover:-translate-y-1"
      )}
    >
      {plan.highlight && (
        <div className="absolute top-0 right-0 left-0">
          <div className="bg-[#6F2CC0] text-white text-xs font-medium py-1 text-center">
            MAIS POPULAR
          </div>
        </div>
      )}

      <div className={cn("p-6 bg-white dark:bg-[#131e32]", plan.highlight ? "pt-10" : "")}>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
        <p className="text-slate-600 dark:text-slate-400 h-12 mb-4">{plan.description}</p>

        <div className="mb-4">
          <div className="flex items-end">
            <span className="text-4xl font-bold text-slate-900 dark:text-white">
              R${price.toFixed(2).replace(".", ",")}
            </span>
            <span className="text-slate-600 dark:text-slate-400 ml-2">
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

        <div className="mb-6 space-y-1 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 flex-shrink-0">
              <CheckCircle size={16} className="text-[#6F2CC0] dark:text-brand-400" />
            </div>
            <span>{plan.connections} {plan.connections > 1 ? "Conexões" : "Conexão"}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 flex-shrink-0">
              <CheckCircle size={16} className="text-[#6F2CC0] dark:text-brand-400" />
            </div>
            <span>{plan.users} Usuários</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 flex-shrink-0">
              <CheckCircle size={16} className="text-[#6F2CC0] dark:text-brand-400" />
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

        <PricingFeatureList features={plan.features} />
      </div>
    </div>
  );
};

export default PricingCard;
