
import { CheckCircle, XCircle } from "lucide-react";
import { PlanFeature } from "@/types/pricing";

interface PricingFeatureListProps {
  features: PlanFeature[];
}

const PricingFeatureList = ({ features }: PricingFeatureListProps) => {
  return (
    <div className="mt-8 space-y-3">
      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Inclui:</p>
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start">
          <div className="w-4 h-4 mt-0.5 mr-3 flex-shrink-0">
            {feature.included ? (
              <CheckCircle size={16} className="text-[#6F2CC0] dark:text-brand-400" />
            ) : (
              <XCircle size={16} className="text-slate-300 dark:text-slate-600" />
            )}
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-400">{feature.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PricingFeatureList;
