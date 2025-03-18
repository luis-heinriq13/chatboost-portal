
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingToggleProps {
  annual: boolean;
  setAnnual: (value: boolean) => void;
}

const PricingToggle = ({ annual, setAnnual }: PricingToggleProps) => {
  return (
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
  );
};

export default PricingToggle;
