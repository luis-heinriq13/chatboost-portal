
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

const FAQItem = ({ question, answer, isOpen, onClick, delay }: FAQItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={itemRef}
      className={cn(
        "border border-slate-200 rounded-lg overflow-hidden bg-white mb-4 opacity-0 translate-y-8 transition-all duration-500 ease-out",
        isOpen ? "shadow-soft" : ""
      )}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-slate-900">{question}</h3>
        <ChevronDown
          size={20}
          className={cn(
            "text-slate-500 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      <div
        ref={contentRef}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="p-6 pt-0 text-slate-600">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Preciso instalar algo no meu celular para usar o WhatsNeed CRM?",
      answer:
        "Não, o WhatsNeed CRM funciona totalmente na nuvem. Você só precisa conectar seu número do WhatsApp seguindo um processo simples de QR Code, sem necessidade de instalar aplicativos adicionais no seu celular ou computador.",
    },
    {
      question: "É possível usar o mesmo número de WhatsApp em vários computadores?",
      answer:
        "Sim! Com o WhatsNeed CRM, seu número de WhatsApp pode ser acessado simultaneamente por múltiplos atendentes em diferentes dispositivos, garantindo um atendimento contínuo e eficiente.",
    },
    {
      question: "Como funciona o chatbot com Inteligência Artificial?",
      answer:
        "Nosso chatbot com IA é treinado para entender as perguntas mais comuns dos seus clientes e fornecer respostas precisas. Ele aprende constantemente com as interações e pode ser personalizado para se adequar ao tom e às especificidades do seu negócio.",
    },
    {
      question: "O WhatsNeed CRM oferece relatórios de desempenho?",
      answer:
        "Sim, nossa plataforma inclui relatórios detalhados sobre tempo de resposta, taxa de conversão, satisfação do cliente e muito mais. Esses insights ajudam a otimizar seu atendimento e aumentar suas vendas.",
    },
    {
      question: "Posso testar o WhatsNeed CRM antes de comprar?",
      answer:
        "Absolutamente! Oferecemos um período de teste gratuito de 3 dias com acesso a todas as funcionalidades. Não exigimos cartão de crédito para o teste, e você pode cancelar a qualquer momento.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Respostas para as dúvidas mais comuns sobre o WhatsNeed CRM
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
