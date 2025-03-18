
import { PricingPlan } from "@/types/pricing";

export const getPricingFeatures = () => [
  "Atendimento multicanal",
  "Chatbot com IA",
  "Comunicação interna",
  "Relatórios avançados",
  "API para integração",
  "Suporte 24/7",
];

export const getPricingPlans = (): PricingPlan[] => {
  const features = getPricingFeatures();
  
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
      name: "Corporate",
      monthly: 59,
      annually: 566,
      description: "A melhor escolha para empresas maiores.",
      features: features.map((f) => ({ name: f, included: true })),
      connections: 2,
      users: 15,
      queues: 15,
    },
  ];

  // Update the "features" array for the last plan
  plans[2].features = features.map((f) => ({ name: f, included: true }));

  return plans;
};
