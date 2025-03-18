
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "primary"
    | "whatsapp";
  size?: "default" | "sm" | "lg" | "icon";
  withArrow?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonCustomProps>(
  ({ className, variant = "default", size = "default", withArrow = false, isLoading = false, children, ...props }, ref) => {
    // Map our custom variants to shadcn variants
    let mappedVariant = variant;
    if (variant === "primary") {
      mappedVariant = "default";
    } else if (variant === "whatsapp") {
      mappedVariant = "default";
    }

    return (
      <ShadcnButton
        ref={ref}
        variant={mappedVariant as any}
        size={size}
        className={cn(
          "relative overflow-hidden transition-all duration-300 font-medium",
          variant === "primary" && "bg-brand-600 hover:bg-brand-700 text-white shadow-md hover:shadow-lg active:shadow",
          variant === "whatsapp" && "bg-whatsapp hover:bg-whatsapp-dark text-white shadow-md hover:shadow-lg active:shadow",
          withArrow && "group pr-10",
          isLoading && "opacity-90 pointer-events-none",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="opacity-0">{children}</span>
          </span>
        ) : (
          <>
            <span className={withArrow ? "transition-transform duration-300 group-hover:-translate-x-1" : ""}>
              {children}
            </span>
            {withArrow && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            )}
          </>
        )}
      </ShadcnButton>
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom };
