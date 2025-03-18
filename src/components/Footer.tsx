
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-slate-500 hover:text-brand-600 transition-colors duration-200 inline-flex items-center group"
    >
      <ChevronRight
        size={14}
        className="mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
      />
      {children}
    </a>
  );
};

const SocialLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={cn(
        "w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-500 hover:text-white transition-colors duration-300",
        className
      )}
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <a href="#" className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500">
                  WhatsNeed
                </span>
                <span className="ml-1 text-xs font-medium text-slate-500 mt-1">
                  CRM
                </span>
              </a>
              <p className="mt-4 text-sm text-slate-600">
                Transformando o atendimento via WhatsApp em uma experiência excepcional para empresas de todos os tamanhos.
              </p>
            </div>
            <div className="flex space-x-3">
              <SocialLink href="#" aria-label="Facebook">
                <Facebook size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <Twitter size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#">Sobre nós</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Carreiras</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Clientes</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Parceiros</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#">Centro de Ajuda</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Documentação da API</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Status da Plataforma</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Termos de Serviço</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Política de Privacidade</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Phone size={16} className="mr-3 text-brand-500 flex-shrink-0 mt-1" />
                <span className="text-slate-600">(11) 4002-8922</span>
              </li>
              <li className="flex">
                <Mail size={16} className="mr-3 text-brand-500 flex-shrink-0 mt-1" />
                <span className="text-slate-600">contato@whatsneed.com.br</span>
              </li>
              <li className="flex">
                <MapPin size={16} className="mr-3 text-brand-500 flex-shrink-0 mt-1" />
                <span className="text-slate-600">
                  Av. Paulista, 1234, Bela Vista, São Paulo - SP
                </span>
              </li>
              <li className="mt-6">
                <h4 className="text-sm font-medium text-slate-900 mb-3">
                  Inscreva-se para novidades
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="flex-1 px-3 py-2 text-sm rounded-l-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  />
                  <button className="bg-brand-500 text-white rounded-r-md px-3 flex items-center justify-center hover:bg-brand-600 transition-colors">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WhatsNeed CRM. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-600 transition-colors">
              Termos
            </a>
            <a href="#" className="hover:text-brand-600 transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-brand-600 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
