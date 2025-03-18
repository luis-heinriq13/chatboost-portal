import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  delay: number;
}

const Testimonial = ({ quote, author, role, company, rating, delay }: TestimonialProps) => {
  const testimonialRef = useRef<HTMLDivElement>(null);

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

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={testimonialRef}
      className={cn(
        "bg-white dark:bg-[#131e32] rounded-xl shadow-soft border border-slate-100 dark:border-slate-800 p-6 transition-all duration-500 ease-out opacity-0 translate-y-8",
        "hover:shadow-strong hover:-translate-y-1 transition-all duration-300"
      )}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={cn(
              "mr-1",
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300 dark:text-slate-600"
            )}
          />
        ))}
      </div>
      <blockquote className="text-slate-700 dark:text-slate-300 mb-6">"{quote}"</blockquote>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/40 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 font-semibold mr-3">
          {author.substring(0, 1)}
        </div>
        <div>
          <div className="font-medium text-slate-900 dark:text-white">{author}</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Após implementar o WhatsNeed CRM, vimos um aumento de 45% na taxa de resposta e 30% de crescimento nas conversões.",
      author: "Roberto Silva",
      role: "Diretor de Marketing",
      company: "TechSolutions",
      rating: 5,
    },
    {
      quote:
        "O recurso de chatbot com IA é impressionante. Ele consegue resolver mais de 70% dos atendimentos sem intervenção humana.",
      author: "Carolina Mendes",
      role: "Gerente de Atendimento",
      company: "E-Shop Brasil",
      rating: 5,
    },
    {
      quote:
        "A capacidade de agendar mensagens e fazer disparos em massa nos permite manter um relacionamento constante com nossos clientes.",
      author: "Marcelo Campos",
      role: "CEO",
      company: "Fitness Club",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-[#121d2f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Veja como o WhatsNeed CRM está transformando negócios em todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex rounded-full bg-brand-50 dark:bg-brand-900/20 px-6 py-3 mb-3">
            <div className="text-brand-700 dark:text-brand-400 font-medium">Mais de 1000 empresas confiam no WhatsNeed CRM</div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 flex items-center">
                <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
