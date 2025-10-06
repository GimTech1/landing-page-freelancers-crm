import { useState, useEffect, useRef } from 'react';
import { DollarSign, Smartphone, Trophy, Target, Shield, Users, CheckCircle, Building2, Lock, FileText, Clock,  } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? 'animate-fade-in' : 'opacity-0'}`}
      style={{
        animationDelay: inView ? `${delay}s` : '0s',
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

function App() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Ganhe dinheiro indicando pacientes e clínicas';
  const swiperRef = useRef<any>(null);
  const [swiper, setSwiper] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  const goToPrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const toggleFaq = (index: number) => {
    setFaqAberto(faqAberto === index ? null : index);
  };

  const faqs = [
    {
      pergunta: "Preciso pagar algo pra participar?",
      resposta: "Não! Ser Freelancer é de graça. Você só ganha — nunca paga nada pra entrar."
    },
    {
      pergunta: "Quanto ganho por indicar uma clínica?",
      resposta: "Cada clínica de estética ou odontologia que se cadastra com seus dados te dá R$ 100. Simples assim: indicou, ela confirmou com nosso time de vendas, você ganhou."
    },
    {
      pergunta: "E quanto ganho por indicar um paciente?",
      resposta: "Cada paciente que faz um tratamento pela IM gera 1% do valor do procedimento pra você. Se ele fizer um tratamento de R$ 5.000, por exemplo, você ganha R$ 50."
    },
    {
      pergunta: "Tem limite de indicações ou ganhos?",
      resposta: "Não tem limite! Você pode indicar quantas clínicas e pacientes quiser — quanto mais indicar, mais você ganha."
    },
    {
      pergunta: "Como faço para indicar?",
      resposta: "É muito fácil! Na página 'Indicações' você encontra seus links personalizados e materiais prontos. Você pode compartilhar esses links nas suas redes sociais, todos que se cadastrarem pelo seu link serão automaticamente atribuídos a você."
    },
    {
      pergunta: "Como acompanho meus ganhos e status?",
      resposta: "Tudo acontece dentro da plataforma Solumn. Lá você encontra seus ganhos, o status de cada clínica ou paciente indicado e o histórico completo das suas comissões. Basta acessar seu painel como freelancer, entrar nas áreas 'clínicas/pacientes' e acompanhar tudo em tempo real."
    },
    {
      pergunta: "Posso indicar clínicas de qualquer cidade?",
      resposta: "Pode sim! Não tem limite — quanto mais clínicas você indicar, melhor. Elas podem ser de qualquer cidade do Brasil, desde que façam atendimentos de estética ou odontologia."
    },
    {
      pergunta: "Com quem falo se tiver dúvidas?",
      resposta: "Clique no botão no canto inferior direito para entrar em contato com a nossa equipe, ou acesse o suporte após se cadastrar."
    },
    {
      pergunta: "Existe algum grupo ou canal oficial de freelancers?",
      resposta: "Sim! Participe da comunidade dos consultores para receber novidades, campanhas e tirar dúvidas com outros freelancers."
    },
    {
      pergunta: "Posso atualizar meus dados depois do cadastro?",
      resposta: "Sim. Dentro da plataforma Solumn, vá em 'Meu Perfil' e atualize suas informações sempre que precisar — como telefone, e-mail ou chave PIX."
    },
    {
      pergunta: "O que é a Investmoney e o que ela faz?",
      resposta: "A Investmoney é uma empresa que ajuda clínicas a receberem à vista o que os pacientes pagam parcelado. Ela antecipa o dinheiro pra clínica e depois recebe os boletos aos poucos. Assim, a clínica tem dinheiro agora e o paciente pode pagar tranquilo."
    },
    {
      pergunta: "O que significa ser um Freelancer Investmoney?",
      resposta: "É fazer parte da rede que indica clínicas e pacientes pra esse sistema. Você ajuda a conectar quem precisa parcelar com quem oferece o tratamento — e ganha por cada indicação que dá certo."
    },
    {
      pergunta: "Como funciona o sistema de parcelamento no boleto?",
      resposta: "O paciente escolhe pagar em boletos, a clínica faz o tratamento e recebe tudo antes. Depois, a Investmoney cuida de receber os boletos mês a mês. É simples, sem cartão e sem taxas altas."
    },
    {
      pergunta: "É seguro participar?",
      resposta: "Sim! A Investmoney é uma empresa real, com contratos e processos 100% digitais e rastreáveis. Todo pagamento e comissão acontece de forma segura e registrada."
    },
    {
      pergunta: "Meus dados e indicações ficam protegidos?",
      resposta: "Sim. Seus dados são usados só pra validar e pagar suas indicações. Tudo segue as regras da LGPD, a lei que protege informações pessoais no Brasil."
    },
    {
      pergunta: "A Investmoney é uma empresa registrada?",
      resposta: "Sim. A Investmoney Securitizadora S.A. é uma empresa registrada com CNPJ e sede oficial no Brasil, e atua dentro das normas do mercado financeiro."
    }
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 75);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 z-50 p-4 lg:pl-12 pt-4">
        <img 
          src="/logo.png" 
          alt="IM Solumn Logo" 
          className="h-18 w-auto"
        />
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 pl-4 pr-4 px-4 text-white overflow-hidden bg-gray-900">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight lg:min-h-[250px] flex flex-col items-center lg:justify-center">
            <span className="inline-block">
              {displayText}
              {isTyping && <span className="animate-blink">|</span>}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-300 animate-fade-in" style={{animationDelay: '1s', animationFillMode: 'both'}}>
            Trabalhe de onde quiser, sem horário fixo, e receba bônus por cada fechamento de paciente ou clínica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in" style={{animationDelay: '2s', animationFillMode: 'both'}}>
            <button 
              onClick={() => window.open('https://solumn.com.br/cadastro', '_blank')}
              className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-white text-black cursor-pointer"
            >
              Quero ser Freelancer Solumn
            </button>
            <button 
              onClick={() => document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 cursor-pointer"
            >
              Saiba Mais
            </button>
          </div>

          {/* Seta para baixo - Descubra Mais */}
          <div 
            className="lg:mt-12 mt-6 animate-fade-in" 
            style={{animationDelay: '3s', animationFillMode: 'both'}}
          >
            <div className="flex flex-col items-center gap-2 group">
              <span className="text-sm text-gray-300 transition-colors">Descubra mais</span>
              <svg 
                className="w-6 h-6 text-white animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
          
        </div>
      </section>

      {/* Estatísticas de Confiança */}
      <SectionWrapper className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">Plataforma desenvolvida pela <strong className="text-gray-900">Investmoney</strong></p>
          </div>
          <div className="grid md:grid-cols-3 text-center gap-8">
            <div>
              <div className="flex justify-center mb-3">
                <Users className="w-10 h-10 text-gray-900" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-lg text-gray-600">Freelancers Ativos</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Building2 className="w-10 h-10 text-gray-900" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2.500+</div>
              <div className="text-lg text-gray-600">Clínicas Parceiras da Investmoney</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <CheckCircle className="w-10 h-10 text-gray-900" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">250+</div>
              <div className="text-lg text-gray-600">Indicações Realizadas</div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Selos de Garantia */}
      <SectionWrapper className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-gray-900 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">100% Gratuito</div>
                <div className="text-sm text-gray-600">Sem taxas de cadastro</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <Lock className="w-8 h-8 text-gray-900 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Dados Protegidos</div>
                <div className="text-sm text-gray-600">LGPD e segurança total</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <FileText className="w-8 h-8 text-gray-900 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Produto da Investmoney</div>
                <div className="text-sm text-gray-600">Desde 2015 no mercado</div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
              <img 
                src="/selo-solo.png" 
                alt="Great Place to Work Certificada" 
                className="h-16 w-auto"
              />
              <div className="text-left ml-2">
                <div className="font-semibold text-gray-900">Great Place to Work</div>
                <div className="text-sm text-gray-600">Fev/2025 - Fev/2026</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Como Funciona */}
      <div id="como-funciona">
        <SectionWrapper className="py-20 p-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Como Funciona?</h2>
            <div className="grid lg:grid-cols-2 gap-4 items-center">
            {/* Passo a Passo - Esquerda */}
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-gray-600">A clínica faz um tratamento e o paciente paga em várias parcelas. A Investmoney, empresa desenvolvedora da Solumn, adianta esse dinheiro pra clínica — e depois recebe os boletos aos poucos. Isso ajuda clínicas a terem dinheiro agora e pacientes a fazerem o tratamento sem precisar de cartão de crédito e sem taxas abusivas.</p>
              <p className="text-lg leading-relaxed text-gray-600">Você faz parte indicando clínicas que querem receber à vista e pacientes que precisam parcelar com facilidade.</p>
              <SectionWrapper className="flex items-start space-x-4" delay={0.2}>
                <div style={{background: 'var(--bg-hero-gradient)'}} className="border-2 border-gray-200 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Cadastre-se na plataforma</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Crie sua conta de forma rápida e simples.</p>
                </div>
              </SectionWrapper>
              
              <SectionWrapper className="flex items-start space-x-4" delay={0.4}>
                <div style={{background: 'var(--bg-hero-gradient)'}} className="border-2 border-gray-200 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <span className="text-2xl text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Indique pacientes ou clínicas</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Use seus contatos e nossas dicas e materiais dentro da plataforma, para indicar interessados.</p>
                </div>
              </SectionWrapper>
              
              <SectionWrapper className="flex items-start space-x-4" delay={0.6}>
                <div style={{background: 'var(--bg-hero-gradient)'}} className="border-2 border-gray-200 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <span className="text-2xl text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Receba bônus de fechamento</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Ganhe por cada fechamento de paciente ou clínica, diretamente na sua conta bancária.</p>
                </div>
              </SectionWrapper>
            </div>
            
            {/* Vídeo Tutorial - Direita */}
            <SectionWrapper className="flex justify-center items-center" delay={0.8}>
              <div className="w-full max-w-[60%]">
                   <video 
                     ref={videoRef}
                     controls 
                     className="w-full rounded-lg shadow-lg bg-black"
                     preload="metadata"
                     loop
                   >
                  <source src="/IMG_6763.MOV" type="video/quicktime" />
                  <source src="/IMG_6763.MOV" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className="text-center mt-4">
                  <button 
                    onClick={() => window.open('https://solumn.com.br/cadastro', '_blank')}
                    className="w-full px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-gray-900 hover:bg-gray-950 text-white cursor-pointer"
                  >
                    Começar Agora
                  </button>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </SectionWrapper>
      </div>

      {/* Benefícios */}
      <SectionWrapper className="py-20 p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Benefícios para o Freelancer</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-shadow duration-300" delay={0.2}>
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-6">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Bônus imediato</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Receba R$ 100,00 por indicação de clínica <br /> e um percentual do valor do tratamento do paciente indicado.</p>
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-shadow duration-300" delay={0.4}>
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-6">
                  <Smartphone className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Plataforma simples</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Cadastre leads direto do celular ou computador.</p>
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-shadow duration-300" delay={0.6}>
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-6">
                  <Trophy className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Ranking e bonificações</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Bonificações para os top 3 do mês.</p>
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-shadow duration-300" delay={0.8}>
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Liberdade total</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Sem metas obrigatórias, você escolhe quanto ganhar.</p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </SectionWrapper>

       {/* Sobre o Solumn */}
       <SectionWrapper className="py-20 p-8 bg-white">
        <div id="sobre" className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Por que o Solumn é Confiável?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Sobre o Solumn */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Sobre o Solumn</h3>
              <p className="text-base leading-relaxed text-gray-600 mb-4">
                Solumn é uma plataforma desenvolvida pela <strong>Investmoney</strong>, empresa brasileira líder em securitização de crédito desde 2015, especializada em conectar pacientes a clínicas odontológicas e de estética de qualidade.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                A Investmoney possui mais de 2.500 clínicas parceiras em todo Brasil. Através do Solumn, facilitamos o acesso a tratamentos por meio de uma rede de freelancers capacitados que conectam pacientes às clínicas ideais.
              </p>
            </div>

            {/* Mapa de Clínicas */}
            <div className="flex flex-col items-center">
              <img 
                src="/mapa.jpg" 
                alt="Mapa do Brasil mostrando distribuição de clínicas parceiras por região" 
                className="lg:h-[28rem] rounded-xl mb-4 transform scale-110"
              />
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.open('https://solumn.com.br/cadastro', '_blank')}
              className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-gray-900 hover:bg-gray-950 text-white cursor-pointer"
            >
              Cadastre-se Agora e Comece a Ganhar
            </button>
          </div>
        </div>
      </SectionWrapper>

      {/* Garantias */}
      <SectionWrapper className="py-16 p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Nossas Garantias para Você</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Shield className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Sem Custos</h3>
              <p className="text-gray-600">Cadastro e uso gratuitos, para sempre</p>
            </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <FileText className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Plataforma 100% Legal</h3>
              <p className="text-gray-600">Termos de uso claros e conformidade total com a legislação</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Clock className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Liberdade Total</h3>
              <p className="text-gray-600">Cancele quando quiser, sem multas ou penalidades</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Prova Social */}
      <SectionWrapper className="py-20 p-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">O que dizem nossos freelancers</h2>
          <div className="max-w-4xl mx-auto">
            <Swiper
              ref={swiperRef}
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              loop={true}
              className="pb-12"
              onSwiper={setSwiper}
            >
              <SwiperSlide>
                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
                  <blockquote className="text-2xl italic mb-6 leading-relaxed text-gray-700">
                    "Indiquei 3 pacientes e já recebi no mesmo mês! O pagamento caiu no PIX em 5 dias úteis após o fechamento."
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <button 
                      onClick={goToPrevSlide}
                      className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <div className="flex flex-col items-center">
                      <cite className="text-lg font-medium text-gray-500 flex items-center gap-2">
                        Thais Santos, Freelancer Solumn
                      </cite>
                      <span className="text-sm text-gray-400">Curitiba, PR</span>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={goToNextSlide}
                        className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
                  <blockquote className="text-2xl italic mb-6 leading-relaxed text-gray-700">
                    "No primeiro mês ganhei R$ 700 indicando clínicas e pacientes.<br /> O Solumn é muito fácil de usar e o suporte sempre me ajuda!"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                      <button 
                        onClick={() => swiperRef.current?.swiper?.slidePrev()}
                        className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    <div className="flex flex-col items-center">
                      <cite className="text-lg font-medium text-gray-500 flex items-center gap-2">
                        Jéssica Araújo, Freelancer Solumn
                      </cite>
                      <span className="text-sm text-gray-400">Curitiba, PR</span>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={goToNextSlide}
                        className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
                  <blockquote className="text-2xl italic mb-6 leading-relaxed text-gray-700">
                    "Trabalho de casa, no meu horário, sem pressão. Já ganhei <br /> R$ 2.000,00 em 2 meses indicando clínicas e pacientes!"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                      <button 
                        onClick={() => swiperRef.current?.swiper?.slidePrev()}
                        className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    <div className="flex flex-col items-center">
                      <cite className="text-lg font-medium text-gray-500 flex items-center gap-2">
                        Felipe Oliveira, Freelancer Solumn
                      </cite>
                      <span className="text-sm text-gray-400">Curitiba, PR</span>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={goToNextSlide}
                        className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="py-20 p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 flex items-center justify-center gap-3">
            Perguntas Frequentes
          </h2>
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                  faqAberto === index 
                    ? 'border-gray-900 shadow-lg' 
                    : 'border-gray-200 shadow-sm hover:border-gray-400 hover:shadow-md'
                }`}
              >
                <button 
                  className={`w-full p-6 text-left flex justify-between items-center gap-4 transition-all duration-300 ${
                    faqAberto === index 
                      ? 'bg-gray-50' 
                      : 'bg-transparent hover:bg-gray-50'
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900">{faq.pergunta}</span>
                  <svg 
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      faqAberto === index ? 'rotate-180 text-gray-900' : 'text-gray-600'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
                  </svg>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    faqAberto === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-base md:text-lg leading-relaxed text-gray-600">{faq.resposta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Chamada final e Contato */}
      <section className="py-20 p-8 text-white bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <SectionWrapper>
            <h2 className="text-3xl font-bold mb-8 leading-tight">
              Junte-se à nossa rede de captadores e comece a ganhar ainda hoje!
            </h2>
            <p className="text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Trabalhe de onde quiser, sem horário fixo, e receba bônus por cada fechamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button 
                onClick={() => window.open('https://solumn.com.br/cadastro', '_blank')}
                className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-white text-black cursor-pointer"
              >
                Quero ser Freelancer Solumn
              </button>
            </div>
            
          </SectionWrapper>
        </div>
      </section>

      {/* Rodapé Profissional */}
      <footer className="bg-gray-900 text-gray-300 py-12 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Sobre */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Sobre o Solumn</h4>
              <p className="text-sm leading-relaxed mb-4">
                Plataforma da Investmoney SA que conecta pacientes a clínicas odontológicas através de uma rede de consultores qualificados.
              </p>
              <img 
                src="/logo.png" 
                alt="Solumn - Investmoney SA" 
                className="h-12 w-auto opacity-80"
              />
            </div>

            {/* Links Úteis */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://solumn.com.br/cadastro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Cadastrar-se
                  </a>
                </li>
                <li>
                  <a href="https://investmoneysa.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Site da Investmoney
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-white transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">
                    Sobre nós
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li className="pt-2">
                  <span className="text-xs">Atuando desde 2015</span>
                </li>
                <li className="pt-2">
                  <span className="text-xs text-gray-400">Great Place to Work Certificada</span>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <a href="https://wa.me/5541999647120" className="hover:text-white transition-colors">
                    (41) 99964-7120
                  </a>
                </li>
                <li className="text-xs pt-2">
                  <strong className="text-white block mb-1">Email:</strong>
                  <a href="mailto:contato@investmoneysa.com.br" className="hover:text-white transition-colors">
                    contato@investmoneysa.com.br
                  </a>
                </li>
                <li className="text-xs pt-2">
                  <strong className="text-white block mb-1">Endereço:</strong>
                  Rua Izabel A Redentora, 2616 <br />
                  Centro, São José dos Pinhais, PR
                </li>
              </ul>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-400">
                © 2025 Investmoney SA. Todos os direitos reservados.
              </p>
              <div className="flex flex-col md:flex-row gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Empresa Verificada
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Dados Protegidos
                </span>
                <a href="https://investmoneysa.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Building2 className="w-4 h-4" />
                  investmoneysa.com.br
                </a>
                <div className="flex justify-center mt-6">
                  <img 
                    src="/gptw-selo.png" 
                    alt="Great Place to Work Certificada Fev/2025 - Fev/2026 Brasil" 
                    className="h-24 w-auto mb-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href="https://wa.me/5541999647120?text=Olá! Gostaria de saber mais sobre o programa de freelancers do Solumn."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg 
          className="w-8 h-8" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco!
        </span>
      </a>

    </div>
  )
}

export default App
