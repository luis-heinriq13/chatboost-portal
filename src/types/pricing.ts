
export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
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
